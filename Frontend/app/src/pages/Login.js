import TextBox from "../components/Input/TextBox";
import Box from "../components/Box/Box";
import Button from "../components/Button/Button";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const columns = 1;
  const inputBoxStyle = {
    width: "calc(100% / " + columns + " - 20px)",
    marginBottom: "15px",
  };

  const navigate = useNavigate();
  const navigateToHome = () => navigate("/pages/home");

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onPasswordChange = (value) => {
    setPass(value);
  };

  const login = () => {
    fetch("http://127.0.0.1:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return fetchStatusHandler(response);
      })
      .then((data) => {
        setErrorMsg(data);
        if (!data) {
          navigateToHome();
        }
      });
  };

  async function fetchStatusHandler(response) {
    const data = await response.json();
    console.log(data);
    const status = data.error !== undefined;
    if (status) {
      return data.error;
    } else {
      return "";
    }
  }

  return (
    <div className="login_bg">
      <Box title="Login" max_width="700px">
      <div className="login_body">
        <div
          id={"error_container"}
          style={{ display: errorMsg ? "block" : "none" }}
          className="error_container">
          <span
            id={"error_message"}
            style={{ display: errorMsg ? "block" : "none" }}
            className="error_message">
            {errorMsg}
          </span>
        </div>

        <TextBox
          key="email"
          title="Email"
          inputAttrs={{
            id: "email",
            type: "text",
            placeholder: "myemail@gmail.com",
            required: true,
          }}
          style={inputBoxStyle}
          onInputChange={onEmailChange}
        />

        <TextBox
          key="password"
          title="Password"
          inputAttrs={{
            id: "password",
            type: "password",
            placeholder: "",
            required: true,
          }}
          style={inputBoxStyle}
          onInputChange={onPasswordChange}
        />

        <Button
          id="login_button"
          text="Login"
          disabled={false}
          onClick={login}
        />
      </div>
    </Box>
    </div>
    
  );
}

export default Login;
