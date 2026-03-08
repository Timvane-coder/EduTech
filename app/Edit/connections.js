// Connection-related functions
function createConnections() {
    connections = [];
    const centralNode = nodes[0]; // Assuming first node is central

    // Connect all nodes to central hub with curved connections
    for (let i = 1; i < nodes.length; i++) {
        const connection = createConnection(centralNode, nodes[i], true);
        connections.push(connection);
        networkGroup.add(connection);
    }

    // Create cross connections between nearby nodes on the sphere
    for (let i = 1; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const distance = nodes[i].position.distanceTo(nodes[j].position);
            // Only connect nodes that are relatively close on the sphere
            if (distance < 12 && Math.random() > 0.6) {
                const connection = createConnection(nodes[i], nodes[j], false);
                connections.push(connection);
                networkGroup.add(connection);
            }
        }
    }
}

function createConnection(node1, node2, isCentralConnection = false) {
    const start = node1.position.clone();
    const end = node2.position.clone();

    // Create curved connection for 3D effect
    const curve = new THREE.CatmullRomCurve3([
        start,
        start.clone().lerp(end, 0.3).add(new THREE.Vector3(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
        )),
        start.clone().lerp(end, 0.7).add(new THREE.Vector3(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
        )),
        end
    ]);

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Enhanced material based on connection type
    const material = new THREE.LineBasicMaterial({
        color: isCentralConnection ? 0x4A90E2 : 0x7FB3D3,
        transparent: true,
        opacity: isCentralConnection ? 0.8 : 0.4,
        linewidth: isCentralConnection ? 3 : 1
    });

    const line = new THREE.Line(geometry, material);

    // Add data flow particles along the connection
    const particleCount = 10;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const t = i / particleCount;
        const point = curve.getPoint(t);
        particlePositions[i * 3] = point.x;
        particlePositions[i * 3 + 1] = point.y;
        particlePositions[i * 3 + 2] = point.z;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
        color: isCentralConnection ? 0xffffff : 0x4A90E2,
        size: 0.3,
        transparent: true,
        opacity: 0.8
    });

    const dataFlow = new THREE.Points(particleGeometry, particleMaterial);
    line.add(dataFlow);

    line.userData = {
        node1,
        node2,
        curve,
        dataFlow,
        isCentralConnection,
        animationOffset: Math.random() * Math.PI * 2
    };

    return line;
}

function updateConnections() {
    connections.forEach(connection => {
        const points = [];
        points.push(connection.userData.node1.position);
        points.push(connection.userData.node2.position);
        connection.geometry.setFromPoints(points);
    });
}
