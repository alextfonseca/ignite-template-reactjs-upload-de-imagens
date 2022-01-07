import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={'40px'}>
        {cards.map(card => {
          return <Card data={card} key={card.id} viewImage={handleViewImage} />;
        })}
      </Grid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={currentImageUrl}
      />
    </>
  );
}
