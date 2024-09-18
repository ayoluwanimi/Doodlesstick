import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Contact.css"
import { Loader } from "google-maps";

export function Contact() {

	const load = async () => {

		const options = {/* todo */ };
		const loader = new Loader('AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg', options);

		const google = await loader.load();
		const location = { lat: 52.24048, lng: -0.902656 };
		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: 15,
			center: location,
		});

		const marker = new google.maps.Marker({
			position: location,
			map: map,
		});

		const streetViewService = new google.maps.StreetViewService();
		const panorama = new google.maps.StreetViewPanorama(
			document.getElementById("map"),
			{
				position: location,
				pov: {
					heading: 34,
					pitch: 10,
				},
			}
		);

		map.setStreetView(panorama);
	}

	useEffect(() => {
		load()
	}, [])

	return (
		<>
			<Navbar />
			<h1 className="contact-header">Contact Us</h1>
			<section className="contact-us">
				<div className="contact-container">
					<div className="left-section">
						<div id="map"></div>
					</div>

					<div className="contact-details">
						<div className="location-info">
							<h3 style={{ textAlign: "center" }}>Our Location</h3>
							<p><strong>Address:</strong> Suite 8, 20-30A, Abington street, Northampton. NN1 2AJ</p>
							<p><strong>Phone:</strong> <a href="tel:+1234567890">01604216476</a>, <a
								href="tel:+1234567890">07737493075</a></p>
							<p><strong>Email:</strong> <a href="mailto:info@doodlesstick.com">info@doodlesstick.com</a></p>
							<p style={{ fontStyle: "italic", color: "rgb(15,92,15)" }}>Contact us for the best health care advice.
							</p>
						</div>

						<div className="feedback-form">
							<h3 style={{ textAlign: "center" }}>Leave Us a Message</h3>
							<form action="#" method="POST">
								<div className="form-group">
									<label for="first-name">First Name:</label>
									<input type="text" id="first-name" name="first_name" required />
									<label for="last-name">Last Name:</label>
									<input type="text" id="last-name" name="last_name" required />
								</div>
								<div className="form-group">
									<label for="email">Email:</label>
									<input type="email" id="email" name="email" required />
								</div>
								<div className="form-group">
									<label for="message">Your Message:</label>
									<textarea id="message" name="message" rows="5" required></textarea>
								</div>
								<button type="submit">Send Message</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
