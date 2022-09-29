// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = document.querySelector('.gallery');

const markupItem = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join('');

refs.innerHTML = markupItem;

const onClick = event => {
  event.preventDefault();

  const { target } = event;
  if (target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`
<img src=${target.dataset.source}>`);

  instance.show();

  const onClose = e => {
    if (e.code === 'Escape') instance.close();
    window.removeEventListener('keydown', onClose);
  };
  window.addEventListener('keydown', onClose);
};

refs.addEventListener('click', onClick);

console.log('sdfdf');