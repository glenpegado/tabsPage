import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './btnContainer';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  //useState
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //Function APIFetch
  const APIFetch = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  //useEffect
  useEffect(() => {
    APIFetch();
  }, []);

  //RETURN
  if (loading) {
    return (
      <section className='jobs-center'>
        <h1 className='loading'> </h1>;
      </section>
    );
  }
  if (error) {
    return (
      <section className='jobs-center'>
        <h1>There is an Error</h1>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <JobInfo jobs={jobs} currentIndex={currentIndex} />
    </section>
  );
}
export default App;
