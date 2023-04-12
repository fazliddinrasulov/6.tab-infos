import { useEffect, useState } from "react";
import "./App.css";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading" />
      </section>
    );
  }
  return (
    <main>
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          setCurrentItem={setCurrentItem}
          currentItem={currentItem}
        />
        <JobInfo jobs={jobs} currentItem={currentItem} />
      </section>
    </main>
  );
}

export default App;
