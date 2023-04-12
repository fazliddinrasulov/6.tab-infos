const BtnContainer = ({ jobs, setCurrentItem, currentItem }: any) => {
  return (
    <div className="btn-container">
      {jobs.map((item: any, index: number) => {
        return (
          <button
            key={item.id}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
