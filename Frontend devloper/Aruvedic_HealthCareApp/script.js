let vata = 0;
let pitta = 0;
let kapha = 0;

function selectAnswer(dosha) {
    if (dosha === 'vata') vata++;
    else if (dosha === 'pitta') pitta++;
    else if (dosha === 'kapha') kapha++;

}

function showResult() {
    let result = '';
    if (vata > pitta && vata > kapha) result = 'Vata';
    else if (pitta > vata && pitta > kapha) result = 'Pitta';
    else if (kapha > vata && kapha > pitta) result = 'Kapha';
    else result = 'Mixed Type';

    alert("Your body type is: " + result);
}

function findRemedy() {
    const symptom = document.getElementById('symptom').value.toLowerCase();
    let remedy = "";

    if (symptom.includes("headache")) {
        remedy = "Try Tulsi tea, rest ,and apply sandalwood paste on the forehead.";

    }
    else if (symptom.includes("cough")) {
        remedy = "Take honey with ginger juice and warm water twice daily.";

    }
    else if (symptom.includes("stress")) {
        remedy = "Do pranayama, meditate on OM/hare krishna maha mantra, and take Brahmi( Ghod Tapre ) or Ashwagandha tea.";
    }
    else if (symptom.includes("indigestion")) {
        remedy = "Drink cumin(Jeera) and ajwain(Jwano) water after meals.";
    }
    else if (symptom.includes("stomachache")) {
        remedy = "Have Sufficient Water ,Eat Bland diet ,Drink Peppermint(पुदीना) Tea,DrinkBaking Soda+Lemon Water.";
    }
    else {
        remedy = "No direct remedy found. Please consult an Ayurvedic practitioner."
    }

    document.getElementById('remedyResult').innerText = remedy;
}

const icons = ["leafImage.jpg", "new_image.jpg"];
    let i = 0;

    setInterval(() => {
      document.querySelector("link[rel='icon']").href = icons[i];
      i = (i + 1) % icons.length; // loop back
    }, 2000); // change every 2 seconds

