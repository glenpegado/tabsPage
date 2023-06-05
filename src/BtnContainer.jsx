function BtnContainer({ jobs, currentIndex, setCurrentIndex }) {
  return (
    <div className='btn-container'>
      {jobs.map((el, index) => {
        const { company, id } = el;
        return (
          <button
            key={id}
            className={index == currentIndex ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentIndex(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}
export default BtnContainer;
