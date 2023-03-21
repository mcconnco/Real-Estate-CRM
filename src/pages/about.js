import React from 'react';
import './pages.css';

const About = () => {
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Fast Link CRM
						</h1>
						<h4>
							By Cody McConnell, Connor Bentzley, Ethan Ferte, Jonathan Beck, Moises Villareal Casas
						</h4>
						<h3>
							Purpose
						</h3>
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
						<p>
							Current CRM's have numerous extra features. With all these extra features it is easy for the crucial 
							components to get lost. Our software focuses on the essentials so that new realtors aren't drawn away 
							from the information that is most important to their jobs. Another problem about current CRM's is that they 
							give all of the power to the companies that contract the realtors and leave the realtors out to dry.
							Our CRM allows the agents to store their client list in a way that prioritizes them and their lifestyle.
						</p>
						<br></br>

						<h3>
							What we have over our competition
						</h3>
						<p>
							Our most formidable competition is SalesForce. They are one of the largest CRM's and assist real estate companies across 
							the United States. They have numerous features including graphs & statistics. What we do to compete with them is the opposite.
							We focus on teh basics of real estate on our site to make it less daunting for new realtors. 
						</p>
						<br></br>

						<h3>
							Contact Us
						</h3>
						<p>
							You can contact us with more questions at mcconnco@oregonstate.edu.
						</p>
						<br></br>

						<h3>
							How to run our software
						</h3>
						<p>
							Well, that's easy. Click the "Enter Site at the bottom of the page. Unfortunately, 
							without having an account or having access to our login credentials, the site is closed off to 
							protect our customer privacy and ensure a secure space to store data."
						</p>
						<br></br>

						<h3>
							Our Repositories
						</h3>
						<p>
							Our repositories are both linked here:
							<br></br>
							<a href='https://github.com/mcconnco/Real-Estate-CRM'>Front End Repository</a>
							<br></br>
							<a href= 'https://github.com/mcconnco/Real-Estate-CRM-Backend'>Backend Repository</a>
						</p>
						<br></br>

					</div>
				</div>
                <div className='enter-site'>
                    <a href='/dash' >Enter Site</a>
                </div>
			</section>
		</div>
	);
};

export default About;