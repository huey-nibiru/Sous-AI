import { React, Navbar } from "../components/dependencies";
import { useState } from "react";
import "../styles/signupForm.css"; // Import the CSS file for styling

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
		<>
			<Navbar />

			<div className="signup-form-container">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
						/>
						{passwordError && (
							<span className="error-message">
								Password must contain at least 8 characters, including at least
								one uppercase letter, one lowercase letter, and one number
							</span>
						)}
					</div>
					<button type="submit">Sign up</button>
				</form>
			</div>
		</>
	);
};
export default SignupForm;
