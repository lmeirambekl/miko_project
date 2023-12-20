import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form action="register.php" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-lpignore="true"
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
