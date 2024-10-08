// ***************** animation h2************************
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-h2');

        } else {
            // Optionnel : Retirer la classe si l'élément sort du viewport
            entry.target.classList.remove('animated-h2');
        }
    });
}, {
    threshold: 0.5 // L'élément doit être visible à 50% pour déclencher l'animation
});

const h2Elements = document.querySelectorAll('h2');
h2Elements.forEach(h2 => observer.observe(h2));
// ***************** animation h2 fin************************

// ****************** sons cureur***********************
// *********************menu*************************
function addSoundToElements(selector, hoverSound, clickSound) {    
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            playSound(hoverSound);
        });

        element.addEventListener('click', () => {
            playSound(clickSound);
        });
    });

    function playSound(soundFile) {
        // Créez une nouvelle instance de l'objet Audio
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = soundFile;
        
        // Vérifiez si le son est joué avec une promesse
        audio.play().catch(error => {
            console.error('Erreur lors de la lecture du son:', error);
        });
    }
}

// Utilisation de la fonction après que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    addSoundToElements('.item', '/sound/Hidden-Blade-Select.mp3', '/sound/Accept.mp3');
});

// Pour tester l'interaction utilisateur, ajoutez un bouton
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter l'événement de clic au bouton interactif
    const boite = document.querySelector('.boite');
    const intro = boite.querySelector('.intro');
    const image = boite.querySelector('.image')
    const activationSound = new Audio('/sound/Memory -Sequence-Synchronized.mp3');
    
    // Ajouter un événement de clic à l'élément .boite
    boite.addEventListener('click', () => {
        // Jouer le son d'activation
        activationSound.play().catch(error => {
            console.error('Erreur lors de la lecture du son:', error);
        });

        // Masquer le texte de l'intro après le clic
        intro.style.display = 'none';
        image.style.display = 'none';
    });
});



// *************************bouton top***********
function addClickSoundToElement(elementSelector, soundId) {
    const element = document.querySelector(elementSelector);
    const sound = document.getElementById(soundId);

    if (element && sound) {
        element.addEventListener('click', () => {
            playSound(sound);
        });

        function playSound(audioElement) {
            audioElement.currentTime = 0; // Rewind to start for immediate replay
            audioElement.play().catch(error => {
                console.error('Erreur lors de la lecture du son:', error);
            });
        }
    } else {
        console.warn(`L'élément avec le sélecteur ${elementSelector} ou le son avec l'ID ${soundId} n'a pas été trouvé.`);
    }
}

// Utilisation :
document.addEventListener('DOMContentLoaded', () => {
    addClickSoundToElement('#scroll_to_top', 'topSound');
});
// *************************bouton top fin***********
// *************************bouton hover projet***********
function addHoverSoundToDivs(containerSelector, soundId) {
    const container = document.querySelector(containerSelector);
    const sound = document.getElementById(soundId);

    if (container && sound) {
        const divs = container.querySelectorAll('div');

        divs.forEach(div => {
            div.addEventListener('mouseover', () => {
                playSound(sound);
            });
        });

        function playSound(audioElement) {
            audioElement.currentTime = 0; // Rewind to start for immediate replay
            audioElement.play().catch(error => {
                console.error('Erreur lors de la lecture du son:', error);
            });
        }
    } else {
        console.warn(`Le conteneur avec le sélecteur ${containerSelector} ou le son avec l'ID ${soundId} n'a pas été trouvé.`);
    }
}

// Utilisation :
document.addEventListener('DOMContentLoaded', () => {
    addHoverSoundToDivs('.parent', 'projectSound');
});