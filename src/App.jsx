import "./components/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	let component;
	switch (window.location.pathname) {
		case "/":
			component = <Home />;
			break;
		case "/about":
			component = <About />;
			break;
		case "/blog":
			component = <Blog />;
			break;
		case "/signup":
			component = <Signup />;
			break;
		case "/login":
			component = <Login />;
			break;
		default:
			component = <Home />;
	}
	return <div className="App-container">{component} </div>;
}

export default App;
