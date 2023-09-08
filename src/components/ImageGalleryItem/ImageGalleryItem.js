import React, { Component } from 'react';
// import Modal from 'components/Modal/Modal';
import Modal from 'react-modal';

Modal.setAppElement(`#root`);
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none'
  },
};

class ImageGalleryItem extends Component {
  state = {
    modalIsopen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { src, largeImageURL, alt, id } = this.props;

    return (
      <>
        <li key={id} onClick={this.openModal}>
          <img src={src} alt={alt} width={500} height={300} />
        </li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <img src={largeImageURL} alt={alt} width={800} height={500} />
        </Modal>
      </>
    );
  }
}

export default ImageGalleryItem;
