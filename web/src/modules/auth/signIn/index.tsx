"use client";

import { className } from "./style";
import Form from "./form";

const SignIn = () => {
  return (
    <div className={className.wrapper}>
      <div className={className.content}>
        <div className={className.titleWrapper}>
          <h1 className={className.title} data-testid="title">
            welcome-back
          </h1>
          <p className={className.description} data-testid="description">
            login-to-your-account
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
