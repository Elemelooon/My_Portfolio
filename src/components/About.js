import CSS from "../images/css.svg";
import HTML from "../images/html.svg";
import JS from "../images/javascript.svg";
import REACT from "../images/react.svg";

const About = () => {
    return ( 
        <>
        <div className="container text-center py-5 my-5" id="about">
            <h1>About Me</h1>
            <p>👋 Hi there! I'm Leii!, a senior high school graduate with a deep passion for programming and a love for gaming in my spare time. 🎮</p>
            <p>🖥️ I'm on an exciting journey to explore the world of coding and software development. As a newbie programmer, I'm enthusiastic about learning and applying my skills to create innovative solutions.</p>
            <p>I'm constantly expanding my knowledge and keeping up with the latest trends in the tech industry. I believe that programming is not just a skill but a way to bring ideas to life and make a positive impact on the world. 💡</p>
            <p>🌟 Join me on this exciting journey as I grow and evolve in the world of programming. Let's connect, collaborate, and create together!</p>
        </div>
        <div className="container my-5 py-5">
            <h1>Skills</h1>
            (as of the moment)
            <div className="row">
                <div className="col-md-3 col-6">
                <img src={CSS} alt="" />
                </div>
                <div className="col-md-3 col-6">
                <img src={HTML} alt="" />
                </div>
                <div className="col-md-3 col-6">
                <img src={JS} alt="" />
                </div>
                <div className="col-md-3 col-6">
                <img src={REACT} alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;