import React from 'react';
import './pages.css';

const About = () => {
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							About
						</h1>
						<p>
							about content
						</p>
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