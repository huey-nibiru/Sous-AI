import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config.js";

const ParticlesBackground = () => {
	return <Particles params={particlesConfig}></Particles>;
};
export default ParticlesBackground;
