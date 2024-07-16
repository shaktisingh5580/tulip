const tulipField = document.querySelector('.tulip-field');

function createTulip() {
    const tulip = document.createElement('div');
    tulip.classList.add('tulip');
    
    const stem = document.createElement('div');
    stem.classList.add('stem');
    
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    tulip.appendChild(stem);
    tulip.appendChild(flower);
    
    tulipField.appendChild(tulip);
}

// Create multiple tulips
for (let i = 0; i < 200; i++) {
    createTulip();
}
