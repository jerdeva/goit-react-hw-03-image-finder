import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import  List  from './ImageGallery.styled'
import {Wrapper} from './ImageGallery.styled'


export const ImageGallery = ({ images }) => (
  <Wrapper>
    <List>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </List>
  </Wrapper>
); 

