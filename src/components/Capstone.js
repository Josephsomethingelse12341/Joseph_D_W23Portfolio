import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Capstone = () => {
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
    <section className="capstone" id="capstone">
        <div className="container">
            <div className="row">
                <div className="col-12 py-5">
                    <div className="skill-bx wow zoomIn">
                        <h1>Capstone</h1>
                        <h2 >Project Summary</h2>
                        <p>This system essentially allows the user to create and edit quizzes while being able to communicate with others through our forum system. This application will provide both education professionals and students to provide academic content aside from ones being provided by academic institutes and allow them to pursue learning further into contents they are interested in. The forum feature will allow the users to provide feedbacks, ideas, communication, and many more that the forum system allows.<br></br></p>
                        <h2 >Project Vision</h2>
                        <p>The main vision for this project is to provide users to be able to communicate with other users using Forum system that we are currently building alongside the quiz function that any registered users can create.<br></br></p>
                        <h2 >Project/Business Requirements</h2>
                        <p>Allowing the user to share their knowledge in the form of quizzes will allow other users to learn materials that they may not be able to find elsewhere. On top of this, the user will be allowed to share their ideas, feedbacks, and much more through our Forum feature. Instead of having elaborate system that allows the user to chat, comment, or compete in the quizzes, the user can simply work out with the quizzes on their own pace, at their own leisure. If they wish to, they can use our separate Forum feature to communicate with other users on the platform.<br></br></p>
                        <h2 >Project Plan</h2>
                        <p>QuizHoot is a project aimed at creating an online quiz and forum system to help students and other users across the world by sharing information and practicing quizzes. The project will begin on January 9th, 2023, and end on March 31st, 2023. The system will provide community-driven and professionally built quizzes to users, along with a forum-based communication platform. The project also includes a cutting-edge user interface for ease of access. The plan includes assumptions, risk management, communication strategies, and a task listing using the Work Breakdown Structure (WBS). The WBS comprises five tasks, including project initialization and configuration, UI design, research, forum page development, and quiz page development. Monthly progress reports and quarterly reviews will be produced, and several meetings will be held throughout the project to ensure effective communication between stakeholders.<br></br></p>
                        <h2 >Requirements Analysis and Design </h2>
                        <p>Current requirements are: Firebase, ReactJS, PostCSS, and Tailwind.<br></br></p>
                        <h2 >Wireframes/Mock ups</h2>
                        <p>Link to my Figma: <a href="https://www.figma.com/proto/piMkKDt556938DQ8LtsDKI/Untitled?node-id=1-10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A1410&show-proto-sidebar=1">Figma</a><br></br></p>
                        <h2 >Status Reports</h2>
                        <p>The project has basic components completed, will soon be done with all the necessary componenets such as Quiz, Forum, etc.<br></br></p>
                        <h2 >System Implementation</h2>
                        <p>Currently, the system is still in prototype phase so there is no system implementation done.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
