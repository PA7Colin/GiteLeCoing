document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".gallery__slider");
    const thumbnails = document.querySelector(".gallery__thumbnails");
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");
    const modal = document.querySelector(".modal");
    const modalImage = document.getElementById("modal-image");
    const modalNavPrev = document.querySelector(".modal-prev");
    const modalNavNext = document.querySelector(".modal-next");
    const closeModalButton = document.querySelector(".close-modal");

    let currentIndex = 0;
    let modalImages = [];
    let touchStartX = null;

    function displayImageInModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = "block";
    }

    function updateModalNavVisibility() {
        modalNavPrev.style.display = currentIndex > 0 ? "block" : "none";
        modalNavNext.style.display = currentIndex < modalImages.length - 1 ? "block" : "none";
    }

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    scrollLeftButton.addEventListener("click", function() {
        if (slider.scrollLeft === 0) {
            slider.scrollLeft = slider.scrollWidth;
        }
        slider.scrollLeft -= slider.offsetWidth;
    });

    scrollRightButton.addEventListener("click", function() {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        }
        slider.scrollLeft += slider.offsetWidth;
    });

    thumbnails.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            const imageSrc = event.target.src;
            displayImageInModal(imageSrc);
        }
    });

    const imagesInSlider = document.querySelectorAll(".gallery__slider img");
    imagesInSlider.forEach(function(image, index) {
        image.addEventListener("click", function() {
            const imageSrc = image.src;
            displayImageInModal(imageSrc);
            currentIndex = index;
            modalImages = Array.from(imagesInSlider).map(img => img.src);
            updateModalNavVisibility();
        });
    });

    modalNavPrev.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            modalImage.src = modalImages[currentIndex];
            updateModalNavVisibility();
        }
    });

    modalNavNext.addEventListener("click", function() {
        if (currentIndex < modalImages.length - 1) {
            currentIndex++;
            modalImage.src = modalImages[currentIndex];
            updateModalNavVisibility();
        }
    });

    // Gestion du défilement tactile dans la fenêtre modale
    modalImage.addEventListener("touchstart", function(event) {
        touchStartX = event.touches[0].clientX;
    });

    modalImage.addEventListener("touchmove", function(event) {
        if (touchStartX === null) {
            return;
        }

        const touchEndX = event.touches[0].clientX;
        const touchDiff = touchStartX - touchEndX;

        if (touchDiff > 20) { // Sens du défilement vers la gauche
            modalNavNext.click(); // Fait défiler vers la photo suivante
            touchStartX = null;
        } else if (touchDiff < -20) { // Sens du défilement vers la droite
            modalNavPrev.click(); // Fait défiler vers la photo précédente
            touchStartX = null;
        }
    });

    modalImage.addEventListener("touchend", function() {
        touchStartX = null;
    });
});



/* Gestion du défilement tactile dans la classe .slider */
const slider = document.querySelector(".gallery__slider");
const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
let touchStartX = null;

slider.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", function(event) {
    if (touchStartX === null) {
        return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 20) { // Sens du défilement vers la gauche
        scrollRightButton.click(); // Fait défiler vers la droite
        touchStartX = null;
    } else if (touchDiff < -20) { // Sens du défilement vers la droite
        scrollLeftButton.click(); // Fait défiler vers la gauche
        touchStartX = null;
    }
});

slider.addEventListener("touchend", function() {
    touchStartX = null;
});

// Compteur photo
document.addEventListener("DOMContentLoaded", function() {
    const imagesInSlider = document.querySelectorAll(".gallery__slider img");
    const galleryCounter = document.getElementById("gallery-counter");

    let currentIndex = 0;

    function updateGalleryCounter() {
        galleryCounter.textContent = `${currentIndex + 1} / ${imagesInSlider.length}`;
    }

    // Événement pour passer à la photo précédente
    scrollLeftButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imagesInSlider.length - 1;
        }
        updateGalleryCounter();
    });

    // Événement pour passer à la photo suivante
    scrollRightButton.addEventListener("click", function() {
        if (currentIndex < imagesInSlider.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateGalleryCounter();
    });

    // Initialisez le compteur
    updateGalleryCounter();
});

// btn modal
document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("show-more-button");
    const modal = document.querySelector(".modal");
    const modalImages = document.querySelectorAll(".gallery__slider img");
    const closeModalButton = document.querySelector(".close-modal");

    // Événement pour ouvrir la fenêtre modale
    openModalButton.addEventListener("click", function() {
        // Affichez la fenêtre modale
        modal.style.display = "block";

        // la première image est visible dans la fenêtre modale
        modalImages[0].style.display = "block";
    });

    // Gestionnaire d'événement pour fermer la fenêtre modale (assurez-vous d'avoir ce code déjà en place)
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Vous pouvez également ajouter un code pour naviguer entre les images dans la fenêtre modale
    // Assurez-vous d'avoir la logique de navigation déjà en place pour les flèches modales
});


// ********************************** BUG BTN **********************/


// Attendez que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez l'élément du texte intro
    var introText = document.getElementById("intro-text");
    // Ajoutez la classe pour déclencher l'animation
    introText.classList.add("visible");
});


document.addEventListener("DOMContentLoaded", function() {
    var showMoreButton = document.getElementById("show-more");
    var hiddenText = document.getElementById("hidden-text");
    showMoreButton.addEventListener("click", function() {
        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
            showMoreButton.textContent = "Masquer";
        } else {
            hiddenText.style.display = "none";
            showMoreButton.textContent = "Afficher plus";
        }
    });
});

    
