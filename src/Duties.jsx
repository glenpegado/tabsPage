import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 } from 'uuid';

function Duties({ duties }) {
  return (
    <div>
      {duties.map((el, index) => {
        const id = v4();
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{el}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Duties;
