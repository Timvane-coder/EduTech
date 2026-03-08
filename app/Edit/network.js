// Network initialization and main functions
function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a23, 50, 200);
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a23, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('container').appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4A90E2, 1, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Network group
    networkGroup = new THREE.Group();
    scene.add(networkGroup);

    createNodes();
    createConnections();
    createParticleSystem();
    setupControls();
    setupEventListeners();

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    if (isAnimating) {
        // Rotate network group
        networkGroup.rotation.y += 0.005;

        // Animate nodes
        nodes.forEach((node, index) => {
            const time = Date.now() * 0.001;
            const pulseScale = 1 + Math.sin(time * 2 + node.userData.pulseOffset) * 0.1;

            if (node !== selectedNode) {
                node.scale.setScalar(node.userData.size * pulseScale);
            }

            // Update node material
            node.material.emissiveIntensity = 0.2 + Math.sin(time * 3 + node.userData.pulseOffset) * 0.1;
        });

        // Animate connections
        connections.forEach(connection => {
            const time = Date.now() * 0.001;
            connection.material.opacity = 0.6 + Math.sin(time * 2) * 0.2;
        });

        // Animate particles
        if (showParticles && particleSystem) {
            particleSystem.rotation.x += 0.001;
            particleSystem.rotation.y += 0.002;
        }
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
