import React from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import logo from '../assets/logo.png';

export const Footer = () => {
	return (
		<footer className="px-4 py-2 bg-primary">
			<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
				<div className="flex flex-row justify-center items-center pr-3 space-x-4 sm:space-x-8">
					<img className="w-20" src={logo} alt="logo" />
					<p className="text-white">
						Made by <span className="text-secondary"> Vidya Sagar Mehar</span>{' '}
					</p>
				</div>
				<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/VidyaSagarMehar/CharAlchemy---Tokenizer"
						>
							<img className="w-10" src={github} alt="" />
						</a>
					</li>

					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://x.com/VidyaSagarMehar"
						>
							<img className="w-10" src={twitter} alt="" />
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/vidya-sagar-mehar-bb576814a/"
						>
							<img className="w-10" src={linkedin} alt="" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
