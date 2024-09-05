import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selectors';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const positions = useSelector(selectAllPositions);

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
