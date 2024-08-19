import React from 'react';
import Modal from 'react-modal';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    maxHeight: '100vh',
    maxWidth: '90vw',
  },
};

export default function ReactModal({ modalIsOpen, setIsOpen, project }) {
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    console.log('closeModal');
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Modal"
      >
        <ProjectDetail project={project} closeModal={closeModal} />
      </Modal>
    </div>
  );
}
