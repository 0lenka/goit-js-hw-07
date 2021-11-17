import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

// const galleryImageOriginal = onGalleryContainerClick(event)

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryMarkup(galleryItems))


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source="large-image.jpg"
      alt=${description}
    />
  </a>
</div>`;
    }).join("")
}


console.log(galleryItems);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  
  if (!event.target.classList.contains("gallery__image")) {
    return
  }
  galleryItems.map((item) => {
    if (item.original == event.target.dataset.source) {
      const instance = basicLightbox.create(`<img src=${item.original} width="800" height="600">`);
      instance.show()
    };
    
  });
  event.preventDefault();
}




