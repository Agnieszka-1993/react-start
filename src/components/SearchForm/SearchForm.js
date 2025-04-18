import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/reducers/searchReduce';


const SearchForm = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(search));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;