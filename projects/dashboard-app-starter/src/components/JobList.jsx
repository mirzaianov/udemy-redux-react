import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {
  selectAllPositions,
  selectVisiblePositions,
} from 'store/positions/position-selectors';
import { selectFilters } from 'store/filters/filter-selectors';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  );

  const handleAddFliter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFliter={handleAddFliter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
