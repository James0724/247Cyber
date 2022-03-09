import React from "react";

function contact() {
	return (
		<section id="contact-page">
			<div class="contact-grid">
				<div class="col-end">
					<div class="contact-wrap">
						<h3 class="contact-title">Send us a message</h3>
						{/* <div id="form-message-warning" class="mb-4"></div>
						<div id="form-message-success" class="mb-4">
							Your message was sent, thank you!
						</div> */}
						<form
							method="POST"
							id="contactForm"
							name="contactForm"
							class="contactForm"
							novalidate="novalidate"
						>
							<div class="contact-input-row">
								<div class="contact-item">
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											name="name"
											id="name"
											placeholder="Name"
										/>
									</div>
								</div>
								<div class="contact-item">
									<div class="form-group">
										<input
											type="email"
											class="form-control"
											name="email"
											id="email"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="contact-item">
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											name="subject"
											id="subject"
											placeholder="Subject"
										/>
									</div>
								</div>
								<div class="contact-item">
									<div class="form-group">
										<textarea
											name="message"
											class="form-control"
											id="message"
											cols="30"
											rows="6"
											placeholder="Message"
										></textarea>
									</div>
								</div>
								<div class="contact-item">
									<div class="form-group">
										<input
											type="submit"
											value="Send Message"
											class=" btn btn-primary"
										/>
										<div class="submitting"></div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-start">
					<div class="info-wrap">
						<h3>Contact us</h3>
						<p class="mb-4">
							We're open for any suggestion or just to have a chat
						</p>
						<div class="dbox">
							<div class="icon">
								<span class="fa fa-map-marker"></span>
							</div>
							<div class="info-text">
								<p>
									<span>Address:</span> Kasarani, Nairobi Kenya
								</p>
							</div>
						</div>
						<div class="dbox">
							<div class="icon ">
								<span class="fa fa-phone"></span>
							</div>
							<div class="info-text">
								<p>
									<span>Phone:</span>{" "}
									<a href="tel://1234567920">+254 786 230 007</a>
								</p>
								<p>
									<span>Phone:</span>{" "}
									<a href="tel://1234567920">+254 726 140 825</a>
								</p>
							</div>
						</div>
						<div class="dbox w-100 d-flex align-items-center">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-paper-plane"></span>
							</div>
							<div class="text pl-3">
								<p>
									<span>Email:</span>{" "}
									<a href="mailto:info@yoursite.com">info@yoursite.com</a>
								</p>
							</div>
						</div>
						<div class="dbox w-100 d-flex align-items-center">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-globe"></span>
							</div>
							<div class="text pl-3">
								<p>
									<span>Website</span> <a href="#">yoursite.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default contact;
