import Slider from "react-slick";
import "./About.css";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import BookingImg from "../../images/bookingImg.webp";

export function About() {


  useEffect(() => {
    document.title = "Health care company that delivers wide range of support to users"
  }, [])

  return (<>
    <Navbar />
    <div className="about-header">
      <h1>About Us</h1>
    </div>

    <div className="mission-statement">
      <h2>Mission Statement</h2>
    </div>

    <Slider className="slideshow-container">

      <div className="mySlides">
        <p>Equipping a people who will provide the highest level of care they will want to receive if they
          ever need one.</p>
      </div>

      <div className="mySlides">
        <p>Developing a team of people who are passionate about what they do, enjoy what they do and gets
          rewarded for achieving best outcomes in others.</p>
      </div>

      <div className="mySlides">
        <p>Developing strategic leaders who will flourish on the roles, manage people and resources
          effectively to the best interest of the people that uses the services and business at large.</p>
      </div>

      <div className="mySlides">
        <p>Supporting the growth and development of your business and putting you ahead in the marketplace
        </p>
      </div>
    </Slider>

    <div className="about-doodlesstick">
      <div className="about-image">
        <img src={BookingImg} alt="About Doodlesstick" />
      </div>
      <div className="about-text">
        <h2>About Doodlesstick</h2>
        <p>We are a specialist healthcare company that delivers care and support to a wide variety of service
          users in their own homes or their chosen Supported living accommodation.</p>
      </div>
    </div>

    <Footer />
  </>)
}
