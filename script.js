// --- CONFIGURATION & DONNÉES ---
const history = [
    { year: 1961, name: "IBM 7030 Stretch", gflops: 0.0000012, desc: "Le premier transistorisé géant." },
    { year: 1969, name: "Apollo Guidance Computer", gflops: 0.000004, desc: "A emmené l'homme sur la Lune." },
    { year: 1976, name: "Cray-1", gflops: 0.16, desc: "Le supercalculateur iconique des années 70." },
    { year: 1985, name: "Cray-2", gflops: 1.9, desc: "Refroidi par liquide, le monstre des années 80." },
    { year: 1993, name: "Fujitsu NWT", gflops: 124, desc: "Simulateur météo révolutionnaire." },
    { year: 1997, name: "ASCI Red", gflops: 1000, desc: "Premier TeraFLOPS (1000 Giga)." },
    { year: 2004, name: "Blue Gene/L", gflops: 70000, desc: "A dominé le monde pendant 4 ans." },
    { year: 2008, name: "Roadrunner", gflops: 1000000, desc: "Premier PetaFLOPS." },
    { year: 2016, name: "Sunway TaihuLight", gflops: 93000000, desc: "Géant chinois aux 10 millions de cœurs." },
    { year: 2022, name: "Frontier", gflops: 1100000000, desc: "Premier ExaFLOPS de l'histoire." }
];

// --- DÉTECTION MATÉRIEL AVANCÉE ---
async function getFullSpecs() {
    // 1. Utilisation de UAParser pour décoder le "User Agent"
    const parser = new UAParser();
    const result = parser.getResult();
    
    // On construit le nom de l'appareil
    let deviceName = "PC / Mac Générique";
    if (result.device.model) {
        deviceName = `${result.device.vendor || ''} ${result.device.model}`;
    } else if (result.os.name === "Windows") {
        deviceName = "PC Windows";
    } else if (result.os.name === "Mac OS") {
        deviceName = "Apple Mac";
    }

    // 2. Infos Hardware classiques
    const cores = navigator.hardwareConcurrency || "?";
    const ram = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : "Masquée";
    
    // 3. Infos Écran (Densité de pixels pour savoir si c'est Retina/HD)
    const pixelRatio = window.devicePixelRatio > 1 ? "Haute Densité (Retina)" : "Standard";
    const res = `${window.screen.width}x${window.screen.height}`;

    // 4. Info Réseau (Est-ce qu'on est en 4G ou Wifi ?)
    let connectionInfo = "Inconnue";
    if (navigator.connection) {
        // downlink est la vitesse estimée en Mb/s
        const speed = navigator.connection.downlink; 
        const type = navigator.connection.effectiveType; // '4g', '3g', etc.
        connectionInfo = `${type.toUpperCase()} (~${speed} Mbps)`;
    }

    // 5. GPU
    const gpu = getGPU();
    
    // Remplissage du HTML
    const html = `
        <ul>
            <li><span>Appareil</span> <span>${deviceName}</span></li>
            <li><span>Système</span> <span>${result.os.name} ${result.os.version}</span></li>
            <li><span>Navigateur</span> <span>${result.browser.name}</span></li>
            <li><span>CPU (Cœurs)</span> <span>${cores}</span></li>
            <li><span>RAM</span> <span>${ram}</span></li>
            <li><span>GPU</span> <span>${gpu}</span></li>
            <li><span>Écran</span> <span>${res} (${pixelRatio})</span></li>
            <li><span>Réseau</span> <span>${connectionInfo}</span></li>
        </ul>
    `;
    document.getElementById('device-specs').innerHTML = html;
}

function getGPU() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return "Générique";
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) return "Masqué par sécurité";
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        // Nettoyage pour que ce soit lisible
        let cleanName = renderer;
        // On enlève le baratin technique "ANGLE ("
        if (cleanName.includes("ANGLE (")) {
            cleanName = cleanName.replace("ANGLE (", "").replace(")", "");
            cleanName = cleanName.split(",")[0]; // On garde juste le premier morceau
        }
        return cleanName;
    } catch (e) {
        return "Non détecté";
    }
}

// --- BENCHMARK (Inchangé) ---
function runBenchmark() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const start = performance.now();
        let operations = 0;
        
        while (performance.now() - start < 1000) {
            Math.sqrt(Math.random() * Math.random());
            operations++;
        }
        
        const estimatedGflops = ((operations / 1.0) / 1000000000) * 25; 
        displayResult(estimatedGflops);
    }, 500);
}

function displayResult(gflops) {
    let match = history[0];
    for (let pc of history) {
        if (gflops > pc.gflops) match = pc;
        else break;
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    document.getElementById('match-year').innerText = match.year;
    document.getElementById('match-name').innerText = match.name;
    document.getElementById('match-desc').innerText = match.desc;
    document.getElementById('user-gflops').innerText = gflops.toFixed(2);
}

// Lancement automatique de la détection
getFullSpecs();
