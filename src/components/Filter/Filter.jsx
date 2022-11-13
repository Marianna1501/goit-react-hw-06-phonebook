import { useDispatch, useSelector } from 'react-redux';
import { myFilter } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(myFilter(e.currentTarget.value.trim().toLowerCase()));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilter}
      />
    </div>
  );
};

export default Filter;
