import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useProblem } from "entities/problems";
import { interpret, Operation, solve } from "shared/lib";
import { useEffect, useState } from "react";

const Problem = () => {
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
      <button onClick={() => setChange(!change)}>new</button>
      <h2>{problem.title}</h2>
      <Formik
        initialValues={{
          result: "",
        }}
        onSubmit={(values, helpers) => {
          console.warn(values);
          helpers.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <Field name="result" />
              <button type="submit">Check!</button>
            </Form>
          );
        }}
      </Formik>
      <div className="flex">
        <h1>{a}</h1>
        <h1>{op}</h1>
        <h1>{b}</h1>
        <h1>=</h1>
        <h1>{solve(op, a, b)}</h1>
      </div>

      <div>{problem.description}</div>
    </div>
  );
};

export default Problem;
