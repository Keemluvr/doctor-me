"use client";

import { className } from "./style";
import Form from "./form";

const SignUp = () => {
  return (
    <div className={className.wrapper}>
      <div className={className.content}>
        <div className={className.titleWrapper}>
          <h1 className={className.title}>get-started</h1>
          <p className={className.description}>create-your-free-account</p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default SignUp;
