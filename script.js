// script.js
// Handles scene rendering and navigation for the visual novel

let currentScene = 'start';

function renderScene() {
    const scene = scenes[currentScene];
    if (!scene) return;
    document.querySelector('.hero-text').innerHTML = scene.text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice.text;
        btn.onclick = () => {
            currentScene = choice.next;
            renderScene();
        };
        choicesDiv.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof scenes !== 'undefined') {
        renderScene();
    }
});
