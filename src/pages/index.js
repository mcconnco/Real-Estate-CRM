import React from 'react';
import './pages.css';

const Dash = () => {
	return (
		<div>
			<section>
				<div>
					<div className='ButtonGroup'>
						<a href='/clients'>
							<button className='dashButton'>Clients</button>
						</a>
						<a href='/licensees'>
							<button className='dashButton'>Licensees</button>
						</a>
						<a href='/properties'>
							<button className='dashButton'>Properties</button>
						</a>
						<a href='/transactions'>
							<button className='dashButton'>Transactions</button>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dash
