import React from "react";
import "./components/FontawesomeIcons";
import userAvatar from "./avatar.svg";
import bgPhone from "./bg.svg";
import bgWave from "./wave.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App">
			<img className="backgroundWave" src={bgWave} alt="" />
			<div className="container">
				<div className="bgPhoneImg">
					<img src={bgPhone} alt="" />
				</div>
				<div className="loginContainer">
					<form action="index.html">
						<img className="avatar" src={userAvatar} alt="" />
						<h2>Welcome</h2>
						<div className="input-div one">
							<div className="fontAwesome">
								<span className="awesomeFont">
									<FontAwesomeIcon icon={faUser} className="userIcon" />
								</span>
							</div>
							<div>
								<h5>Username</h5>
								<input className="input" type="text" placeholder="Username" />
							</div>
						</div>
						<div className="input-div two">
							<div className="fontAwesome">
								<span className="awesomeFont">
									<FontAwesomeIcon icon={faLock} className="lockIcon" />
								</span>
							</div>
							<div>
								<h5>Password</h5>
								<input
									className="input"
									type="password"
									placeholder="Password"
								/>
							</div>
						</div>
						<a href="//#endregion">Forget Password</a>
						<input type="submit" className="btn" value="Login" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
