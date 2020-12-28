/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Card, Divider, Input } from "antd";
import { Fragment, useState } from "react";
import {
  handleLoginWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleSignInWithPopup,
} from "../api/firebase";
import google_btn from "../assets/google_btn.png";

const Login = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const target = e.target.name;

    setFormValues({ ...formValues, [target]: value });
  };

  const handleSubmit = async () => {
    if (register) {
      handleSignInWithEmailAndPassword(
        formValues.email,
        formValues.password,
        formValues.name
      );
    } else {
      handleLoginWithEmailAndPassword(formValues.email, formValues.password);
    }
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  const handlePopup = async () => {
    handleSignInWithPopup();
  };

  return (
    <Fragment>
      <div
        css={css`
          width: 400px;
          margin: 30px auto;
        `}
      >
        <Card title={register ? "Register" : "Login"} size="big">
          {register && (
            <Input
              placeholder="Name"
              name="name"
              onChange={handleChange}
              css={css`
                margin-bottom: 20px;
              `}
            />
          )}

          <Input
            placeholder="Email"
            name="email"
            onChange={handleChange}
            css={css`
              margin-bottom: 20px;
            `}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            css={css`
              margin-bottom: 20px;
            `}
          />
          <Button onClick={handleSubmit} type="primary">
            {register ? "Register" : "Login"}
          </Button>
          <Divider />
          {register ? (
            <div>
              Already registred ?{" "}
              <strong
                onClick={handleRegister}
                css={css`
                  cursor: pointer;
                `}
              >
                Login
              </strong>
            </div>
          ) : (
            <div>
              Not registred ?{" "}
              <strong
                onClick={handleRegister}
                css={css`
                  cursor: pointer;
                `}
              >
                Register
              </strong>{" "}
            </div>
          )}
          <Divider />
          <div
            css={css`
              text-align: center;
            `}
          >
            or
          </div>
          <div
            css={css`
              text-align: center;
            `}
          >
            <img
              css={css`
                cursor: pointer;
                width: 200px;
              `}
              onClick={handlePopup}
              src={google_btn}
              alt="Sign in by Google"
            />
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
