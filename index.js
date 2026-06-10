// function openFolder(name) {
//     document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
//     document.getElementById(name).classList.remove('hidden');
// }

// function goBack() {
//     document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
//     document.getElementById('folder-view').classList.remove('hidden');
// }


const funFacts = [
    "🐙 Octopuses have three hearts and blue blood!",
    "🍯 Honey never spoils — 3,000-year-old honey found in Egyptian tombs was still edible!",
    "🌙 A day on Venus is longer than a year on Venus.",
    "🐘 Elephants are the only animals that can't jump.",
    "🍌 Bananas are technically berries, but strawberries are not.",
    "⚡ Lightning strikes the Earth about 100 times every second.",
    "🦈 Sharks are older than trees — they've existed for over 400 million years.",
    "🐧 Penguins propose to their mates with a pebble.",
    "🌊 The ocean produces over 50% of the world's oxygen.",
    "🧠 Your brain generates about 23 watts of power — enough to light a light bulb.",
    "🦋 Butterflies taste with their feet.",
    "🌍 There are more possible chess games than atoms in the observable universe.",
    "🐝 A single bee will only make about 1/12th of a teaspoon of honey in its lifetime.",
    "🌵 A saguaro cactus can absorb up to 200 gallons of water in a single rainstorm.",
    "🎵 Music can help plants grow faster.",
    "🐬 Dolphins have names for each other.",
    "🍕 The world's most expensive pizza costs $12,000 and takes 72 hours to make.",
    "🌟 There are more stars in the universe than grains of sand on all Earth's beaches.",
    "🦁 Lions can sleep up to 20 hours a day.",
    "🧊 Hot water can freeze faster than cold water — this is called the Mpemba effect.",
];

let currentFactIndex = 0;
let shownFacts = [];

function getRandomFact() {
    if (shownFacts.length === funFacts.length) shownFacts = [];
    let fact;
    do {
        fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    } while (shownFacts.includes(fact));
    shownFacts.push(fact);
    return fact;
}

function showNextFact() {
    const factText = document.getElementById('fact-text');
    const question = document.getElementById('question');
    const nextBtn = document.getElementById('next-btn');

    // Animate out
    factText.classList.add('fade-out-fact');

    setTimeout(() => {
        factText.textContent = getRandomFact();
        factText.classList.remove('fade-out-fact');
        factText.classList.add('fade-in-fact');

        setTimeout(() => {
            factText.classList.remove('fade-in-fact');
            // Show question and buttons after fact appears
            question.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
        }, 400);
    }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
    // If returning from an assignment, skip intro
    const lastFolder = sessionStorage.getItem('lastFolder');
    if (lastFolder) {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('main-portal').classList.remove('hidden');
        openFolder(lastFolder);
        return;
    }

    // Show first fact
    const factText = document.getElementById('fact-text');
    factText.textContent = getRandomFact();

    setTimeout(() => {
        document.getElementById('question').classList.remove('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
    }, 600);
});

function answerYes() {
    const intro = document.getElementById('intro-screen');
    intro.classList.add('fade-out');
    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('main-portal').classList.remove('hidden');
    }, 600);
}

function answerNo() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    const factText = document.getElementById('fact-text');
    factText.classList.add('fade-out-fact');
    setTimeout(() => {
        factText.textContent = "😄 Really? Ok, have a nice day! Come back soon!";
        factText.classList.remove('fade-out-fact');
        factText.classList.add('fade-in-fact');
    }, 300);

    // After goodbye message, bring back the question
    setTimeout(() => {
        showNextFact();
        document.getElementById('question').classList.remove('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
    }, 2800);
}

function openFolder(name) {
    sessionStorage.setItem('lastFolder', name);
    document.getElementById('folder-view').classList.add('hidden');
    document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
    document.getElementById(name).classList.remove('hidden');
}

function goBack() {
    sessionStorage.removeItem('lastFolder');
    document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
    document.getElementById('folder-view').classList.remove('hidden');
}