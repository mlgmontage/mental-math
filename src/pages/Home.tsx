import { Field, Form, Formik } from "formik";

const Home = () => {
  return (
    <div>
      <h1>Hello, world</h1>
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
    </div>
  );
};

export default Home;
