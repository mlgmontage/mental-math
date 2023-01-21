import { setName } from "entities/profile";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="register">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          dispatch(setName(values.name));
          navigate(-1);
        }}
      >
        {() => {
          return (
            <Form className="form">
              <Field
                name="name"
                type="text"
                autoFocus
                className="input"
                placeholder="enter your name"
              />
              <br />
              <br />
              <button className="button">register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
