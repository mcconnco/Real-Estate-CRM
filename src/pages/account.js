import React from 'react';
import './pages.css';

const Account = () => {
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Account Page
						</h1>
						<p>
							This page will have a set of account settings for the user to modify.
						</p>
                        
                        <h1>
                            Account Info
                        </h1>
                        <ul>
                            <li>Email: ****@gmail.com</li>
                            <li>Username: ****</li>
                            <li>Password: ****</li>
                            <li>Agent Name: J**** B****</li>
                        </ul>
                        
                        <h1>
                            Public Methods of Contact
                        </h1>
                        <ul>
                            <li>Email: ****@gmail.com</li>
                            <li>Phone Number: 555-***-****</li>
                            <li>Office Address: ****</li>
                        </ul>
                        <h1>
                            Account Birthday:
                        </h1>
                        <p>June 27th</p>
                        <h1>
                            Delete Account
                        </h1>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Account