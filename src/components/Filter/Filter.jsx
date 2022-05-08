import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/phonebook/selectors';
import { filterChangeAction } from '../../redux/phonebook/actions';


export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = event =>
    dispatch(filterChangeAction(event.target.value));

  return (
    <div className={s.filterWrap}>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          value={value}
          onChange={onFilterChange}
          className={s.input}
        />
      </label>
    </div>
  );
};