// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = document.querySelector('.gallery');

const markupItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" 
         href=${original}>
            <img class="gallery__image" 
            src=${preview} 
            alt=${description} 
            title=${description}/>
        </a>`
  )
  .join('');

refs.innerHTML = markupItem;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});


console.dir(lightbox);