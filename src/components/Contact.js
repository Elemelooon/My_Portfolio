const Contact = () => {
    return ( 
        <>
        <div className="container my-5 py-5" id="contact">
            <div className="row justify-content-center">
                <h1 className="text-center">Get in touch 💌</h1>
                <div className="col-md-8 col-12">
                    <div className="row">
                    <div className="col-md-6 col-12">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" name="name" placeholder="Name"/>
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" className="form-control" name="email" placeholder="Email"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    </div>
                    <div class="form-floating mb-4 mt-3">
                        <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                        <label for="subject">Subject</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" id="message" name="message" placeholder="Message"></textarea>
                        <label for="message">Message</label>
                    </div>
                    <div className="text-center">
                    <button className="btn btn-outline-light m-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;