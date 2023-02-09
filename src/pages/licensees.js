import React from 'react';
import './pages.css';

const Licensees = () => {
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Licensees
						</h1>
						<p>
							Licensees page will contain a list of licensed realtors and their contact information with the ability to add/remove/edit licensees and their information.
						</p>
						<table>
							<tr>
								<th>Licensee Number</th>
								<th>Licensee Name</th>
							</tr>
							<tr>
								<td>AA1234567</td>
								<td>Cody McConnell</td>
							</tr>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Licensees