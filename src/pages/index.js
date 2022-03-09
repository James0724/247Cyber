import * as React from "react";
import "normalize.css";
import "../dist/css/main.css";
import Features from "./features";
import About from "./about";
import Services from "./services";
import Layout from "../components/Layout";
import Contact from "./contact";

const IndexPage = () => {
	return (
		<Layout>
			<main>
				<section id="hero-page">
					<div className="hero">
						<div className="hero__text">
							<h1>Amazing Online Cyber Services</h1>
							<p>
								247cybercafe is a fast reliable cyber that offers reliable
								online
								<span>cyber services</span>,<span>remote printing </span>
								and <span>content writing</span> at your Convinience.
							</p>
							<div class="btn-primary">
								<a href="#">Hire a professional writer</a>
							</div>
						</div>
						<div className="hero__svg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								version="1.1"
								x="0px"
								y="0px"
								viewBox="0 0 586.2 489.8"
								style={{ enableBackground: "new 0 0 586.2 489.8" }}
								xmlSpace="preserve"
							>
								<g id="background">
									<g id="table">
										<path
											class="st0"
											d="M112,347c1.3-3.4,86.8-91.1,86.8-91.1l387,15.5l-4.8,98.3"
										/>
										<polygon
											class="st1"
											points="581,377.8 112,357.7 112,347 581,367.1   "
										/>
									</g>
									<g id="keyboard">
										<polygon
											class="st0"
											points="391.5,314.7 235.9,304.8 266.9,276.6 405.7,281.7   "
										/>
										<polygon
											class="st0"
											points="388.9,309.8 246.1,301.2 269.5,280.3 398.8,284.6   "
										/>
										<line
											class="st2"
											x1="250.9"
											y1="297"
											x2="391.3"
											y2="303.6"
										/>
										<line
											class="st2"
											x1="256.6"
											y1="291.9"
											x2="393.3"
											y2="298.6"
										/>
										<line
											class="st2"
											x1="262.7"
											y1="286.4"
											x2="396"
											y2="291.9"
										/>
										<line
											class="st2"
											x1="256.7"
											y1="301.9"
											x2="279.1"
											y2="280.7"
										/>
										<line
											class="st2"
											x1="269.5"
											y1="302.4"
											x2="289.2"
											y2="281"
										/>
										<line
											class="st2"
											x1="282.1"
											y1="303.4"
											x2="300.5"
											y2="281.4"
										/>
										<line
											class="st2"
											x1="298.1"
											y1="299.2"
											x2="311.4"
											y2="281.7"
										/>
										<line
											class="st2"
											x1="311.9"
											y1="299.9"
											x2="322.5"
											y2="282.1"
										/>
										<line
											class="st2"
											x1="327.2"
											y1="300.3"
											x2="335.2"
											y2="282.5"
										/>
										<line
											class="st2"
											x1="337.1"
											y1="307"
											x2="346.5"
											y2="283.2"
										/>
										<line
											class="st2"
											x1="350.1"
											y1="307.5"
											x2="357.3"
											y2="283.2"
										/>
										<line
											class="st2"
											x1="365.2"
											y1="308.4"
											x2="370.8"
											y2="283.7"
										/>
										<line
											class="st2"
											x1="381.4"
											y1="284"
											x2="377.8"
											y2="309.2"
										/>
									</g>
									<g id="notebook">
										<path
											class="st0"
											d="M397.3,346.5l47,3.4c9.2-12.5,18.4-24.9,27.7-37.4c0.1-1.8,0.1-3.6,0.2-5.4c-24.6,11.3-49.2,22.6-73.8,34    l-1,1.5V346.5z"
										/>
										<path
											class="st3"
											d="M444.1,346.2c-15.7-0.9-31.3-1.8-47-2.7c0.1,1.1,0.2,2.3,0.3,3.4c-0.6-1.7-1.2-3.4-1.8-5.1    c11.7-12.5,23.4-25,35.1-37.5c14.3,0.7,28.5,1.4,42.8,2.1L444.1,346.2z"
										/>
										<polygon
											class="st0"
											points="431.9,312.2 436.8,307.2 461.5,308.2 457.3,313.6   "
										/>
									</g>
									<g id="plant">
										<polygon
											class="st1"
											points="517.5,324.6 490.6,324.6 483.9,276 525.4,276   "
										/>
										<ellipse class="st0" cx="504.7" cy="276" rx="20.3" ry="8" />
										<g>
											<g>
												<path
													class="st4"
													d="M488.4,233.4c1.1,7.1,4.1,13.4,8.8,18.8c2.7,3.2,6,6,7.8,9.8c2,4.2,2.1,8.7,1.6,13.2c-0.2,1.9,2.8,1.9,3,0      c0.8-7-0.5-13.5-4.9-19.1c-2.7-3.4-5.9-6.1-8.3-9.7c-2.8-4.2-4.4-8.9-5.2-13.8C491,230.7,488.1,231.5,488.4,233.4L488.4,233.4z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st4"
													d="M510.3,228.7c-3.3,6.6-0.7,14.1,0.8,20.8c2.2,10,4.3,20.2,0.8,30.2c-0.6,1.8,2.3,2.6,2.9,0.8      c2.6-7.4,2.3-15,1-22.7c-0.7-4.3-1.7-8.5-2.6-12.7c-1.1-4.9-2.7-10.2-0.3-14.9C513.7,228.5,511.2,227,510.3,228.7L510.3,228.7z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st4"
													d="M526.2,240.6c-0.9,8.4-11.1,12.4-12.9,20.8c-0.4,1.9,2.5,2.7,2.9,0.8c1.8-8.6,12-12.4,13-21.6      C529.4,238.6,526.4,238.6,526.2,240.6L526.2,240.6z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st4"
													d="M500.6,252c0.5-7.4,6.6-12.9,9.6-19.3c2.5-5.5,3.7-11.3,3.9-17.3c0.1-1.9-2.9-1.9-3,0      c-0.2,7.8-2.5,15-6.7,21.6c-3.1,4.8-6.3,9.1-6.7,15C497.5,253.9,500.5,253.9,500.6,252L500.6,252z"
												/>
											</g>
										</g>
										<path
											class="st4"
											d="M497.2,250c-1.1,0.3-7.7,1.7-13.4-2.4c-5.4-3.8-7.9-11-6.1-18.1c2.8,1.6,6,3.9,9.3,7    C492.1,241.3,495.2,246.3,497.2,250z"
										/>
										<path
											class="st4"
											d="M490.6,236.9c-1-1.8-3.4-6.4-3-12.7c0.4-7.1,4-11.9,5.3-13.4c0.8,2.2,1.5,5.1,1.8,8.5    C495.1,227.4,492.3,233.8,490.6,236.9z"
										/>
										<path
											class="st4"
											d="M520.4,252.5c1.3-2.2,3.7-7.1,3.1-13.7c-0.6-5.5-3-9.7-4.6-12c-1,2.5-2,6-2.1,10.3    C516.6,243.8,518.7,249.3,520.4,252.5z"
										/>
										<path
											class="st4"
											d="M507.1,262.7c-1,0.5-9,4.4-16.9,0.4c-4.1-2.1-6.3-5.4-7.3-7c2.2-0.6,6.5-1.4,11.7-0.3    C501.3,257.2,505.5,261,507.1,262.7z"
										/>
										<path
											class="st4"
											d="M499.5,248.9c0.6-1.2,2.8-5.8,8.1-8.4c5.4-2.6,10.4-1.5,11.7-1.2c-0.7,1.6-2,3.7-4.1,5.5    C509,250.4,500.9,249.2,499.5,248.9z"
										/>
										<path
											class="st4"
											d="M507.5,234.6c-1.2-1.5-2.4-3.5-3.1-5.9c-2.8-9.4,3.4-17.9,4.4-19.3C508.4,217.8,507.9,226.2,507.5,234.6z"
										/>
									</g>
									<g id="tab">
										<polygon
											class="st0"
											points="247.3,38.5 247.3,212.7 477.2,215.6 479.3,40.4   "
										/>
										<line
											class="st2"
											x1="277.5"
											y1="193.6"
											x2="430.7"
											y2="193.6"
										/>
										<line
											class="st2"
											x1="310.2"
											y1="187.3"
											x2="395.4"
											y2="187.3"
										/>
										<line
											class="st2"
											x1="281.3"
											y1="174.5"
											x2="380.4"
											y2="174.5"
										/>
										<line
											class="st2"
											x1="329.6"
											y1="166.5"
											x2="439.6"
											y2="166.5"
										/>
										<line
											class="st4"
											x1="398.8"
											y1="174.5"
											x2="439.6"
											y2="174.5"
										/>
										<circle class="st4" cx="273.5" cy="175.1" r="3.2" />
										<circle class="st4" cx="272.4" cy="193.2" r="2.9" />
										<rect
											x="266.7"
											y="57.6"
											class="st2"
											width="65.6"
											height="22.2"
										/>
										<rect
											x="262.5"
											y="108.5"
											class="st2"
											width="76"
											height="5.4"
										/>
										<rect
											x="395.4"
											y="53.5"
											class="st2"
											width="44.3"
											height="31"
										/>
									</g>
									<g id="products">
										<g id="headphones">
											<rect
												x="452.8"
												y="-0.2"
												class="st4"
												width="76.6"
												height="149.5"
											/>
											<ellipse
												class="st0"
												cx="469.8"
												cy="80.3"
												rx="7.4"
												ry="9"
											/>
											<ellipse
												class="st1"
												cx="474"
												cy="79.9"
												rx="9.5"
												ry="11.3"
											/>
											<path
												class="st1"
												d="M482.5,42.5c-1,0.1-1.9,0.3-2.9,0.4c-1.9,1.8-4.9,5.1-6.9,9.9c-3.1,7.3-2.3,13.9-1.8,16.7     c2.1-0.1,4.1-0.2,6.2-0.4c-0.1-2.4,0.1-5.3,0.9-8.6c2.3-9.2,8.2-14.9,11.1-17.3C486.8,43.1,484.7,42.8,482.5,42.5z"
											/>
											<path
												class="st0"
												d="M481.6,42.5c1.5,0,9.3,0.3,15.5,10.5c5.6,9.2,6.2,20.2,6.3,23c1.7-2.3,3.4-4.6,5.2-7     c0-3.9-0.5-10.7-3.3-16.7C500.5,42,491,38,481.6,42.5z"
											/>
											<ellipse
												class="st0"
												cx="507.7"
												cy="81.8"
												rx="10.2"
												ry="12.2"
											/>
											<ellipse
												class="st0"
												cx="511.7"
												cy="81.8"
												rx="7.7"
												ry="9.5"
											/>
											<g>
												<g>
													<path
														class="st1"
														d="M461.8,44.6c1.7-0.2,2.7-1.3,3.4-2.8c0.8-1.6,1.1-3.6,1.5-5.4c0.2-1.1,0.1-3.5,0.6-4.4       c0.5-1-0.4-0.8,0.5-0.5c0.3,0.1,0.9,0.8,1.2,1c1,0.7,2,1.2,3.1,1.5c2.5,0.8,4.9,0.7,7.4-0.1c0.5-0.2,0.3-0.9-0.2-0.7       c-4.4,1.5-8.9,0.2-12-3.3c-0.2-0.3-0.6,0-0.6,0.3c-0.2,3.3-0.3,13.1-5,13.8C461.1,43.9,461.3,44.6,461.8,44.6L461.8,44.6z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M495.7,33.8c1.7,1.3,3.2,2,5.3,2.3c1.2,0.2,6.2-1,6.9-0.7c1.2,0.6,0.4,1.3,0.7,2.8       c0.2,1.3,0.9,2.7,1.8,3.7c1,1.1,2.4,1.9,3.7,2.4c1,0.4,2,0.5,2.9,0.9c2.4,0.9,1.7-0.1,1.6,2c-0.1,2.9-0.5,4.8,1.7,7.2       c0.3,0.4,0.9-0.2,0.5-0.5c-2.1-2.3-2.2-5.9-0.4-8.3c0.1-0.2,0-0.5-0.2-0.6c-4.7-0.8-13.8-2.9-10.4-10.2       c0.1-0.3-0.1-0.6-0.4-0.6c-4.7,1.1-9.3,2-13.4-1.1C495.7,32.9,495.4,33.5,495.7,33.8L495.7,33.8z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M458.5,95.2c3.6,3.1,5.4,7.2,5.2,11.9c0,0.3,0.3,0.4,0.6,0.3c4.2-2.2,9.1-1.6,12.7,1.7       c0.4,0.3,0.9-0.2,0.5-0.5c-1.7-1.6-3.6-2.6-5.9-3c-1-0.2-2.1-0.2-3.1-0.1c-0.8,0.1-3.1,1.1-3.5,0.9c-0.5-0.2-1-4.7-1.4-5.5       c-0.9-2.4-2.5-4.4-4.5-6.1C458.7,94.4,458.1,94.9,458.5,95.2L458.5,95.2z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M497,112.2c3.7-3.9,8.1-1.7,11.9,0.3c0.3,0.1,0.5,0,0.6-0.3c0.4-6,6.1-7.9,11.2-7.5c0.3,0,0.4-0.3,0.4-0.5       c-0.5-3.5,0.9-6.5,3.9-8.4c0.4-0.3,0-0.9-0.4-0.6c-3.2,2.1-3.1,4-4.4,7.2c-0.9,2.3-6.2,1.8-8.5,3.8c-1.2,1-1.6,2.1-2.4,3.4       c-1.2,1.8-0.1,1.7-3,0.8c-3.6-1.1-6.8-1.6-9.6,1.4C496.1,112,496.6,112.5,497,112.2L497,112.2z"
													/>
												</g>
											</g>
										</g>
										<g id="controller">
											<rect x="329" class="st4" width="76.6" height="149.5" />
											<path
												class="st0"
												d="M344.4,67.2c-9,8.3-10.9,25.3-7.2,27.7c4.3,2.9,17.6-14.3,20.3-18c0,0.2,0.1,1.4,1,2c1,0.7,2.9,0.4,4-1.1     c2.1,0.3,4.2,0.6,6.3,0.9c0,0.1,0.5,1.6,2,2c1.3,0.3,2.8-0.4,3.4-1.9c-5.2,17.2-4.5,22.2-2.6,23.5c5.1,3.5,27.3-18.6,23.4-30.1     c-2.3-6.6-12.5-7.8-23.2-9.1C360.5,61.7,351.5,60.6,344.4,67.2z"
											/>
											<ellipse
												class="st0"
												cx="354.9"
												cy="64.5"
												rx="1.4"
												ry="0.7"
											/>
											<ellipse
												class="st0"
												cx="351.3"
												cy="67"
												rx="1.4"
												ry="0.8"
											/>
											<ellipse
												class="st0"
												cx="358.1"
												cy="67"
												rx="1.7"
												ry="0.8"
											/>
											<ellipse
												class="st0"
												cx="354.7"
												cy="70.2"
												rx="1.7"
												ry="0.8"
											/>
											<path
												class="st1"
												d="M358.5,78.1c0.2,0.1,0.6,0.3,1.1,0.3c0.8,0.1,1.5-0.3,1.7-0.5c-0.1-1.4-0.1-2.8-0.2-4.2     c2.3-0.6,2.8-1.2,2.8-1.6c0-0.9-2.4-2.1-4.6-1.9c-1.8,0.2-3.7,1.3-3.6,2.2c0,0.2,0.2,0.8,2.4,1.3     C358.2,75.2,358.4,76.6,358.5,78.1z"
											/>
											<path
												class="st1"
												d="M370.2,79.5c0.2,0.1,0.6,0.3,1.1,0.3c0.8,0.1,1.5-0.3,1.7-0.5c-0.1-1.4-0.1-2.8-0.2-4.2     c2.3-0.6,2.8-1.2,2.8-1.6c0-0.9-2.4-2.1-4.6-1.9c-1.8,0.2-3.7,1.3-3.6,2.2c0,0.2,0.2,0.8,2.4,1.3C369.9,76.6,370.1,78,370.2,79.5     z"
											/>

											<ellipse
												transform="matrix(6.571031e-02 -0.9978 0.9978 6.571031e-02 291.6672 447.8892)"
												class="st0"
												cx="385"
												cy="68.2"
												rx="0.7"
												ry="1.4"
											/>

											<ellipse
												transform="matrix(6.571031e-02 -0.9978 0.9978 6.571031e-02 285.905 446.1542)"
												class="st0"
												cx="381.2"
												cy="70.4"
												rx="0.8"
												ry="1.4"
											/>

											<ellipse
												transform="matrix(6.571031e-02 -0.9978 0.9978 6.571031e-02 291.8506 453.4058)"
												class="st0"
												cx="388"
												cy="70.9"
												rx="0.8"
												ry="1.7"
											/>

											<ellipse
												transform="matrix(6.571031e-02 -0.9978 0.9978 6.571031e-02 285.4891 452.6266)"
												class="st0"
												cx="384.5"
												cy="73.9"
												rx="0.8"
												ry="1.7"
											/>
											<g>
												<g>
													<path
														class="st1"
														d="M337,61.5c1.1-1,1.9-1.9,2.5-3.2c0.3-0.7,1-5.3,1.3-5.4c0.2-0.1,3.5,1.6,4.9,1.3c1.3-0.2,2.3-0.8,3.3-1.7       c0.8-0.7,2.3-3.5,2.9-3.7c0.3-0.1,2.2,1.7,2.6,1.9c2.2,1.1,4.7,0.9,7,0.8c0.5,0,0.5-0.8,0-0.8c-3.5,0.1-7.3,0.2-9.4-3.6       c-0.1-0.2-0.5-0.3-0.6,0c-1.4,3.2-6.7,10.5-10.7,4.1c-0.2-0.3-0.7-0.2-0.7,0.2c-0.4,3.5-0.9,7-3.7,9.4       C336.1,61.3,336.6,61.8,337,61.5L337,61.5z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M380.2,56.5c1.4,1.2,2.8,1.5,4.7,1.3c1.1-0.1,2.3-0.4,3.3-0.8c0.3-0.1,3.3-1.5,3.5-1.3       c0.2,0.1,1,2.7,1.5,3.3c1.5,1.8,3.3,2.8,5.6,2.9c0.5,0,0.5-0.7,0-0.8c-2.7-0.1-6.8-2.7-6-6.1c0.1-0.3-0.3-0.6-0.6-0.4       c-2.9,1.4-8.6,4.1-11.6,1.5C380.3,55.7,379.8,56.2,380.2,56.5L380.2,56.5z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M359.2,106.5c3.3,1.5,5.5,4,6.7,7.4c0.1,0.3,0.5,0.3,0.7,0.1c2.4-3.1,5.5-4.9,9.4-5.3       c0.5-0.1,0.5-0.8,0-0.8c-1.7,0.2-3.3,0.6-4.8,1.3c-0.5,0.2-4.6,3.6-4.6,3.6c-0.7-0.2-1.7-2.8-2.3-3.5c-1.3-1.6-2.9-2.7-4.7-3.5       C359.1,105.7,358.7,106.3,359.2,106.5L359.2,106.5z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M402.7,88.9c-3.1,1.4-5.3,4.3-5.7,7.8c-0.1,0.8,0.2,1.5-0.4,2c-0.5,0.4-1.9,0.5-2.6,0.7       c-1.9,0.8-3.5,2-4.9,3.5c-0.3,0.4,0.2,0.9,0.5,0.5c2.1-2.4,4.7-3.7,7.9-4.1c0.2,0,0.4-0.2,0.4-0.4c-0.5-4,1.5-7.7,5.2-9.4       C403.5,89.4,403.1,88.7,402.7,88.9L402.7,88.9z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M330.9,86.4c1.6,4.5,0.5,8.9-0.7,13.3c-0.1,0.3,0.2,0.5,0.5,0.5c3.7-0.5,7,1.3,8.7,4.6       c0.2,0.4,0.9,0.1,0.6-0.4c-0.8-1.6-1.9-2.9-3.4-3.9c-0.8-0.5-1.6-0.8-2.4-1c-0.6-0.1-2.4,0-2.6-0.3c-0.8-0.8,0.6-4.5,0.8-5.7       c0.3-2.6,0.1-4.9-0.7-7.4C331.4,85.8,330.7,86,330.9,86.4L330.9,86.4z"
													/>
												</g>
											</g>
										</g>
										<g id="speakers">
											<rect x="208.9" class="st4" width="76.6" height="149.5" />
											<rect
												x="230"
												y="45.4"
												class="st0"
												width="32.5"
												height="64.2"
											/>
											<ellipse
												class="st5"
												cx="246.3"
												cy="63.1"
												rx="9.8"
												ry="9.6"
											/>
											<ellipse
												class="st5"
												cx="246.3"
												cy="92.2"
												rx="9.8"
												ry="9.6"
											/>
											<g>
												<g>
													<path
														class="st1"
														d="M219,45.9c3.2-4.3,2.7-9.6,1.7-14.6c-0.2,0.1-0.4,0.2-0.6,0.4c3.5,2.8,8,3.5,12.2,1.8       c0.4-0.2,0.2-0.9-0.2-0.7c-3.9,1.6-8.1,1-11.4-1.6c-0.3-0.2-0.7,0-0.6,0.4c1,4.8,1.5,9.8-1.6,14       C218.1,45.9,218.7,46.2,219,45.9L219,45.9z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M216.5,63.2c1.4,4.5,0,8.7-3.5,11.7c-0.1,0.1-0.1,0.4,0,0.5c2.5,2.1,3,4.9,3.4,7.9c0.1,0.5,0.8,0.5,0.8,0       c-0.3-2-0.5-4-1.4-5.8c-1-1.9-1.8-1.9-0.5-3.8c2.3-3.5,3.3-6.7,2-10.8C217.1,62.5,216.4,62.7,216.5,63.2L216.5,63.2z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M214.2,108.8c4.5,2.9,6.8,8,5.8,13.2c0,0.3,0.2,0.6,0.5,0.5c4-1.4,7.2,1,10.2,3.4c0.4,0.3,0.9-0.2,0.5-0.5       c-2-1.7-4.2-3.5-6.9-4c-0.8-0.1-2,0.2-2.6,0c-1.2-0.4-0.6-0.3-0.6-2c-0.1-4.6-2.6-8.7-6.4-11.2       C214.2,107.9,213.8,108.5,214.2,108.8L214.2,108.8z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M261.2,32.4c1.6,1.9,4.4,0.5,6.4,0.2c2-0.3,1.2,0.3,1.3,1.9c0.1,1.1,0.5,2.1,1.2,2.9       c0.7,0.7,1.5,1.2,2.4,1.5c1,0.4,3.6,0.2,4,1c0.1,0.1-0.9,3.2-0.9,3.5c-0.2,2,0.2,3.9,1,5.7c0.2,0.4,0.9,0.3,0.7-0.2       c-1.3-3.3-1.2-6.5,0.4-9.7c0.1-0.3,0-0.6-0.3-0.6c-1.2,0-3.1,0.1-4.1-0.4c-2.9-1.3-4-3.7-3.2-6.6c0.1-0.3-0.2-0.5-0.5-0.5       c-1.9,0.5-6.4,2.3-7.9,0.5C261.4,31.5,260.9,32,261.2,32.4L261.2,32.4z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M281.1,84.2c-4.2,2.9-6.4,7.7-4.7,12.7c-0.1-0.2,1.5,3.3,1.5,2.9c-0.1,1.9-1.1,1.8-2.2,3.3       c-1.5,2-1.9,4.3-1.7,6.7c0,0.5,0.8,0.5,0.8,0c-0.4-3.9,1.2-6.8,4.6-8.7c0.2-0.1,0.2-0.4,0.1-0.6c-4.3-5.1-3.4-11.9,2-15.7       C281.8,84.6,281.5,83.9,281.1,84.2L281.1,84.2z"
													/>
												</g>
											</g>
											<g>
												<g>
													<path
														class="st1"
														d="M251.8,125.5c3.8-3,8.6-2.9,13.2-1.9c0.2,0,0.4-0.1,0.5-0.3c0.6-2.7,2.3-4.4,5-5.1       c0.5-0.1,0.3-0.8-0.2-0.7c-1.7,0.5-3.2,1.3-4.3,2.8c-1.2,1.6-0.7,2.2-3,2.2c-4.4,0.1-7.9-0.3-11.6,2.6       C250.9,125.3,251.4,125.8,251.8,125.5L251.8,125.5z"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
								<g id="character">
									<g id="chair_1_">
										<path
											class="st4"
											d="M244.1,484.6H120.6c-6.6,0-12-5.4-12-12v-34.8c0-6.6,5.4-12,12-12h123.5c6.6,0,12,5.4,12,12v34.8    C256.1,479.2,250.7,484.6,244.1,484.6z"
										/>
									</g>
									<g id="legs">
										<path
											class="st6"
											d="M85.4,393.3c0.4,2.6,0.9,6.8,1.6,12.1c2,14.8,2.1,16.6,3,20.7c2,9.4,3,14.2,6.8,19.2c1.4,1.9,4.9,6.4,10.9,9    c4,1.8,7.7,2.1,12.6,2.5c4.2,0.4,7.7,0.2,10.1,0.1c3.3,1.9,8.1,4.2,14.1,6.1c2.3,0.7,11.7,3.4,25.1,2.7c10.1-0.5,17.8-2.6,22.4-4    c26.9-8,61.1-23.1,68.6-26.4c-0.9,2.3-1.9,5.5-2.9,9.3c-0.6,2.5-1.5,6.1-2.3,12c-0.8,5.3-1.6,12.6-1.9,21.7    c5.6,2.1,13.8,4.5,23.9,5.2c11,0.7,20.1-0.9,26.2-2.5c0.8-6.2,1.9-15.2,3.3-26.1c1.3-10,2.4-20,3.6-30c1.8-14.7,2.5-19.8,0.4-27.1    c-2.7-9.4-7.5-13.2-8.5-14c-4.5-3.4-9.4-4.2-12-4.4c-8.9-0.7-14.4-0.9-25.4-0.2c-14.7,0.9-12.2,0-23.8,0.8c-8,0.6-14.3,1.4-26.4,3    c-10.6,1.4-16.2,2.3-21.2,3c-10,1.4-19.1,2.3-42.9,3.9C134,390.9,112,392.2,85.4,393.3z"
										/>
										<g>
											<g>
												<path
													class="st1"
													d="M119.5,441.9c10.6,24,39.7,26.7,62.4,22.4c17.7-3.3,34.5-10,51-16.9c16.7-7,33.3-14.1,50-21.2      c0.4-0.2,0.1-0.8-0.4-0.6c-15.5,6.6-31,13.2-46.5,19.7c-15.4,6.5-30.9,12.9-47.1,16.8c-24,5.8-57,6-68.8-20.5      C120,441.1,119.3,441.5,119.5,441.9L119.5,441.9z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M192.6,386.6c32.3-5.8,65-8.2,97.8-7.1c0.5,0,0.5-0.7,0-0.8c-32.9-1.1-65.7,1.3-98,7.1      C191.9,386,192.1,386.7,192.6,386.6L192.6,386.6z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M86.4,397.5c0,8.8,0.9,17.6,2.7,26.3c1.5,7.3,3.3,15.2,7.3,21.6c7.3,11.7,21.6,12.2,34,11.9      c0.5,0,0.5-0.8,0-0.8c-13.4,0.3-28.1-0.5-34.8-14.2c-6.6-13.4-8.4-30.1-8.4-44.8C87.2,397,86.4,397,86.4,397.5L86.4,397.5z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M302.2,384c7.6,5.1,9,14,9,22.5c0,8.3-0.7,16.6-1.9,24.9c-0.1,0.5,0.7,0.7,0.7,0.2      c1.4-9.9,2.6-20.2,1.7-30.2c-0.6-7.1-3.1-13.8-9.2-17.9C302.2,383.1,301.8,383.7,302.2,384L302.2,384z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M260.3,435.1c-5,13.8-6.3,28.4-7.1,43c0,0.5,0.7,0.5,0.8,0c0.8-14.5,2.1-29.1,7.1-42.8      C261.2,434.9,260.4,434.7,260.3,435.1L260.3,435.1z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M309.4,431c-2,16.6-4.1,33.2-6.1,49.9c-0.1,0.5,0.7,0.5,0.8,0c2-16.6,4.1-33.2,6.1-49.9      C310.2,430.5,309.4,430.5,309.4,431L309.4,431z"
												/>
											</g>
										</g>
									</g>
									<g id="torso">
										<path
											class="st6"
											d="M77.5,189.4c-3.1,3.9-6.1,7.8-9.2,11.7c-1.8,5.3-3.8,12.4-5.5,20.9c-1.3,6.4-3.1,17.2-3.5,32.3    c-0.7,24.8,2.9,44.4,6.6,64.7c3.5,19.3,7.6,35,10.6,46.1c2.8,10.5,5.3,19.2,7.3,25.7c1.4,1.5,2.8,3.1,4.1,4.6    c2.6,1,6.2,2.3,10.7,3.5c5.8,1.5,11.9,2.7,23.3,3.5c8.6,0.7,17.8,1.4,30.4,0.9c10.7-0.4,24.2-1.7,39.6-5.1    c0.2-3.3,0.5-8.4,0.5-14.6c0-8.2-0.4-12.9-0.9-22.5c0,0-0.4-9.4-0.6-20.8c-0.2-13.3,0.4-20.6,1-33.8c0.5-12.3,1.2-29.8,0.7-50.8    c-0.5-18.4-1.6-27.8-4.9-38.4c-2.3-7.5-5.1-13.5-7.2-17.6c-5.6-1.9-12.8-4.2-21.3-6.2c-9.8-2.3-23-4.8-38.7-5.7    C104.2,186.8,89.7,187.7,77.5,189.4z"
										/>
										<g>
											<g>
												<path
													class="st1"
													d="M77.5,189.8c34.6-4.5,69.8-1,102.8,10.4c0.5,0.2,0.7-0.6,0.2-0.7c-33.1-11.4-68.3-14.9-103-10.4      C77,189.1,77,189.8,77.5,189.8L77.5,189.8z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M183.6,204.3c16.8,52.2,3.9,107.3,7.8,160.8c0,0.5,0.8,0.5,0.8,0c-3.9-53.6,9-108.7-7.8-161      C184.2,203.6,183.5,203.8,183.6,204.3L183.6,204.3z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M68.7,198.6c-16.6,47.4-9.8,98.2,2.8,145.7c0.1,0.5,0.8,0.3,0.7-0.2c-12.6-47.3-19.4-98-2.8-145.3      C69.6,198.3,68.9,198.1,68.7,198.6L68.7,198.6z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M76.1,365.2c1.2,6,2.7,11.9,4.4,17.7c1.2,4.1,2.3,8.9,5.8,11.8c3.5,3,8.4,3.8,12.7,4.7      c5.9,1.2,11.8,2.2,17.8,2.9c25.1,3.1,50.5,1.7,75.2-3.6c0.2,0,0.3-0.2,0.3-0.4c0.8-7.9,0.7-15.8-0.3-23.7      c-0.1-0.5-0.8-0.5-0.8,0c0.8,6,1.1,12.1,0.8,18.2c-0.1,2.2,0.2,4.1-2,5.5c-1.2,0.7-3.3,0.7-4.6,0.9c-3.1,0.6-6.2,1.1-9.3,1.6      c-13.4,1.9-26.9,2.7-40.4,2.2c-13.1-0.5-26.3-2-39.2-4.9c-2.9-0.7-6-1.4-8.6-3.1c-3.9-2.6-5.1-7.2-6.4-11.4      c-1.9-6.1-3.4-12.3-4.7-18.6C76.7,364.5,76,364.7,76.1,365.2L76.1,365.2z"
												/>
											</g>
										</g>
									</g>
									<g id="hand_right">
										<path
											class="st6"
											d="M303.5,304.7c0.6-1.5,0.9-1.1,3.2-5.1c1.6-2.8,2.3-3.9,3.7-6.2c1.2-2,1.8-2.8,2.9-3.1c1.4-0.3,2.7,0.5,3.3,1    c0.7-0.6,1.7-1.5,3-2.5c2.1-1.6,4.3-3.3,7.3-4.4c2.2-0.8,3.5-1.3,5.3-1.2c3.3,0.3,5.9,2.4,8.6,4.6c0.9,0.7,1.6,1.4,2.1,1.9    c-0.7,0.4-1.7,1-3,1.8c-3.7,2.3-5.6,3.5-7.3,5c-1.1,1-1.1,1.3-4.5,6.4c-3.4,5.1-5.1,7.7-6.7,9.2c-2.6,2.4-5,3.7-7.4,4.9    c-3.6,1.9-5.4,2.8-6.8,2.4C303.3,318.2,301.2,310,303.5,304.7z"
										/>
										<path
											class="st6"
											d="M180.4,199.8c3.4,4.6,8,11.1,12.6,19.5c4.3,7.7,8.2,16.5,14.3,34c4.2,12.2,9.3,28.6,13.9,48.8    c11.1,0.3,22.1,0.7,33.2,1c16.2,0.5,32.5,1.1,48.7,1.7c1.3,0.6,3,1.7,4.3,3.5c4.3,5.8,0.8,13.6,0.6,14c-2.5,0.8-6.4,1.9-11,3.3    c-23,7.1-24.5,8.2-35.7,11.5c-13.8,4.1-27,6.8-53.3,12.2c-3.1,0.6-5.6,1.1-7.3,1.5c-1.3-2.1-3.2-5.2-5.5-8.9    c-12-19.3-13.5-21-17.1-27.1c-8.2-13.9-13.1-25.6-15.8-32.2c-5.7-14.1-8.6-21.1-9.4-27.8C150,231.3,169.3,210.1,180.4,199.8z"
										/>
										<g>
											<g>
												<path
													class="st1"
													d="M181.3,200.9c20.9,29.6,30.2,65.1,38.9,99.8c0.1,0.5,0.8,0.3,0.7-0.2c-8.8-34.8-18-70.3-39-100      C181.7,200.1,181,200.5,181.3,200.9L181.3,200.9z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M222.8,302.8c26.4,0.6,52.8,1.2,79.2,1.8c0.5,0,0.5-0.7,0-0.8c-26.4-0.6-52.8-1.2-79.2-1.8      C222.3,302,222.3,302.8,222.8,302.8L222.8,302.8z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M303,305.1c6.2,2.2,6,9.4,5.2,14.7c-0.1,0.5,0.7,0.7,0.7,0.2c0.8-5.8,0.8-13.3-5.7-15.6      C302.7,304.2,302.5,305,303,305.1L303,305.1z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M155.9,267.2c10.4,28.5,24.7,55.4,42.6,80c0.3,0.4,0.9,0,0.6-0.4c-17.9-24.5-32.2-51.3-42.5-79.8      C156.4,266.5,155.7,266.7,155.9,267.2L155.9,267.2z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M208,349.7c33.3-5.8,65.9-14.8,97.5-26.9c0.4-0.2,0.3-0.9-0.2-0.7c-31.6,12-64.2,21-97.5,26.9      C207.4,349,207.6,349.7,208,349.7L208,349.7z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M304.3,304.1c1.4-2.4,2.8-4.7,4.2-7.1c1.1-1.9,4.1-8.9,7.4-6c0.4,0.3,0.9-0.2,0.5-0.5      c-2-1.7-4.2-0.5-5.6,1.3c-2.8,3.7-4.9,8-7.2,11.9C303.4,304.2,304.1,304.5,304.3,304.1L304.3,304.1z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M310.3,318.6c6.1-1.5,11.2-6.2,15-11c2.5-3.2,4.2-7.2,6.9-10.2c3.2-3.5,8.1-5.7,12.2-8.2      c0.4-0.2,0-0.9-0.4-0.6c-5.7,3.4-11.3,6.2-15,12c-4.5,7.2-10.2,15.2-19,17.3C309.6,318,309.8,318.8,310.3,318.6L310.3,318.6z"
												/>
											</g>
										</g>
										<g>
											<path class="st7" d="M316,291.9c4-4.9,9.9-8.1,16.2-8.7" />
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M321.2,291.7c4.1-3.3,8.8-5.3,13.9-6c0.5-0.1,0.3-0.8-0.2-0.7c-5.3,0.7-10.1,2.8-14.3,6.2      C320.3,291.5,320.8,292,321.2,291.7L321.2,291.7z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M326.3,291.8c3.8-2.4,7.9-4.1,12.2-5c0.5-0.1,0.3-0.8-0.2-0.7c-4.4,1-8.6,2.7-12.4,5.1      C325.6,291.4,325.9,292.1,326.3,291.8L326.3,291.8z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													class="st1"
													d="M329.7,293.5c3.5-2.1,7.2-3.9,11.1-5.3c0.5-0.2,0.3-0.9-0.2-0.7c-4,1.4-7.7,3.2-11.3,5.3      C329,293.1,329.3,293.7,329.7,293.5L329.7,293.5z"
												/>
											</g>
										</g>
									</g>
									<g id="head">
										<path
											class="st0"
											d="M134.8,156.7c1.1,1.3,2.7,3.5,3.8,6.3c0.7,1.8,2.9,7.5,1,14.1c-0.5,1.6-1.3,4.3-3.7,6.6    c-0.5,0.5-1.8,1.7-5,3.1c-4.3,1.9-8.5,3.6-11.4,2.3c-4.7-2.2-5.6-11.9-3.1-18.7C120.6,159.6,133.5,156.9,134.8,156.7z"
										/>
										<path
											class="st5"
											d="M78.7,137.8c-0.5,0.7-1.4,2.2-1.6,4.2c-0.3,2.6,0.9,3.9,1.6,6.7c0.7,2.8,0.5,5.7,0,7.5c-1.2,4-4.6,4.6-10.1,9    c-2.2,1.7-7.6,6-11.2,12.8c-0.8,1.6-3.5,6.8-3.9,14.2c-0.1,2-0.3,8.4,2.7,15.8c1.2,3.1,5.4,12.8,16.1,18.6    c7.3,3.9,14.4,4.2,18.7,3.9c11.1-0.8,18.4-6.6,21.1-8.9c6.3-5.2,9.2-10.9,10.8-14.1c4-8,4.8-15.1,5.1-19.1c0.8-9-0.5-16.6-2-21.9    c0.5-1.1,1.4-2.7,2.9-4.5c3-3.5,5.1-3.5,8-7.1c1.2-1.5,2.6-3.2,3-5.8c0.1-0.6,0.7-4.5-1.6-7.2c-3.2-3.6-9.5-2.2-11.8-1.6    c-4.3,1-7.3,3.3-8.8,4.6c-0.8-2.1-2.6-6.4-6.9-9.8c-7-5.6-15.2-4.6-18.1-4.2C90.9,131.1,82.3,132.2,78.7,137.8z"
										/>
										<g>
											<path
												class="st7"
												d="M134.8,156.7c2.8,2.9,4.3,6.8,5,10.7c0.8,4.4,0.7,9.1-1.4,13.1c-2,4-6.2,7-10.7,6.8"
											/>
										</g>
										<g>
											<path
												class="st7"
												d="M116.3,143.6c-1.1-4.9-5.1-8.9-9.7-11c-4.6-2-9.9-2.3-14.9-1.6c-3.9,0.5-7.9,1.7-10.9,4.3     c-3,2.6-4.8,6.8-3.5,10.6c0.5,1.6,1.6,3.1,2,4.7c0.9,3.3-0.9,6.8-3.3,9.2c-2.4,2.4-5.5,4-8.3,6c-8.4,6.1-13.8,16.1-14.4,26.5     c-0.6,10.4,3.5,20.8,10.7,28.2c3.8,3.8,8.4,6.9,13.5,8.6c12.8,4.3,27.6-0.3,37.1-10c9.4-9.7,13.7-23.6,13.4-37.1     s-5-26.6-11.5-38.5"
											/>
										</g>
										<g>
											<path
												class="st7"
												d="M117.6,145.1c1.5-2.1,4-3.3,6.5-4.2c2.8-0.9,5.8-1.6,8.7-1c2.9,0.5,5.7,2.4,6.7,5.2c1.2,3.3-0.4,7.1-2.8,9.8     s-5.4,4.6-8,7.1c-1.3,1.3-2.5,2.7-2.9,4.5"
											/>
										</g>
									</g>
									<g id="chair">
										<path
											class="st4"
											d="M163.4,489.6L27.9,474.6C12,472.9,0,459.4,0,443.4V231.3c0-18.7,16.2-33.2,34.8-31.2l135.4,14.9    c15.9,1.8,27.9,15.2,27.9,31.2v212.1C198.2,477.1,182,491.6,163.4,489.6z"
										/>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</section>
				<About />
				<Features />
				<Services />
				<Contact />
			</main>
		</Layout>
	);
};

export default IndexPage;