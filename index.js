window.addEventListener('DOMContentLoaded', () => {
    // If returning from an assignment, skip straight to the portal
    const lastFolder = sessionStorage.getItem('lastFolder');
    if (lastFolder) {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('main-portal').classList.remove('hidden');
        openFolder(lastFolder);
    }
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
    const factText = document.getElementById('fact-text');
    factText.classList.add('fade-out-fact');
    setTimeout(() => {
        factText.textContent = "No worries! Click Yes whenever you're ready.";
        factText.classList.remove('fade-out-fact');
        factText.classList.add('fade-in-fact');
    }, 300);
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