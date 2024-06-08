export namespace Auth {
  export type SignUp = {
    name: string;
    phone: string;
    password: string;
  };

  export type SignIn = {
    phone: string;
    password: string;
  };
}
