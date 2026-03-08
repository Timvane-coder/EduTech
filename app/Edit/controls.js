// Control-related functions
function setupControls() {
    // Manual camera controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    renderer.domElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    renderer.domElement.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            networkGroup.rotation.y += deltaMove.x * 0.005;
            networkGroup.rotation.x += deltaMove.y * 0.005;

            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    renderer.domElement.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    renderer.domElement.addEventListener('wheel', (e) => {
        camera.position.z += e.deltaY * 0.01;
        camera.position.z = Math.max(10, Math.min(50, camera.position.z));
    });
}

function setupEventListeners() {
    renderer.domElement.addEventListener('click', onNodeClick);
    window.addEventListener('resize', onWindowResize);
}

function setViewMode(mode) {
    currentViewMode = mode;

    // Update button states
    document.querySelectorAll('.control-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Animate to new positions
    nodes.forEach((node, index) => {
        if (node.userData.id === 'central') return;

        let newPosition;
        switch (mode) {
            case 'sphere':
                newPosition = node.userData.originalPosition.clone();
                break;
            case 'grid':
                const gridSize = Math.ceil(Math.sqrt(nodes.length));
                const x = (index % gridSize - gridSize / 2) * 8;
                const y = (Math.floor(index / gridSize) - gridSize / 2) * 8;
                newPosition = new THREE.Vector3(x, y, 0);
                break;
            case 'random':
                newPosition = new THREE.Vector3(
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 30
                );
                break;
        }

        // Animate position change
        animateNodePosition(node, newPosition);
    });

    // Update connections
    setTimeout(() => {
        updateConnections();
    }, 1000);
}

function animateNodePosition(node, targetPosition) {
    const startPosition = node.position.clone();
    const duration = 1000;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        node.position.lerpVectors(startPosition, targetPosition, eased);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function toggleAnimation() {
    isAnimating = !isAnimating;
}

function toggleParticles() {
    showParticles = !showParticles;
    particleSystem.visible = showParticles;
}

function resetCamera() {
    camera.position.set(0, 0, 30);
    networkGroup.rotation.set(0, 0, 0);
}
