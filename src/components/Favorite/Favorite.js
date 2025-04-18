import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle'

const Favorite = () => {
  const favoriteCards = useSelector(state =>
    state.cards.filter(card => card.isFavorite)
  );

  if (favoriteCards.length === 0) {
    return <PageTitle className={styles.noFavorites}>No favorite cards...</PageTitle>;
  }

  return (
    <Container>
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul>
        {favoriteCards.map(card => (
          <div key={card.id}>
            <Card {...card} />
          </div>
        ))}
      </ul>
    </section>
    </Container>
  );
};

export default Favorite;