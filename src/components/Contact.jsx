import React, { useState } from "react";

const Contact = () => {
    return (
        <>
            <div className="_contact" id="contacts">
                <h1>Contact Me <span className="call_emoji">📞</span> </h1>
                <form className="contact_input" action="https://formspree.io/f/mleqbpvk"
                    method="POST" data-aos="fade-left">
                    <input type="name" name="name" placeholder="Enter Your Name " className="_iname" required  ></input>
                    <input type="email" name="email" placeholder="Enter Your Email " className="_iname" required ></input>
                    <input type="number" name="number" placeholder="Enter Your Phone Number " className="_iname" required></input>
                    <input type="message" name="message" placeholder="Enter Your Message" className="_imsg" required></input>
                    <input type="submit" value={"Submit"} className="_submit" required></input>
                </form>
            </div>
        </>
    );
}
export default Contact;