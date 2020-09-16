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
			//State of products possibly coming from database
			products: [
				{
					title: "Vitamin D3 - Highest Potency",
					image: d3,
					type: "Swanson Premium",
					info: "5,000 IU 250 Sgels",
					price: "$10.99",
					bogo: false,
					rating: 4.5,
					reviews: 440
				},
				{
					title: "Zinc Picolinate - Body Preferred Form",
					image: zinc,
					type: "Swanson Premium",
					info: "22 mg 60 caps",
					price: "$2.59",
					bogo: false,
					rating: 4.6,
					reviews: 95
				},
				{
					title: "Dr. Stephen Langer's Ultimate 16 Day Strain Probiotic with FOS",
					image: langer,
					type: "Swanson Probiotics",
					info: "3.2 Billion CFU 60 Veg Drcaps",
					price: "2 for $14.79",
					bogo: true,
					rating: 4.6,
					reviews: 823
				},
				{
					title: "Delivery Insurance",
					image: deliver,
					type: "Swanson Health Products, Inc.",
					info: "-",
					price: "$1.00",
					bogo: false,
					rating: 4.5,
					reviews: 78
				},
				{
					title: "Tumeric & Black Pepper",
					image: pepper,
					type: "Swanson Premium",
					info: "60 Veg Caps",
					price: "2 for $13.99",
					bogo: true,
					rating: 5,
					reviews: 238
				}
			]
		}
	};

	// Message alert when things are clicked on
	message = message => alert(message);

	render() {
		return (
			<>
				<div className="App">
					<div className="container2">
						<img src={hero} id="hero" alt="title" onClick={() => this.message("Discount activated!")} />
						<div id="adBucket">
							<img src={antidotes} alt="title" className="bottle" onClick={() => this.message("Antidotes!")} />
							<img src={onsale} alt="title" className="bottle" onClick={() => this.message("On Sale!")} />
							<img src={personalized} alt="title" className="bottle" onClick={() => this.message("Overwhelmed?")} />
						</div>
						<div className="clearfix"></div>
					</div>

					{/* you may like */}
					<div className="division">
						<p>You May Like</p>
					</div>
					<div className="clearfix"></div>
					<div className="lineGreen"></div>
					<div className="container2">
						{/* Container to hold products with info from state/database */}
						<div id="productsBox">
							{this.state.products.map(obj => {
								return (<Product
									image={obj.image}
									title={obj.title}
									info={obj.info}
									price={obj.price}
									type={obj.type}
									bogo={obj.bogo}
									rate={obj.rating}
									review={obj.reviews}
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