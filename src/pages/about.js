import React from 'react';
import './pages.css';

//Basic about page listing information about the project/program

const About = () => {
	return ( 
		<div>
			<section>
				<div>
					<div>
						
						{/*Product name*/}
						<h1> 
							Fast Link CRM 
						</h1>
						
						{/*Who made the product*/}
						<h4>
							By Cody McConnell, Connor Bentzley, Ethan Ferte, Jonathan Beck, Moises Villareal Casas
						</h4>

						{/*Header for why we made the product*/}
						<h3>
							Purpose
						</h3>
						{/*Explanation of why we made the product*/}
						<p>
							The purpose of our project is to create a CRM with 2 main focuses.
							The first focus was to make a CRM tailored to help new realtors learn how to use the tools of their trade.
							The second focus was to create a tool for realtors to take their client lists between companies.
							By allowing realtors to keep their client lists, we help them to ensure their livelyhoods
							and prevent them from becoming shackled to a company that holds their client list.
						</p>
						<br></br>

						<h3>
							The problem we are solving
						</h3>
						{/*What problem our product is combatting*/}
						<p>
							Current CRM's have numerous extra features. With all these extra features it is easy for the crucial 
							components to get lost. Our software focuses on the essentials so that new realtors aren't drawn away 
							from the information that is most important to their jobs. Another problem about current CRM's is that they 
							give all of the power to the companies that contract the realtors and leave the realtors out to dry.
							Our CRM allows the agents to store their client list in a way that prioritizes them and their lifestyle.
						</p>
						<br></br>

						<h3>
							Contact Us
						</h3>
						{/*Contact info for team lead*/}
						<p>
							You can contact us with more questions at mcconnco@oregonstate.edu.
						</p>
						<br></br>

						<h3>
							Our Repositories
						</h3>
						{/*Access to our public repos*/}
						<p>
							Our repositories are both linked here:
							<br></br>
							<button className="btn btn-link">
								<a href='https://github.com/mcconnco/Real-Estate-CRM'>Front End Repository</a>
							</button>
							<br></br>
							<button className="btn btn-link">
								<a href= 'https://github.com/mcconnco/Real-Estate-CRM-Backend'>Backend Repository</a>
							</button>
						</p>
						<br></br>

					</div>
				</div>
			</section>
		</div>
	);
};

export default About;