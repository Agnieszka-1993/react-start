import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/reducers/listsReducer';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addList({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <span className={styles.inputLabelWrapper}>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.inputWrapper}>
        <span className={styles.inputLabelWrapper}>Description:</span>
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <Button type="submit">Add List</Button>
    </form>
  );
};

export default ListForm;