// ─── RECIPE DATABASE ────────────────────────────────────────────────────────
// Real recipes from menu-vegetarien.com/recettes-vegan/

const RECIPES = {
    starters: [
        {
            name: "Houmous crémeux",
            url: "https://menu-vegetarien.com/houmous-cremeux/",
            ingredients: [
                { item: "pois chiches cuits", qty: "400", unit: "g" },
                { item: "tahini", qty: "3", unit: "c. à s." },
                { item: "jus de citron", qty: "1", unit: "citron" },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "cumin en poudre", qty: "1", unit: "c. à c." },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
                { item: "bicarbonate de soude", qty: "1/2", unit: "c. à c." },
                { item: "eau glacée", qty: "4", unit: "c. à s." },
                { item: "sel", qty: "", unit: "" },
            ]
        },
        {
            name: "Gaspacho blanc et toasts de tomates",
            url: "https://menu-vegetarien.com/gaspacho-blanc-toasts-tomates/",
            ingredients: [
                { item: "concombre", qty: "2", unit: "" },
                { item: "raisin blanc", qty: "200", unit: "g" },
                { item: "pain de mie", qty: "2", unit: "tranches" },
                { item: "tomates", qty: "2", unit: "" },
                { item: "huile d'olive", qty: "4", unit: "c. à s." },
                { item: "vinaigre de vin blanc", qty: "1", unit: "c. à s." },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Gaspacho vert",
            url: "https://menu-vegetarien.com/gaspacho-vert/",
            ingredients: [
                { item: "concombre", qty: "1", unit: "" },
                { item: "courgette", qty: "1", unit: "" },
                { item: "poivron vert", qty: "1", unit: "" },
                { item: "avocat", qty: "1", unit: "" },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "jus de citron vert", qty: "1", unit: "citron" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Soupe Khao Soi",
            url: "https://menu-vegetarien.com/soupe-khao-soi/",
            ingredients: [
                { item: "nouilles de riz", qty: "200", unit: "g" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "bouillon de légumes", qty: "500", unit: "ml" },
                { item: "pâte Khao Soi (ou curry rouge)", qty: "2", unit: "c. à s." },
                { item: "courge butternut", qty: "200", unit: "g" },
                { item: "brocoli", qty: "150", unit: "g" },
                { item: "pois mange-tout", qty: "100", unit: "g" },
                { item: "sauce tamari", qty: "1", unit: "c. à s." },
                { item: "jus de citron vert", qty: "1", unit: "citron" },
                { item: "coriandre fraîche", qty: "1", unit: "bouquet" },
            ]
        },
        {
            name: "Velouté de champignons",
            url: "https://menu-vegetarien.com/veloute-de-champignons/",
            ingredients: [
                { item: "champignons de Paris", qty: "500", unit: "g" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "bouillon de légumes", qty: "750", unit: "ml" },
                { item: "crème d'avoine", qty: "100", unit: "ml" },
                { item: "thym", qty: "2", unit: "branches" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Soupe crémeuse à l'orge et champignons",
            url: "https://menu-vegetarien.com/soupe-cremeuse-orge-champignons/",
            ingredients: [
                { item: "orge perlé", qty: "150", unit: "g" },
                { item: "champignons de Paris", qty: "300", unit: "g" },
                { item: "carotte", qty: "2", unit: "" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "bouillon de légumes", qty: "1", unit: "litre" },
                { item: "thym", qty: "2", unit: "branches" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Soupe de courgettes et tomates",
            url: "https://menu-vegetarien.com/soupe-courgettes-tomates/",
            ingredients: [
                { item: "courgette", qty: "3", unit: "" },
                { item: "tomates", qty: "4", unit: "" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "bouillon de légumes", qty: "750", unit: "ml" },
                { item: "basilic frais", qty: "1", unit: "bouquet" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Salade de patates douces rôties",
            url: "https://menu-vegetarien.com/salade-patates-douces-roties/",
            ingredients: [
                { item: "patate douce", qty: "2", unit: "" },
                { item: "haricots rouges cuits", qty: "400", unit: "g" },
                { item: "oignons verts", qty: "3", unit: "" },
                { item: "poivron rouge", qty: "1", unit: "" },
                { item: "maïs en boîte", qty: "200", unit: "g" },
                { item: "persil frais", qty: "1", unit: "bouquet" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
                { item: "vinaigre de cidre", qty: "1", unit: "c. à s." },
            ]
        },
    ],

    mains: [
        {
            name: "Curry de lentilles à la courge",
            url: "https://menu-vegetarien.com/curry-lentilles-courge/",
            ingredients: [
                { item: "lentilles vertes sèches", qty: "250", unit: "g" },
                { item: "courge butternut", qty: "400", unit: "g" },
                { item: "chou-fleur", qty: "1/2", unit: "" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "ail", qty: "3", unit: "gousses" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "bouillon de légumes", qty: "500", unit: "ml" },
                { item: "curry en poudre", qty: "2", unit: "c. à c." },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Curry de seitan",
            url: "https://menu-vegetarien.com/curry-de-seitan/",
            ingredients: [
                { item: "seitan", qty: "300", unit: "g" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "gingembre frais", qty: "1", unit: "morceau" },
                { item: "tomates concassées (boîte)", qty: "400", unit: "g" },
                { item: "concentré de tomates", qty: "1", unit: "c. à s." },
                { item: "épices curry", qty: "2", unit: "c. à c." },
                { item: "sucre de canne", qty: "1", unit: "c. à c." },
                { item: "riz basmati", qty: "250", unit: "g" },
                { item: "huile de tournesol", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Curry vert au tofu",
            url: "https://menu-vegetarien.com/curry-vert-tofu/",
            ingredients: [
                { item: "tofu ferme", qty: "300", unit: "g" },
                { item: "brocoli", qty: "1", unit: "" },
                { item: "patate douce", qty: "2", unit: "" },
                { item: "pâte de curry vert", qty: "2", unit: "c. à s." },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "riz", qty: "250", unit: "g" },
                { item: "sauce soja", qty: "1", unit: "c. à s." },
                { item: "huile de coco", qty: "1", unit: "c. à s." },
            ]
        },
        {
            name: "Curry vert à la thaï",
            url: "https://menu-vegetarien.com/curry-vert-thai/",
            ingredients: [
                { item: "nouilles ramen", qty: "200", unit: "g" },
                { item: "pâte de curry vert", qty: "2", unit: "c. à s." },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "bouillon de légumes", qty: "300", unit: "ml" },
                { item: "légumes de saison (courgette, poivron)", qty: "300", unit: "g" },
                { item: "tofu fumé", qty: "200", unit: "g" },
                { item: "sauce soja", qty: "2", unit: "c. à s." },
                { item: "citron vert", qty: "1", unit: "" },
                { item: "coriandre fraîche", qty: "1", unit: "bouquet" },
            ]
        },
        {
            name: "Gnocchis aux petits pois, épinards et pesto",
            url: "https://menu-vegetarien.com/gnocchis-petits-pois-epinards-pesto/",
            ingredients: [
                { item: "gnocchis", qty: "500", unit: "g" },
                { item: "petits pois", qty: "200", unit: "g" },
                { item: "épinards frais", qty: "150", unit: "g" },
                { item: "pesto vegan", qty: "3", unit: "c. à s." },
                { item: "crème d'avoine", qty: "100", unit: "ml" },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "huile d'olive", qty: "1", unit: "c. à s." },
            ]
        },
        {
            name: "Spaghettis crémeux champignons et poireaux",
            url: "https://menu-vegetarien.com/spaghettis-cremeux-champignons-poireaux/",
            ingredients: [
                { item: "spaghettis", qty: "350", unit: "g" },
                { item: "champignons de Paris", qty: "300", unit: "g" },
                { item: "poireaux", qty: "2", unit: "" },
                { item: "crème d'avoine", qty: "200", unit: "ml" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "levure maltée", qty: "2", unit: "c. à s." },
                { item: "thym", qty: "1", unit: "c. à c." },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "One Pot Pasta aux aubergines",
            url: "https://menu-vegetarien.com/one-pot-pasta-aubergines/",
            ingredients: [
                { item: "orecchiette (pâtes)", qty: "350", unit: "g" },
                { item: "aubergine", qty: "1", unit: "" },
                { item: "champignons de Paris", qty: "200", unit: "g" },
                { item: "tomates concassées (boîte)", qty: "400", unit: "g" },
                { item: "bouillon de légumes", qty: "500", unit: "ml" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "basilic frais", qty: "1", unit: "bouquet" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
            ]
        },
        {
            name: "Dahl de lentilles corail à la courge",
            url: "https://menu-vegetarien.com/dahl-lntilles-corail-courge/",
            ingredients: [
                { item: "lentilles corail", qty: "250", unit: "g" },
                { item: "courge butternut", qty: "400", unit: "g" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "tomates concassées (boîte)", qty: "400", unit: "g" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "ail", qty: "3", unit: "gousses" },
                { item: "gingembre frais", qty: "1", unit: "morceau" },
                { item: "curry en poudre", qty: "2", unit: "c. à c." },
                { item: "riz basmati", qty: "250", unit: "g" },
            ]
        },
    ],

    desserts: [
        {
            name: "Cake vegan aux myrtilles",
            url: "https://menu-vegetarien.com/cake-vegan-myrtilles/",
            ingredients: [
                { item: "farine T65", qty: "200", unit: "g" },
                { item: "sucre de canne", qty: "120", unit: "g" },
                { item: "myrtilles", qty: "150", unit: "g" },
                { item: "lait d'avoine", qty: "200", unit: "ml" },
                { item: "huile de tournesol", qty: "80", unit: "ml" },
                { item: "levure chimique", qty: "1", unit: "sachet" },
                { item: "vanille en poudre", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Crêpes vegan",
            url: "https://menu-vegetarien.com/crepes-vegan/",
            ingredients: [
                { item: "farine T65", qty: "250", unit: "g" },
                { item: "lait d'avoine", qty: "500", unit: "ml" },
                { item: "huile de tournesol", qty: "2", unit: "c. à s." },
                { item: "sucre de canne", qty: "2", unit: "c. à s." },
                { item: "vanille en poudre", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Madeleines vegan fourrées",
            url: "https://menu-vegetarien.com/madeleines-vegan/",
            ingredients: [
                { item: "farine T65", qty: "150", unit: "g" },
                { item: "sucre de canne", qty: "80", unit: "g" },
                { item: "pâte à tartiner vegan", qty: "100", unit: "g" },
                { item: "lait d'avoine", qty: "150", unit: "ml" },
                { item: "huile de tournesol", qty: "60", unit: "ml" },
                { item: "levure chimique", qty: "1", unit: "sachet" },
            ]
        },
        {
            name: "Financier vegan à la poire",
            url: "https://menu-vegetarien.com/financier-vegan-poire/",
            ingredients: [
                { item: "poudre d'amandes", qty: "100", unit: "g" },
                { item: "farine T65", qty: "80", unit: "g" },
                { item: "sucre de canne", qty: "100", unit: "g" },
                { item: "poire", qty: "2", unit: "" },
                { item: "lait d'avoine", qty: "100", unit: "ml" },
                { item: "huile de tournesol", qty: "80", unit: "ml" },
                { item: "levure chimique", qty: "1/2", unit: "sachet" },
            ]
        },
        {
            name: "Mousse au chocolat vegan",
            url: "https://menu-vegetarien.com/mousse-chocolat-vegan/",
            ingredients: [
                { item: "chocolat noir (70%)", qty: "200", unit: "g" },
                { item: "aquafaba (eau de pois chiches)", qty: "160", unit: "ml" },
            ]
        },
        {
            name: "Tarte tatin vegan",
            url: "https://menu-vegetarien.com/tarte-tatin-vegan/",
            ingredients: [
                { item: "pomme", qty: "6", unit: "" },
                { item: "pâte feuilletée vegan", qty: "1", unit: "rouleau" },
                { item: "margarine vegan", qty: "50", unit: "g" },
                { item: "sucre de canne", qty: "80", unit: "g" },
                { item: "sucre vanillé", qty: "1", unit: "sachet" },
                { item: "jus de citron", qty: "1", unit: "c. à s." },
            ]
        },
        {
            name: "Verrine perles du Japon, coco, mangue et lime",
            url: "https://menu-vegetarien.com/verrine-perles-japon-coco-mangue/",
            ingredients: [
                { item: "perles du Japon (tapioca)", qty: "100", unit: "g" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "mangue", qty: "2", unit: "" },
                { item: "citron vert", qty: "2", unit: "" },
                { item: "sirop d'agave", qty: "2", unit: "c. à s." },
                { item: "menthe fraîche", qty: "1", unit: "bouquet" },
            ]
        },
        {
            name: "Moelleux au chocolat vegan",
            url: "https://menu-vegetarien.com/moelleux-chocolat-vegan/",
            ingredients: [
                { item: "chocolat noir (70%)", qty: "200", unit: "g" },
                { item: "farine T65", qty: "80", unit: "g" },
                { item: "sucre de canne", qty: "100", unit: "g" },
                { item: "lait d'avoine", qty: "150", unit: "ml" },
                { item: "huile de tournesol", qty: "80", unit: "ml" },
                { item: "levure chimique", qty: "1", unit: "sachet" },
                { item: "cacao amer", qty: "2", unit: "c. à s." },
            ]
        },
    ]
};

// ─── STATE ─────────────────────────────────────────────────────────────────
const counts = { starters: 2, mains: 5, desserts: 2 };
let currentMenu = null;

// ─── COUNTER CONTROLS ──────────────────────────────────────────────────────
function adjust(category, delta) {
    const max = RECIPES[category].length;
    counts[category] = Math.max(0, Math.min(max, counts[category] + delta));
    document.getElementById(`val-${category}`).textContent = counts[category];
}

// ─── RANDOM PICK ───────────────────────────────────────────────────────────
function pickRandom(arr, n) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(n, arr.length));
}

// ─── SHOPPING LIST BUILDER ─────────────────────────────────────────────────
function buildShoppingList(recipes) {
    const map = new Map();

    for (const recipe of recipes) {
        for (const ing of recipe.ingredients) {
            if (!ing.item) continue;
            const key = ing.item.toLowerCase();
            if (!map.has(key)) {
                map.set(key, { item: ing.item, qty: ing.qty, unit: ing.unit });
            } else {
                const existing = map.get(key);
                const existNum = parseFloat(existing.qty);
                const newNum = parseFloat(ing.qty);
                if (!isNaN(existNum) && !isNaN(newNum) && existing.unit === ing.unit) {
                    existing.qty = String(existNum + newNum);
                } else if (ing.qty && ing.qty !== existing.qty) {
                    existing.qty = `${existing.qty} + ${ing.qty}`;
                }
            }
        }
    }

    return [...map.values()].sort((a, b) => a.item.localeCompare(b.item, 'fr'));
}

// ─── GENERATE MENU ─────────────────────────────────────────────────────────
function generateMenu() {
    currentMenu = {
        starters: pickRandom(RECIPES.starters, counts.starters),
        mains: pickRandom(RECIPES.mains, counts.mains),
        desserts: pickRandom(RECIPES.desserts, counts.desserts),
    };
    renderResult();
    document.getElementById('step-select').classList.remove('active');
    document.getElementById('step-result').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── RENDER RESULT ─────────────────────────────────────────────────────────
function renderResult() {
    const sections = [
        { label: '🥗 Entrées', key: 'starters' },
        { label: '🍲 Plats principaux', key: 'mains' },
        { label: '🍰 Desserts', key: 'desserts' },
    ];

    let html = '';
    const allRecipes = [];

    for (const { label, key } of sections) {
        const recipes = currentMenu[key];
        if (!recipes.length) continue;

        html += `<div class="recipe-section"><h3>${label}</h3><div class="recipe-grid">`;
        for (const recipe of recipes) {
            allRecipes.push(recipe);
            html += `
                <div class="recipe-card">
                    <div class="recipe-name">
                        <a class="recipe-link" href="${recipe.url}" target="_blank" rel="noopener">${recipe.name} ↗</a>
                    </div>
                    <ul class="ing-list">
                        ${recipe.ingredients.map(i =>
                            `<li>${i.qty ? `<span class="qty">${i.qty} ${i.unit}</span>` : ''} ${i.item}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }
        html += `</div></div>`;
    }

    document.getElementById('menu-cards').innerHTML = html;

    // Shopping list
    const items = buildShoppingList(allRecipes);
    const listHtml = items.map(i => {
        const qtyStr = i.qty ? `<span class="sl-qty">${i.qty} ${i.unit}</span>` : '';
        return `<li><span class="sl-check">☐</span> ${i.item} ${qtyStr}</li>`;
    }).join('');
    document.getElementById('shopping-list').innerHTML = listHtml;

    document.querySelectorAll('#shopping-list li').forEach(li => {
        li.addEventListener('click', () => li.classList.toggle('checked'));
    });
}

// ─── ACTIONS ───────────────────────────────────────────────────────────────
function goBack() {
    document.getElementById('step-result').classList.remove('active');
    document.getElementById('step-select').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function regenerate() {
    generateMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyList() {
    const items = document.querySelectorAll('#shopping-list li');
    const text = [...items].map(li => `• ${li.textContent.replace('☐', '').trim()}`).join('\n');

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.action-btn');
        const original = btn.textContent;
        btn.textContent = '✅ Copié !';
        setTimeout(() => btn.textContent = original, 2000);
    }).catch(() => {
        alert('Impossible de copier automatiquement. Sélectionnez la liste manuellement.');
    });
}
