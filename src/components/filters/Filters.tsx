import { useEffect, useState } from 'react';
import './filters.css';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../actions/actions';
import type { Filter } from '../../types';

interface FilterValue {
  text: string;
  id: Filter;
}

const Filters = () => {
  const filters: FilterValue[] = [
    { text: 'Все', id: 'all' },
    { text: 'Активные', id: 'active' },
    { text: 'Выполненные', id: 'completed' },
  ];

  const dispatch = useDispatch();

  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    dispatch(setFilters(filter));
  }, [filter, dispatch]);

  return (
    <div className='todo-filters'>
      <ul className='todo-filters__list'>
        {filters.map((item) => (
          <li key={item.id} className='todo-filters__item'>
            <Button
              className={`todo-filters__button ${
                filter === item.id ? 'active' : ''
              }`}
              text={item.text}
              id={item.id}
              onClick={() => setFilter(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
