// ─── RECIPE DATABASE ────────────────────────────────────────────────────────
// Recipes inspired from menu-vegetarien.com/recettes-vegan/

const RECIPES = {
    starters: [
        {
            name: "Gaspacho concombre-raisin",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "concombre", qty: "2", unit: "" },
                { item: "raisin blanc", qty: "200", unit: "g" },
                { item: "pain de mie", qty: "2", unit: "tranches" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
                { item: "vinaigre de vin blanc", qty: "1", unit: "c. à s." },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Houmous vert aux épinards",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "pois chiches (cuits)", qty: "400", unit: "g" },
                { item: "épinards frais", qty: "100", unit: "g" },
                { item: "tahini", qty: "2", unit: "c. à s." },
                { item: "citron", qty: "1", unit: "" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
                { item: "cumin", qty: "1", unit: "c. à c." },
                { item: "sel", qty: "", unit: "" },
            ]
        },
        {
            name: "Velouté patate douce-coco-curry",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "patate douce", qty: "500", unit: "g" },
                { item: "lait de coco", qty: "200", unit: "ml" },
                { item: "carotte", qty: "2", unit: "" },
                { item: "bouillon de légumes", qty: "750", unit: "ml" },
                { item: "curry en poudre", qty: "2", unit: "c. à c." },
                { item: "gingembre frais", qty: "1", unit: "morceau" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "huile d'olive", qty: "1", unit: "c. à s." },
            ]
        },
        {
            name: "Soupe chou-fleur et haricots blancs",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "chou-fleur", qty: "1/2", unit: "" },
                { item: "haricots blancs (cuits)", qty: "400", unit: "g" },
                { item: "pomme de terre", qty: "2", unit: "" },
                { item: "ail", qty: "3", unit: "gousses" },
                { item: "romarin", qty: "1", unit: "branche" },
                { item: "bouillon de légumes", qty: "1", unit: "litre" },
                { item: "croûtons", qty: "50", unit: "g" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Tartare butternut-pomme-noisettes",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "butternut (petit)", qty: "1/4", unit: "" },
                { item: "pomme", qty: "1", unit: "" },
                { item: "noisettes", qty: "30", unit: "g" },
                { item: "citron", qty: "1", unit: "" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
                { item: "ciboulette", qty: "1", unit: "botte" },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Salade kale vinaigrette miso",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "chou kale", qty: "200", unit: "g" },
                { item: "jus d'orange", qty: "4", unit: "c. à s." },
                { item: "miso blanc", qty: "1", unit: "c. à s." },
                { item: "sirop d'agave", qty: "1", unit: "c. à c." },
                { item: "graines de sésame", qty: "1", unit: "c. à s." },
                { item: "huile de sésame", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Dips de lupin maison",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "lupins (bocal)", qty: "300", unit: "g" },
                { item: "citron", qty: "1", unit: "" },
                { item: "ail", qty: "1", unit: "gousse" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
                { item: "paprika fumé", qty: "1", unit: "c. à c." },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Brochettes antipasti",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "tomates cerises", qty: "200", unit: "g" },
                { item: "olives vertes et noires", qty: "100", unit: "g" },
                { item: "artichauts marinés", qty: "150", unit: "g" },
                { item: "poivrons grillés (bocal)", qty: "100", unit: "g" },
                { item: "basilic frais", qty: "1", unit: "bouquet" },
            ]
        },
    ],

    mains: [
        {
            name: "Gnocchis champignons et fenouil",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "gnocchis", qty: "500", unit: "g" },
                { item: "champignons de Paris", qty: "300", unit: "g" },
                { item: "fenouil", qty: "1", unit: "" },
                { item: "crème d'avoine", qty: "200", unit: "ml" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "thym", qty: "2", unit: "branches" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
                { item: "sel, poivre", qty: "", unit: "" },
            ]
        },
        {
            name: "Ramen tofu croustillant",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "nouilles ramen", qty: "200", unit: "g" },
                { item: "tofu ferme", qty: "200", unit: "g" },
                { item: "concombre", qty: "1", unit: "" },
                { item: "sauce soja", qty: "3", unit: "c. à s." },
                { item: "huile de sésame", qty: "1", unit: "c. à s." },
                { item: "pâte de piment (gochujang)", qty: "1", unit: "c. à s." },
                { item: "graines de sésame", qty: "1", unit: "c. à s." },
                { item: "oignons verts", qty: "2", unit: "" },
            ]
        },
        {
            name: "Couscous perlé aubergines grillées",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "couscous perlé (fregola)", qty: "300", unit: "g" },
                { item: "aubergine", qty: "2", unit: "" },
                { item: "tomates cerises", qty: "250", unit: "g" },
                { item: "pois chiches (cuits)", qty: "400", unit: "g" },
                { item: "cumin", qty: "1", unit: "c. à c." },
                { item: "coriandre moulue", qty: "1", unit: "c. à c." },
                { item: "ras-el-hanout", qty: "1", unit: "c. à c." },
                { item: "citron", qty: "1", unit: "" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
            ]
        },
        {
            name: "Paella végétale",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "riz à paella", qty: "300", unit: "g" },
                { item: "poivron rouge", qty: "1", unit: "" },
                { item: "poivron jaune", qty: "1", unit: "" },
                { item: "courgette", qty: "1", unit: "" },
                { item: "tomate", qty: "2", unit: "" },
                { item: "petits pois", qty: "150", unit: "g" },
                { item: "safran", qty: "1", unit: "pincée" },
                { item: "paprika fumé", qty: "2", unit: "c. à c." },
                { item: "bouillon de légumes", qty: "750", unit: "ml" },
                { item: "huile d'olive", qty: "3", unit: "c. à s." },
            ]
        },
        {
            name: "Mijoté de seitan aux légumes d'hiver",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "seitan", qty: "300", unit: "g" },
                { item: "pomme de terre", qty: "3", unit: "" },
                { item: "carotte", qty: "3", unit: "" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "concentré de tomate", qty: "2", unit: "c. à s." },
                { item: "bouillon de légumes", qty: "500", unit: "ml" },
                { item: "thym, laurier", qty: "", unit: "" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
        {
            name: "Mafé de légumes au riz complet",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "riz complet", qty: "300", unit: "g" },
                { item: "patate douce", qty: "2", unit: "" },
                { item: "chou blanc", qty: "200", unit: "g" },
                { item: "tomate", qty: "2", unit: "" },
                { item: "oignon", qty: "2", unit: "" },
                { item: "purée de cacahuètes", qty: "100", unit: "g" },
                { item: "bouillon de légumes", qty: "500", unit: "ml" },
                { item: "piment", qty: "1", unit: "" },
            ]
        },
        {
            name: "Curry de lentilles aux épinards",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "lentilles corail", qty: "250", unit: "g" },
                { item: "épinards frais", qty: "200", unit: "g" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "tomate concassée (boîte)", qty: "400", unit: "g" },
                { item: "oignon", qty: "1", unit: "" },
                { item: "ail", qty: "3", unit: "gousses" },
                { item: "gingembre frais", qty: "1", unit: "morceau" },
                { item: "curry en poudre", qty: "2", unit: "c. à c." },
                { item: "riz basmati", qty: "250", unit: "g" },
            ]
        },
        {
            name: "Pâtes aux champignons et noix",
            url: "https://menu-vegetarien.com/recettes-vegan/",
            ingredients: [
                { item: "pâtes (penne ou tagliatelles)", qty: "350", unit: "g" },
                { item: "champignons de Paris", qty: "400", unit: "g" },
                { item: "noix", qty: "60", unit: "g" },
                { item: "crème d'avoine", qty: "200", unit: "ml" },
                { item: "ail", qty: "2", unit: "gousses" },
                { item: "levure maltée", qty: "2", unit: "c. à s." },
                { item: "persil frais", qty: "1", unit: "bouquet" },
                { item: "huile d'olive", qty: "2", unit: "c. à s." },
            ]
        },
    ],

    desserts: [
        {
            name: "Cake myrtilles vegan",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "farine T65", qty: "200", unit: "g" },
                { item: "sucre de canne", qty: "120", unit: "g" },
                { item: "myrtilles", qty: "150", unit: "g" },
                { item: "lait d'avoine", qty: "200", unit: "ml" },
                { item: "huile de tournesol", qty: "80", unit: "ml" },
                { item: "levure chimique", qty: "1", unit: "sachet" },
                { item: "vanille", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Madeleines à la pâte à tartiner",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
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
            name: "Crêpes vegan légères",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "farine T65", qty: "250", unit: "g" },
                { item: "lait d'avoine", qty: "500", unit: "ml" },
                { item: "huile de tournesol", qty: "2", unit: "c. à s." },
                { item: "sucre de canne", qty: "2", unit: "c. à s." },
                { item: "vanille", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Verrines mangue-citron vert et perles",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "perles du Japon (tapioca)", qty: "100", unit: "g" },
                { item: "mangue", qty: "2", unit: "" },
                { item: "citron vert", qty: "2", unit: "" },
                { item: "lait de coco", qty: "400", unit: "ml" },
                { item: "sirop d'agave", qty: "2", unit: "c. à s." },
                { item: "menthe fraîche", qty: "1", unit: "bouquet" },
            ]
        },
        {
            name: "Mousse au chocolat à l'aquafaba",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "chocolat noir (70%)", qty: "200", unit: "g" },
                { item: "aquafaba (eau de pois chiches)", qty: "150", unit: "ml" },
                { item: "sucre de canne", qty: "60", unit: "g" },
                { item: "vanille", qty: "1", unit: "c. à c." },
            ]
        },
        {
            name: "Financier vegan à la poire",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
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
            name: "Gâteau fondant au chocolat",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "chocolat noir (70%)", qty: "200", unit: "g" },
                { item: "farine T65", qty: "80", unit: "g" },
                { item: "sucre de canne", qty: "100", unit: "g" },
                { item: "lait d'avoine", qty: "150", unit: "ml" },
                { item: "huile de tournesol", qty: "80", unit: "ml" },
                { item: "cacao amer", qty: "2", unit: "c. à s." },
                { item: "levure chimique", qty: "1", unit: "sachet" },
            ]
        },
        {
            name: "Tarte tatin revisitée",
            url: "https://menu-vegetarien.com/recettes-vegan/desserts-recettes-vegan/",
            ingredients: [
                { item: "pomme", qty: "6", unit: "" },
                { item: "pâte feuilletée vegan", qty: "1", unit: "rouleau" },
                { item: "margarine vegan", qty: "50", unit: "g" },
                { item: "sucre de canne", qty: "80", unit: "g" },
                { item: "sauce soja", qty: "1", unit: "c. à s." },
                { item: "cannelle", qty: "1", unit: "c. à c." },
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
    const map = new Map(); // item name (lowercase) → { item, qty, unit, count }

    for (const recipe of recipes) {
        for (const ing of recipe.ingredients) {
            if (!ing.item) continue;
            const key = ing.item.toLowerCase();
            if (!map.has(key)) {
                map.set(key, { item: ing.item, qty: ing.qty, unit: ing.unit, count: 1 });
            } else {
                const existing = map.get(key);
                // Try to sum numeric quantities with same unit
                const existNum = parseFloat(existing.qty);
                const newNum = parseFloat(ing.qty);
                if (!isNaN(existNum) && !isNaN(newNum) && existing.unit === ing.unit) {
                    existing.qty = String(existNum + newNum);
                } else {
                    existing.count++;
                    if (ing.qty && ing.qty !== existing.qty) {
                        existing.qty = `${existing.qty} + ${ing.qty}`;
                    }
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
                    <div class="recipe-name">${recipe.name}</div>
                    <ul class="ing-list">
                        ${recipe.ingredients.map(i =>
                            `<li>${i.qty ? `<span class="qty">${i.qty} ${i.unit}</span>` : ''} ${i.item}</li>`
                        ).join('')}
                    </ul>
                    <a class="recipe-link" href="${recipe.url}" target="_blank">Voir la recette →</a>
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

    // Toggle checkboxes
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
    const text = [...items].map(li => {
        const qty = li.querySelector('.sl-qty');
        const name = li.textContent.replace('☐', '').trim();
        return `• ${name}`;
    }).join('\n');

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.action-btn');
        const original = btn.textContent;
        btn.textContent = '✅ Copié !';
        setTimeout(() => btn.textContent = original, 2000);
    }).catch(() => {
        alert('Impossible de copier automatiquement. Sélectionnez la liste manuellement.');
    });
}
