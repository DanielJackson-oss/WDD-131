const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "../images/snortleblat.webp",

    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            updateCard();
            alert(`${this.name} has died!`);
        } else {
            updateCard();
        }
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById('name').textContent = character.name;
    document.getElementById('class').textContent = character.class;
    document.getElementById('level').textContent = character.level;
    document.getElementById('health').textContent = character.health;
}

function attackBtn() {
    character.attacked();
}

function levelUpBtn() {
    character.levelUp();
}

updateCard();