import React from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_uwhyiul', 'template_kfpwz6m', e.target, 'user_8uD0YibNtgbGPui9mYakN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    

    return (
        <div>
            <h3> Contact us</h3>
            <hr />
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" name="message" cols="10" rows="8" placeholder="Your message" name="message" /> 
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit"  className="btn btn-info" value="Send Message" />
                    </div>
                </div>
            </form>
            </div>
    )
}
