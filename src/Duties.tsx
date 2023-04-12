import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  duties: string[];
};

const Duties = ({ duties }: Props) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
