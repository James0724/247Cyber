import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggle = () => setIsMenuOpen(!isMenuOpen);
	return (
		<header className="site-header">
			<div className="site-header__wrapper">
				<div className="site-header__start">
					<AnchorLink to="/" className="brand">
						247cybercafe
					</AnchorLink>
				</div>
				<div className="site-header__middle">
					<nav className="nav">
						<div className="menu-btn" onClick={toggle}>
							<span
								className={`menu-btn__burger ${isMenuOpen ? "open" : ""}`}
							></span>
						</div>
						<ul className={`nav__wrapper ${isMenuOpen ? "open" : ""}`}>
							<li className="nav__item">
								<AnchorLink to="/">Home</AnchorLink>
							</li>
							<li className="nav__item">
								<AnchorLink to="/#about-page">About</AnchorLink>
							</li>
							<li className="nav__item">
								<AnchorLink to="/#services-page">Services</AnchorLink>
							</li>
							<li className="nav__item">
								<AnchorLink to="/">Hire us</AnchorLink>
							</li>
							<li className="nav__item">
								<AnchorLink to="/#contact-page">Contact</AnchorLink>
							</li>
						</ul>
					</nav>
					{/* <div className=" nav-btn btn-primary">
						<AnchorLink to="/">Hire a wrighter</AnchorLink>
					</div> */}
				</div>
			</div>
		</header>
	);
}

export default Navbar;
