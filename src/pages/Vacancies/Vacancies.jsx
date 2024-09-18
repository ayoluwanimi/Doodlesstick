import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Vacancies.css"

export function Vacancies() {

	const jobs = [
		{
			title: "Health Care Assistant",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
		{
			title: "Support Workers",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
		{
			title: "Care Manager",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
		{
			title: "Care Team Leader",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
		{
			title: "Doctors",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
		{
			title: "Nurses",
			applyLink: "path/to/your/form-or-requirements.pdf",
		},
	];

	return (
		<>
			<Navbar />
			<h1 className="job-listing-title">Job Listing</h1>
			<section className="job-listing">
				<div id="job-container" className="job-container">
					{jobs.map((e) => {
						return (<>
							<div className="job-box">
								<div class="job-title">
									<h2>{e.title}</h2>
								</div>
								<div class="apply-button">
									<a href="#">Apply Now</a>
								</div>
							</div>
						</>)
					})}
				</div>
			</section>
			<Footer />
		</>
	)
}
