import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllLists } from '../../redux/reducers/listsReducer';
import styles from './Lists.module.scss';
import ListForm from '../ListForm/ListForm';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.length === 0 ? (
        <p className={styles.noLists}>No lists available. Create a new one!</p>
      ) : (
        lists.map((list) => (
          <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </Link>
        ))
      )}
      <ListForm />
    </section>
  );
};

export default Lists;