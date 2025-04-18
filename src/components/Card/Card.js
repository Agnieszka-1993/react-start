import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({id, title, isFavorite}) => {
    const dispatch = useDispatch();

    const handleFavoriteToggle = () => {
        dispatch(toggleCardFavorite(id));

      };
    return (
        <li className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.button}>
                <button
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
                    onClick={handleFavoriteToggle}>
                    <i className={`fa ${isFavorite ? 'fa-star' : 'fa-star-o'}`}></i>
                </button>
            </div>
        </li>
    );
};

export default Card;