import {React, Navbar} from "../components/dependencies";
/*
function Signup() {
	return (
		<div>
			<Navbar />
			<h1>SIGN UP</h1>
		</div>
	);
}
*/

import { useState } from 'react';
import { auth, googleAuthProvider } from '../services/firebase.js'; // import Firebase auth and Google authentication provider

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <button onClick={handleGoogleSignup}>Sign up with Google</button>
    </div>
  );
};



export default Signup;
