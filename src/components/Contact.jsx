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

                        <button className="button" type="submit">Send</button>
                    </form>

                    
                    </div>
                    
                </div>
                
            </div>
                <p id="copyright">© {new Date().getFullYear()} Tamerlan Mustafayev</p>
        </>
    )
}

export default Contact