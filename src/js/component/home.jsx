import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
			<div className="row mt-4">
				<div className="col">
					<Card/>
				</div>
				<div className="col">
					<Card/>
				</div>
				<div className="col">
					<Card/>
				</div>
			</div>
			<br/>
			<Footer/>
		</div>

	);
};

export default Home;
