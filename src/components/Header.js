import Icon from "../images/xiaobirb.jpg"
const Header = () => {

    return ( 
        <>
        <div className="container my-5 p-5">
            <div className="row">
                <div className="col-12 col-md-8">
                <div className="row">
                <div class="typewriter col-md-7 col-12">
                <h1>Hi! I'm Leii!</h1>
                </div>
                </div>
                <p className="h4 py-2 intro">Welcome to my Aspiring Programmer's Portfolio! I'm excited to present my journey into the world of programming and software development. As a newbie programmer, I've embarked on this incredible adventure to explore the vast realms of coding, problem-solving, and creating software solutions that can make a positive impact on our digital world.</p>
                </div>
                <div className="col-12 col-md-4">
                <img src={Icon} alt="" className="w-100 xiaobirb rounded-circle"/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Header;