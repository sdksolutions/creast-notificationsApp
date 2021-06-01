import React from "react";
import { login } from "../../services/auth.service";
import * as Styled from "./login.styles";
import history from "../../browserhistory";

const Login = (): React.ReactElement => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onClick = () => {
    login(email, password)
      .then((data) => {
        localStorage.setItem("userId", (data as any).userId);
        history.push("/notifications");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Styled.Container>
      <form>
        <Styled.Input
          type="text"
          placeholder="Enter Username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <Styled.Input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Styled.Button type="button" onClick={onClick}>
          Login
        </Styled.Button>
      </form>
    </Styled.Container>
  );
};

export default Login;
