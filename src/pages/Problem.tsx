import { Field, Form, Formik } from "formik";
import { Navigate, useParams } from "react-router-dom";
import { useProblem } from "entities/problems";
import { interpret, Operation, solve } from "shared/lib";
import { useEffect, useState } from "react";
import { ProfileInfo } from "entities/profile/ui/profileinfo";
import { useDispatch, useSelector } from "react-redux";
import { increment, profileSelector } from "entities/profile";

const Problem = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  if (!profile.name.length) return <Navigate to="/register" />;

  const { id } = useParams();
  if (!id) return <div>Error: Id is not provided.</div>;

  const problem = useProblem(Number(id));
  if (!problem) return <div>Error: cannot find problem.</div>;

  const [op, setOp] = useState<Operation>("+");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [change, setChange] = useState(false);

  useEffect(() => {
    setA(interpret(problem.a));
    setB(interpret(problem.b));
    setOp(problem.operation as Operation);
  }, [change]);

  return (
    <div>
      <ProfileInfo />
      <h2>{problem.title}</h2>
      <Formik
        initialValues={{
          result: "",
        }}
        onSubmit={(values, helpers) => {
          helpers.resetForm();
          setChange(!change);
          if (solve(op, a, b) === Number(values.result)) {
            dispatch(increment());
          }
        }}
      >
        {() => {
          return (
            <Form>
              <Field
                name="result"
                autoFocus
                autoComplete="off"
                className="input"
              />
            </Form>
          );
        }}
      </Formik>
      <div className="flex">
        <h1>{a}</h1>
        <h1>{op}</h1>
        <h1>{b}</h1>
        <h1>{}</h1>
      </div>

      <div>{problem.description}</div>
    </div>
  );
};

export default Problem;
