import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
</a>
</div>`;
    }).join("");
}

var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };
    if (item.preview === event.srcElement.currentSrc) {
        lightbox.options.captionData = `${event.target.getAttribute("alt")}`;
        lightbox.options.captionType = 'text';
        lightbox.options.captionDelay = 250;
    }
}