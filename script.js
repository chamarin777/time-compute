// --- CONFIGURATION & DONNÉES ---
const history = [
    { year: 1961, name: "IBM 7030 Stretch", gflops: 0.0000012, desc: "Le premier transistorisé géant." },
    { year: 1969, name: "Apollo Guidance Computer", gflops: 0.000004, desc: "A emmené l'homme sur la Lune avec 4Ko de RAM." },
    { year: 1976, name: "Cray-1", gflops: 0.16, desc: "Le supercalculateur iconique des années 70." },
    { year: 1985, name: "Cray-2", gflops: 1.9, desc: "Refroidi par liquide, le monstre des années 80." },
    { year: 1993, name: "Fujitsu NWT", gflops: 124, desc: "Simulateur météo révolutionnaire." },
    { year: 1997, name: "ASCI Red", gflops: 1000, desc: "Le premier à passer le cap du TeraFLOPS." },
    { year: 2000, name: "IBM ASCI White", gflops: 7200, desc: "Pesait 106 tonnes pour la simulation nucléaire." },
    { year: 2004, name: "Blue Gene/L", gflops: 70000, desc: "A dominé le monde pendant 4 ans." },
    { year: 2008, name: "Roadrunner", gflops: 1000000, desc: "Le premier PetaFLOPS (1 million de Giga)." },
    { year: 2016, name: "Sunway TaihuLight", gflops: 93000000, desc: "Le géant chinois aux 10 millions de coeurs." },
    { year: 2020, name: "Fugaku", gflops: 442000000, desc: "Le champion japonais." },
    { year: 2022, name: "Frontier", gflops: 1100000000, desc: "Le premier ExaFLOPS de l'histoire humaine." }
];

// --- DÉTECTION MATÉRIEL ---
async function getFullSpecs() {
    const cores = navigator.hardwareConcurrency || "?";
    const ram = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : "Masquée";
    const gpu = getGPU();
    
    // Remplissage du HTML
    const html = `
        <ul>
            <li><span>CPU (Coeurs)</span> <span>${cores}</span></li>
            <li><span>RAM</span> <span>${ram}</span></li>
            <li><span>GPU</span> <span>${gpu}</span></li>
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
        if (!debugInfo) return "Masqué";
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        // Nettoyage du nom pour faire plus court
        return renderer.replace("ANGLE (", "").replace(")", "").split(",")[0]; 
    } catch (e) {
        return "Non détecté";
    }
}

// --- BENCHMARK ---
function runBenchmark() {
    // Interface
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const start = performance.now();
        let operations = 0;
        
        // La boucle de stress (1000ms)
        while (performance.now() - start < 1000) {
            Math.sqrt(Math.random() * Math.random());
            operations++;
        }
        
        // Calibrage : (Ops / Temps) / 1 Milliard * Facteur JS (x25)
        const estimatedGflops = ((operations / 1.0) / 1000000000) * 25; 
        
        displayResult(estimatedGflops);
    }, 500); // Petit délai pour l'animation
}

function displayResult(gflops) {
    let match = history[0];
    
    // Algorithme de recherche historique
    for (let pc of history) {
        if (gflops > pc.gflops) {
            match = pc;
        } else {
            break;
        }
    }

    // Affichage
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block'; // Retire la classe hidden
    
    document.getElementById('match-year').innerText = match.year;
    document.getElementById('match-name').innerText = match.name;
    document.getElementById('match-desc').innerText = match.desc;
    document.getElementById('user-gflops').innerText = gflops.toFixed(2);
}

// Lancement au démarrage
getFullSpecs();
