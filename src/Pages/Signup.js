import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form action="register.php" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
