import React from "react";



function Contact() {
    const fakeContactInfo = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, State'
      };
    
    return (
        <>
            <div className="contact" id="contact">
                <div >
                    <h2>Contact</h2>
                    <div className="contact-container">
                        <form action="#" method="POST" >
                        
                            <label for="name"></label>
                            <input type="text" id="name" name="fullName" placeholder="Your Name"required />
                        

                            <label for="email"></label>
                            <input type="email" id="email" name="email" placeholder="Your Email"required />
                        

                            <label for="message"></label>
                            <textarea name="message" id="message" placeholder="Your Message"></textarea>

                        <button className="submit" type="submit">Send</button>
                    </form>

                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19875.25507020031!2d-0.016097876185758187!3d51.48740043821421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a9cea79975f3%3A0x1470a7a162e4ca6c!2zR3JlZW53aWNoLCBMb25kb24sIEJpcmzJmcWfbWnFnyBLcmFsbMSxcQ!5e0!3m2!1saz!2sus!4v1687281966820!5m2!1saz!2sus"></iframe>
                    </div>
                    </div>
                    
                </div>
                
            </div>
                <p id="copyright">© {new Date().getFullYear()} Tamerlan Mustafayev</p>
        </>
    )
}

export default Contact