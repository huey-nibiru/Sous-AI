import { useState } from "react";
import React from "react";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(e.target.value);
    setPassword(e.target.value);
    setPasswordError(!isValidPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError) {
      // Submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        {passwordError && (
          <span style={{ color: "red" }}>Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number</span>
        )}
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
