
// Dosha Quiz Logic
let scores = {
    vata: 0,
    pitta: 0,
    kapha: 0
};

function selectAnswer(dosha) {
    if (scores.hasOwnProperty(dosha)) {
        scores[dosha]++;

        // Visual feedback for selection (optional, but good for UX)
        // This is a simple implementation; a robust one would track per-question state
        const currentButton = event.target;
        const parent = currentButton.parentNode;
        const buttons = parent.getElementsByTagName('button');

        // Remove 'selected' class from siblings
        for (let btn of buttons) {
            btn.classList.remove('selected');
        }

        // Add 'selected' class to clicked button
        currentButton.classList.add('selected');
    }
}

function showResult() {
    let maxScore = 0;
    let dominantDosha = '';

    // Determine dominant dosha
    for (let dosha in scores) {
        if (scores[dosha] > maxScore) {
            maxScore = scores[dosha];
            dominantDosha = dosha;
        } else if (scores[dosha] === maxScore && maxScore > 0) {
            dominantDosha += ' & ' + dosha; // Tie logic
        }
    }

    const resultDiv = document.getElementById('result');
    if (maxScore === 0) {
        resultDiv.innerHTML = "<h3>Please answer the questions first!</h3>";
        return;
    }

    // Capitalize first letter
    const formattedDosha = dominantDosha.split(' & ').map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(' & ');

    let message = `<h3>Your Dominant Dosha is: ${formattedDosha}</h3>`;

    if (formattedDosha.includes('Vata')) {
        message += "<p>Vata types are creative and energetic but can get anxious. Focus on grounding foods and routine.</p>";
    }
    if (formattedDosha.includes('Pitta')) {
        message += "<p>Pitta types are distinct and intelligent but can get angry. Focus on cooling foods and relaxation.</p>";
    }
    if (formattedDosha.includes('Kapha')) {
        message += "<p>Kapha types are calm and loyal but can get lethargic. Focus on stimulating foods and exercise.</p>";
    }

    resultDiv.innerHTML = message;
}

// Remedy Finder Logic
const remedies = {
    "cough": "Warm honey-ginger drink, turmeric milk, steam inhalation.",
    "cold": "Ginger tea, tulsi tea, warm soups.",
    "fever": "Coriander seed water, light food, rest, lukewarm sponge.",
    "headache": "Peppermint oil on temples, hydration, rest in dark room.",
    "migraine": "Cold cloth on head, ginger tea, deep breathing.",
    "stomach ache": "Ginger tea, ajwain with warm water, light meals.",
    "gas": "Fennel seeds, warm water, gentle walking.",
    "acidity": "Cold milk, banana, coconut water.",
    "indigestion": "Ginger tea, lemon warm water, eat small meals.",
    "constipation": "Warm water, fiber-rich fruits, soaked raisins.",
    "diarrhea": "ORS, banana, rice water, light food.",
    "nausea": "Ginger candy, lemon smell, sip warm water.",
    "vomiting": "Mint tea, electrolyte drinks, rest stomach.",
    "insomnia": "Warm milk, nutmeg pinch, calm music.",
    "stress": "Deep breathing, herbal tea, short walk.",
    "anxiety": "Slow breathing, chamomile tea, grounding exercises.",
    "fatigue": "Short nap, hydration, light stretching.",
    "weakness": "Fruit juice, dates, warm soups.",
    "dizziness": "Drink water, lie down, eat something light.",
    "dry skin": "Aloe vera, coconut oil, lots of water.",
    "oily skin": "Multani mitti pack, gentle face wash, avoid heavy creams.",
    "acne": "Neem paste, turmeric, aloe vera.",
    "dark circles": "Cold tea bags, cucumber slices, good sleep.",
    "hair fall": "Warm oil massage, amla, protein-rich food.",
    "dandruff": "Neem water rinse, curd pack, coconut oil.",
    "dry hair": "Aloe gel, warm oil, banana hair mask.",
    "joint pain": "Turmeric milk, warm oil massage, gentle stretching.",
    "back pain": "Hot compress, light stretching, correct posture.",
    "neck pain": "Warm towel, gentle rotation exercises.",
    "muscle cramps": "Bananas, warm water, gentle massage.",
    "sprain": "Ice pack first 24 hrs, then warm compress, rest.",
    "sore throat": "Saltwater gargle, honey warm water, steam.",
    "ear pain": "Warm compress outside ear, avoid poking inside.",
    "toothache": "Clove oil on cotton, warm saltwater rinse.",
    "gum pain": "Salt rinse, soft brushing.",
    "bad breath": "Mint leaves, warm salt rinse, brush tongue.",
    "eye strain": "Cold water splash, 20-20-20 rule, reduce screen brightness.",
    "red eyes": "Cold compress, blink often, rest.",
    "burn (mild)": "Cold water rinse, aloe vera gel.",
    "sunburn": "Aloe vera, cold milk dab, stay indoors.",
    "nosebleed": "Pinch nose gently, lean forward, cold cloth.",
    "allergies (mild)": "Steam inhalation, honey, keep area dust-free.",
    "bloating": "Fennel tea, walk for 10 minutes.",
    "loss of appetite": "Lemon warm water, ginger tea.",
    "motion sickness": "Ginger candy, look at horizon.",
    "mouth ulcer": "Honey dab, coconut oil, cold foods.",
    "chapped lips": "Ghee, coconut oil, drink more water.",
    "low immunity": "Citrus fruits, turmeric milk, good sleep.",
    "menstrual cramps": "Hot water bag, ginger tea, gentle yoga.",
    "PMS mood swings": "Dark chocolate, light walking, warm drinks.",
    "heat exhaustion": "ORS, cold wet cloth, rest in shade.",
    "dehydration": "ORS, coconut water, frequent sips of water."
};


function findRemedy() {
    const input = document.getElementById('symptom').value.toLowerCase().trim();
    const resultP = document.getElementById('remedyResult');

    if (input === "") {
        resultP.textContent = "Please enter a symptom.";
        return;
    }

    if (remedies[input]) {
        resultP.textContent = `Remedy for ${input}: ${remedies[input]}`;
    } else {
        resultP.textContent = "Sorry, no specific remedy found for this symptom. Try simpler terms like 'cough' or 'headache'.";
    }
}
