import React from 'react';
import './App.css';
import Product from './components/Product';

// images
import hero from "./assets/Hero.jpg";
import antidotes from "./assets/HP_Antidotes.jpg";
import onsale from "./assets/HP_On_Sale.jpg";
import personalized from "./assets/HP_Personalized.jpg";
import d3 from "./assets/SW1371.jpg";
import zinc from "./assets/SW1113.jpg";
import langer from "./assets/SWA051.jpg";
import deliver from "./assets/DELIVERYINS01.jpg";
import pepper from "./assets/SW1613.jpg";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					title: "Vitamin D3 - Highest Potency",
					image: d3,
					type: "Swanson Premium",
					info: "5,000 IU 250 Sgels",
					price: "$10.99",
					bogo: false
				},
				{
					title: "Zinc Picolinate - Body Preferred Form",
					image: zinc,
					type: "Swanson Premium",
					info: "22 mg 60 caps",
					price: "$2.59",
					bogo: false
				},
				{
					title: "Dr. Stephen Langer's Ultimate 16 Day Strain Probiotic with FOS",
					image: langer,
					type: "Swanson Probiotics",
					info: "3.2 Billion CFU 60 Veg Drcaps",
					price: "2 for $14.79",
					bogo: true
				},
				{
					title: "Delivery Insurance",
					image: deliver,
					type: "Swanson Health Products, Inc.",
					info: "-",
					price: "$1.00",
					bogo: false
				},
				{
					title: "Tumeric & Black Pepper",
					image: pepper,
					type: "Swanson Premium",
					info: "60 Veg Caps",
					price: "2 for $13.99",
					bogo: true
				}
			]
		}
	};

	message = message => alert(message);

	render() {
		return (
			<>
				<div className="App">
					<div className="container">
						<img src={hero} id="hero" onClick={() => this.message("Discount activated!")} />
						<div id="adBucket">
							<img src={antidotes} className="bottle" onClick={() => this.message("Antidotes!")} />
							<img src={onsale} className="bottle" onClick={() => this.message("On Sale!")} />
							<img src={personalized} className="bottle" onClick={() => this.message("Overwhelmed?")} />
						</div>
						<div className="clearfix"></div>
						<div className="division">
							<div className="lineGreen"></div>
							<p>You May Like</p>
							<div className="lineGreen"></div>
						</div>
						<div className="clearfix"></div>
						<div id="productsBox">
							{this.state.products.map(obj => {
								return (<Product
									image={obj.image}
									title={obj.title}
									info={obj.info}
									price={obj.price}
									type={obj.type}
									bogo={obj.bogo}
								/>)
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;