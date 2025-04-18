import styles from './List.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getColumnsByList } from '../../redux/reducers/columnsReducer';
import { getListById } from '../../redux/reducers/listsReducer'
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId));

    if (!listData) return <Navigate to="/" />;

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <PageTitle>{listData.title}</PageTitle>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => (
                    <Column key={column.id} {...column} />
                ))}
            </section>
            <ColumnForm listId={listId} />
        </div>
    );
};

export default List;

