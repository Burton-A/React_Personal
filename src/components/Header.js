import React from 'react';
import Logo from '../assets/andre-burton-logo2.png';

const Header = () => {
	return (
		<header className=" py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{}
					<a href="#">
						<img src={Logo} alt="" />
					</a>
					<a
						href="https://www.dropbox.com/scl/fi/s7h0dwvzomc0fegikm9tc/Andre_Burton_Resume.docx?dl=0&rlkey=iju5lerv8tcncz9ceu4fi42tq"
						download
					>
						<button className="btn btn-sm">Resume</button>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
