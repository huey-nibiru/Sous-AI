import yinyang from "../media/yinyang.png";
import React from 'react';

import "./styles.css";
export default function Navbar() {
	return (
		<div class="nav-container">
			<nav className="nav">
				<div class="container">
					<img src={yinyang} className="App-logo" alt="logo" />
					<div class="side-content-center">
						<div>
							<a href="/" className="site-title">
								SOUS
							</a>
						</div>
					</div>
				</div>

				<ul>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/signup">Signup</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
