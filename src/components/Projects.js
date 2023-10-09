import funtipolo from "../images/funtipolo.jpg"
import calcu from "../images/calcu.gif"
import rps from "../images/rps1.gif"
import animerch from "../images/animerch.jpg"

const Projects = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);
    return ( 
        <>
        <div className="container my-5 py-5" id="projects">
            <div className="col-3">
                <h1 className="my-5">Projects:</h1>
            </div>
            <div className="row g-4">
            <div class="col-12 reveal fade-left">
                <div class="card h-100 cardproj bg-dark text-white">
                    <img src={calcu} alt="" />
                    <div class="card-body my-auto">
                        <h4 class="card-title">Conversion Calculator</h4>
                        <div class="card-text">
                        A conversion calculator website, a handy tool that helps users effortlessly convert speed, length, temperature, mass and time, making complex calculations a breeze.
                        </div>
                        <a href="https://elemelooon.github.io/ConversionCalculator_DeAsis/" class="btn btn-outline-light m-3">View Site</a>
                        <a href="https://github.com/Elemelooon/ConversionCalculator_DeAsis" class="btn btn-outline-light m-3">Github</a>
                    </div>
                </div>
            </div>
            <div class="col-12 reveal fade-right">
                <div class="card h-100 cardproj bg-dark text-white">
                    <div class="card-body my-auto">
                        <h4 class="card-title">Funtipolo</h4>
                        <div class="card-text">
                        A travel guide website that not just provide basic knowledge about the place but gives various information such as festivals to attend, delicacies to try and, places to visit.
                        </div>
                        <a href="https://elemelooon.github.io/Funtipolo_DEASIS/" class="btn btn-outline-light m-3">View Site</a>
                        <a href="https://github.com/Elemelooon/Funtipolo_DEASIS" class="btn btn-outline-light m-3">Github</a>
                    </div>
                    <img src={funtipolo} alt="" />
                </div>
            </div>
            <div class="col-12 reveal fade-left">
                <div class="card h-100 cardproj bg-dark text-white">
                    <img src={animerch} alt="" />
                    <div class="card-body my-auto">
                        <h4 class="card-title">Animerch!</h4>
                        <div class="card-text">
                        A platform that is dedicated to the passionate community of anime enthusiasts. If you're someone who finds joy in the vibrant characters, intricate storylines, and captivating worlds of anime, Animerch is tailor-made for you.
                        </div>
                        <a href="https://elemelooon.github.io/ANIMERCH/" class="btn btn-outline-light m-3">View Site</a>
                        <a href="https://github.com/Elemelooon/ANIMERCH" class="btn btn-outline-light m-3">Github</a>
                    </div>
                </div>
            </div>
            <div class="col-12 reveal fade-right">
                <div class="card h-100 cardproj bg-dark text-white">
                    <div class="card-body my-auto">
                        <h4 class="card-title">Rock, Paper, Scissors Game</h4>
                        <div class="card-text">
                        A rock-paper-scissors website that offers a fun and easy way to play the classic hand game online against an AI opponent, providing entertainment and quick decision-making challenges.
                        </div>
                        <a href="https://elemelooon.github.io/RockPaperScissors_DeAsis/" class="btn btn-outline-light m-3">View Site</a>
                        <a href="https://github.com/Elemelooon/RockPaperScissors_DeAsis" class="btn btn-outline-light m-3">Github</a>
                    </div>
                    <img src={rps} alt="" />
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Projects;