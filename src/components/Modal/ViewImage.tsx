import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        width="auto"
        height="auto"
        maxWidth={['300px', '500px', '900px']}
        maxHeight={['350px', '450px', '600px']}
      >
        <ModalBody padding="0">
          <Image
            src={imgUrl}
            maxWidth={['300px', '500px', '900px']}
            maxHeight={['350px', '450px', '600px']}
          />
        </ModalBody>
        <ModalFooter bg="pGray.800" h="2rem" py="20px" borderBottomRadius="5px">
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
