// Configuration and constants
const nodeData = [
    { id: 'central', type: 'hub', color: 0x4A90E2, symbol: '🌐', name: 'Network Hub', size: 1.5 },
    { id: 'security', type: 'service', color: 0x5DADE2, symbol: '🔒', name: 'Security', size: 1.0 },
    { id: 'cloud', type: 'service', color: 0x85C1E9, symbol: '☁️', name: 'Cloud Services', size: 1.0 },
    { id: 'wifi', type: 'service', color: 0x3498DB, symbol: '📶', name: 'WiFi Network', size: 1.0 },
    { id: 'database', type: 'service', color: 0x5499C7, symbol: '🗄️', name: 'Database', size: 1.0 },
    { id: 'api', type: 'service', color: 0x7FB3D3, symbol: '🔗', name: 'API Gateway', size: 1.0 },
    { id: 'monitoring', type: 'service', color: 0xAED6F1, symbol: '📊', name: 'Monitoring', size: 1.0 },
    { id: 'backup', type: 'support', color: 0xF7DC6F, symbol: '💾', name: 'Backup', size: 0.8 },
    { id: 'analytics', type: 'support', color: 0x82E0AA, symbol: '📈', name: 'Analytics', size: 0.8 },
    { id: 'firewall', type: 'support', color: 0xF1948A, symbol: '🛡️', name: 'Firewall', size: 0.8 }
];

// Global variables
let scene, camera, renderer, controls;
let nodes = [], connections = [], particles = [];
let networkGroup, particleSystem;
let isAnimating = true, showParticles = true;
let currentViewMode = 'sphere';
let selectedNode = null;
let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
