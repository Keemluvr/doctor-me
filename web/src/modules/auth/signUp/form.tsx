"use client";

import { className } from "./style";
// import FullName from "@/components/form/fullname";
// import Email from "@/components/form/email";
// import Password from "@/components/form/password";
import Link from "next/link";

const Form = () => {
  // const { control, onSubmit, isLoading } = UseSignUp();

  return (
    <p>Form</p>
    // <form onSubmit={onSubmit} className={className.formWrapper}>
    //   <FullName label="your-full-name" control={control} isDisabled={isLoading} />
    //   <Email label="your-email-address" control={control} isDisabled={isLoading} />
    //   <Password label="create-a-strong-password" control={control} isDisabled={isLoading} />

    //   <p className={className.alreadyHaveAnAccount}>
    //     already-have-an-account{" "}
    //     <Link href="/" className={className.loginButton}>
    //       login
    //     </Link>
    //   </p>

    //   <button type="submit" className={className.signUpButton} color="primary" size="lg">
    //     {t("sign-up")}
    //   </button>
    // </form>
  );
};

export default Form;
