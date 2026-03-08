function createNodes() {
            nodes = [];

            nodeData.forEach((data, index) => {
                // Create node geometry
                const geometry = new THREE.SphereGeometry(data.size, 32, 32);
                const material = new THREE.MeshPhongMaterial({
                    color: data.color,
                    emissive: data.color,
                    emissiveIntensity: 0.2,
                    shininess: 100,
                    transparent: true,
                    opacity: 0.9
                });

                const node = new THREE.Mesh(geometry, material);
                node.castShadow = true;
                node.receiveShadow = true;

                // Position nodes
                if (data.id === 'central') {
                    node.position.set(0, 0, 0);
                } else {
                    const angle = (index / (nodeData.length - 1)) * Math.PI * 2;
                    const radius = 15 + Math.random() * 5;
                    node.position.x = Math.cos(angle) * radius;
                    node.position.y = (Math.random() - 0.5) * 10;
                    node.position.z = Math.sin(angle) * radius;
                }

                // Add glow effect
                const glowGeometry = new THREE.SphereGeometry(data.size * 1.3, 16, 16);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: data.color,
                    transparent: true,
                    opacity: 0.1,
                    side: THREE.BackSide
                });
                const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
                node.add(glowMesh);

                // Store node data
                node.userData = {
                    ...data,
                    originalPosition: node.position.clone(),
                    originalScale: node.scale.clone(),
                    pulseOffset: Math.random() * Math.PI * 2
                };

                nodes.push(node);
                networkGroup.add(node);
            });
        }

        function selectNode(node) {
            // Reset previous selection
            if (selectedNode) {
                selectedNode.scale.copy(selectedNode.userData.originalScale);
                selectedNode.material.emissiveIntensity = 0.2;
            }

            selectedNode = node;

            // Highlight selected node
            node.scale.multiplyScalar(1.3);
            node.material.emissiveIntensity = 0.5;

            // Show node info
            const infoPanel = document.getElementById('node-info');
            document.getElementById('node-title').textContent = node.userData.name;
            document.getElementById('node-details').innerHTML = `
                <strong>Type:</strong> ${node.userData.type}<br>
                <strong>Status:</strong> Online<br>
                <strong>Connections:</strong> ${getNodeConnections(node)}<br>
                <strong>Load:</strong> ${Math.floor(Math.random() * 100)}%`;
            infoPanel.style.display = 'block';

            // Show WiFi card if it's a WiFi node
            if (node.userData.type === 'wifi') {
                showWifiCard(node.userData);
            }
        }

        function getNodeConnections(node) {
            return connections.filter(conn =>
                conn.userData.node1 === node || conn.userData.node2 === node
            ).length;
        }

        function showWifiCard(nodeData) {
            const overlay = document.getElementById('wifi-card-overlay');
            
            // Update WiFi card information
            document.getElementById('wifi-network-name').textContent = nodeData.name;
            document.getElementById('wifi-ssid').textContent = nodeData.name;
            document.getElementById('wifi-security').textContent = 'WPA3-Personal';
            document.getElementById('wifi-signal').textContent = 'Strong';
            document.getElementById('wifi-frequency').textContent = Math.random() > 0.5 ? '5 GHz' : '2.4 GHz';
            document.getElementById('wifi-status').textContent = 'Connected';
            document.getElementById('wifi-ip').textContent = `192.168.1.${Math.floor(Math.random() * 254) + 1}`;
            document.getElementById('wifi-mac').textContent = generateMacAddress();
            document.getElementById('wifi-speed').textContent = `${Math.floor(Math.random() * 300) + 50} Mbps`;

            // Update signal strength
            const signalBars = document.querySelectorAll('.signal-bar');
            const signalStrength = Math.floor(Math.random() * 4) + 1;
            signalBars.forEach((bar, index) => {
                bar.classList.toggle('active', index < signalStrength);
            });

            overlay.style.display = 'flex';
        }

        function closeWifiCard() {
            document.getElementById('wifi-card-overlay').style.display = 'none';
        }

        function generateMacAddress() {
            const chars = '0123456789ABCDEF';
            let mac = '';
            for (let i = 0; i < 6; i++) {
                if (i > 0) mac += ':';
                mac += chars[Math.floor(Math.random() * 16)];
                mac += chars[Math.floor(Math.random() * 16)];
            }
            return mac;
        }

        function onNodeClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(nodes);

            if (intersects.length > 0) {
                selectNode(intersects[0].object);
            }
        }

        function onMouseMove(event) {
            if (event.buttons === 1) { // Left mouse button
                const deltaX = event.movementX * 0.01;
                const deltaY = event.movementY * 0.01;
                
                networkGroup.rotation.y += deltaX;
                networkGroup.rotation.x += deltaY;
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
