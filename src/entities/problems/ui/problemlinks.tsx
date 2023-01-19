import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { problemsSelector } from "../model/problems";

export const Problemlinks = () => {
  const problems = useSelector(problemsSelector);

  return (
    <>
      {problems.map((problem, i) => (
        <Link to={`/problem/${i}`} key={i}>
          {problem.title}
        </Link>
      ))}
    </>
  );
};
