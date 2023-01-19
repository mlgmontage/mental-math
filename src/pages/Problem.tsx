import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useProblem } from "entities/problems";
import { interpret } from "shared/lib";

const Problem = () => {
  const { id } = useParams();
  if (!id) return <div>Error: Id is not provided.</div>;

  const problem = useProblem(Number(id));
  if (!problem) return <div>Error: cannot find problem.</div>;

  return (
    <div>
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
      <div>{problem.description}</div>
      {interpret(problem.a)}
      {interpret(problem.b)}
    </div>
  );
};

export default Problem;
