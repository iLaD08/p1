import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function VideoModal({ isOpen, onClose, videoURL }) {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Video Player</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            <iframe
              src={videoURL}
              title={videoURL}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
