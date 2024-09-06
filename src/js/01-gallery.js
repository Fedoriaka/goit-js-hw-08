// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import '../css/01-gallery.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const container = document.querySelector('.gallery');
const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `  <li class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img class="gallery__image" src="${preview}"  alt="${description}" />
      </a>
    </li>
  `;
  })
  .join('');
container.innerHTML = gallery;
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
