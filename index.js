function openFolder(name) {
    document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
    document.getElementById(name).classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.contents').forEach(el => el.classList.add('hidden'));
    document.getElementById('folder-view').classList.remove('hidden');
}