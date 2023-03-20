import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import resumeDoc from "../assets/docs/resumeforportfolio.docx";
import colorSharp from "../assets/img/color-sharp.png"

export const Resume = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="resume" id="resume">
        <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                    <div className="skill-bx wow zoomIn">
                        <h1>Resume</h1>
                        <h2 >Education</h2>
                        <p classname="">Computer Programming and Analysis <br></br> September 2020-Current <br></br> George Brown College, Toronto, ON<br></br></p>
                        <h2 >Links to Resume and Cover Page</h2>
                        <a href={require("../assets/docs/resumeforportfolio.docx")} download="Joseph's Resume">Resume</a>
                        <br></br>
                        <a href={require("../assets/docs/coverletterforportfolio.docx")} download="Joseph's Cover Letter">Cover Letter</a>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
