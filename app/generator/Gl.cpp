RenderSystem::RenderSystem(std::vector<unsigned int>& shaders,
    GLFWwindow* window, ComponentSet<TransformComponent> &transforms,
    ComponentSet<RenderComponent> &renderables,
    ComponentSet<AnimationComponent> &animations):
shaders(shaders), transforms(transforms),
renderables(renderables), animations(animations) {
    this->window = window;

    textures.resize(2);
    VAOs.resize(2);
    VBOs.resize(2);
    EBOs.resize(2);

    build_sky();
    build_models();
    build_geometry();

    // Initialize Shader Uniforms
    for(int i = 0; i < 3; ++i) {
        glUseProgram(shaders[i]);
        glUniform1i(glGetUniformLocation(shaders[i], "materials"), 0);
        glUniform1i(glGetUniformLocation(shaders[i], "sky"), 1);
    }
    modelLocation = glGetUniformLocation(shaders[2], "model");
}

RenderSystem::~RenderSystem() {
    if (isRecording) stop_recording();
    glDeleteVertexArrays(VAOs.size(), VAOs.data());
    glDeleteBuffers(VBOs.size(), VBOs.data());
    glDeleteBuffers(EBOs.size(), EBOs.data());
    glDeleteTextures(textures.size(), textures.data());
}

void RenderSystem::start_recording() {
    int w, h;
    glfwGetFramebufferSize(window, &w, &h);
    pixelBuffer.resize(w * h * 3);

    // Command to pipe raw RGB pixels to FFmpeg
    // -r 60: Output framerate
    // -vf vflip: Flip vertically (OpenGL fix)
    // -preset ultrafast: Minimize CPU impact during recording
    std::string cmd = "ffmpeg -y -f rawvideo -pix_fmt rgb24 -s " +
                      std::to_string(w) + "x" + std::to_string(h) +
                      " -r 60 -i - -vf vflip -c:v libx264 -preset ultrafast -pix_fmt yuv420p output.mp4";

    ffmpegPipe = popen(cmd.c_str(), "w");
    if (ffmpegPipe) {
        isRecording = true;
        std::cout << "Recording started..." << std::endl;
    }
}

void RenderSystem::stop_recording() {
    if (ffmpegPipe) {
        pclose(ffmpegPipe);
        ffmpegPipe = nullptr;
    }
    isRecording = false;
    std::cout << "Recording saved to output.mp4" << std::endl;
}

void RenderSystem::update() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    // 1. Render Sky
    glUseProgram(shaders[0]);
    glDisable(GL_DEPTH_TEST);
    glActiveTexture(GL_TEXTURE1);
    glBindTexture(GL_TEXTURE_CUBE_MAP, skyTexture);
    glDrawArrays(GL_TRIANGLES, 0, 6);
    glEnable(GL_DEPTH_TEST);

    // 2. Render Static Geometry
    glUseProgram(shaders[1]);
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D_ARRAY, textures[0]);
    glBindVertexArray(VAOs[0]);
    glDrawElements(GL_TRIANGLES, elementCounts[ObjectType::eGeometry], GL_UNSIGNED_INT, 0);

    // 3. Render Dynamic Entities
    glUseProgram(shaders[2]);
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D_ARRAY, textures[1]);
    glBindVertexArray(VAOs[1]);

    for (size_t i = 0; i < renderables.entities.size(); ++i) {
        uint32_t entity = renderables.entities[i];
        RenderComponent& renderable = renderables.components[i];
        TransformComponent& transform = transforms.get_component(entity);

        glm::mat4 model = glm::translate(glm::mat4(1.0f), transform.position);
        model = glm::rotate(model, glm::radians(transform.eulers.z), {0.0f, 0.0f, 1.0f});
        glUniformMatrix4fv(modelLocation, 1, GL_FALSE, glm::value_ptr(model));

        unsigned int elementCount = elementCounts[renderable.objectType];
        size_t frame = (renderable.animationType != AnimationType::eNone) ?
                        static_cast<size_t>(animations.get_component(entity).frame) : 0;

        unsigned int offset = sizeof(unsigned int) * (offsets[renderable.objectType][renderable.animationType] + frame * elementCount);
        glDrawElements(GL_TRIANGLES, elementCount, GL_UNSIGNED_INT, (void*)(uintptr_t)offset);
    }

    // 4. ImGui Overlay & Recording UI
    ImGui_ImplOpenGL3_NewFrame();
    ImGui_ImplGlfw_NewFrame();
    ImGui::NewFrame();

    ImGui::Begin("Recorder Controls");
    if (!isRecording) {
        if (ImGui::Button("Start Recording MP4")) start_recording();
    } else {
        ImGui::TextColored(ImVec4(1, 0, 0, 1), "● RECORDING");
        if (ImGui::Button("Stop Recording")) stop_recording();
    }
    ImGui::End();

    ImGui::Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());

    // 5. Capture Frame (Before Swap)
    if (isRecording && ffmpegPipe) {
        int w, h;
        glfwGetFramebufferSize(window, &w, &h);
        glReadPixels(0, 0, w, h, GL_RGB, GL_UNSIGNED_BYTE, pixelBuffer.data());
        fwrite(pixelBuffer.data(), pixelBuffer.size(), 1, ffmpegPipe);
    }

    glfwSwapBuffers(window);
}
