import emailjs from '@emailjs/browser';
import { faAppStore, faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slide } from 'react-reveal';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_eog97l5', 'template_zli7n2d', e.target, 'user_MeroBc5u7VmNBItDAfmXU' )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <section class="p-10">
            <div class="max-w-screen-xl mx-auto rounded-3xl transform duration-300 bg-sky-900 hover:bg-sky-800">
                <h1 class="text-4xl pt-20 text-gray-200 text-center">CONTACT US</h1>
                <p class="text-center text-gray-400 my-2" >Do you have any question? Please feel free to ask your question or opinion under this form.</p>
                <div class="grid md:grid-cols-2 mt-10 justify-between gap-4 md:p-5 lg:p-5">

                    {/* Contact Form Start */}
                    <Slide left duration={1000}>
                        <form onSubmit={sendEmail} >
                            <div className="p-2 mx-auto">
                                <div className="input-form">
                                    <label className="text-gray-200">Full Name</label>
                                    <input type="text" className="form-control w-full h-12 lg:w-full p-3" placeholder="Full Name" name="first_name" required/>
                                </div>

                                <div className="input-form py-5">
                                    <label className="mb-2 text-gray-200">Email</label>
                                    <input type="email" className="form-control h-12 w-full  lg:w-full p-3 " placeholder="Email Address" name="email" required/>
                                </div>

                                <div className="input-form">
                                    <label className="mb-2 text-gray-200">Subject</label>
                                    <input type="subject" className="form-control w-full h-12 lg:w-full p-3 " placeholder="Subject" name="subject" required/>
                                </div>

                                <div className="text-area mt-5">
                                    <label className="text-gray-200 block">Message</label>
                                    <textarea className="form-control w-full p-3" id="" rows="7" placeholder="Your Message" name="Message" required></textarea>
                                </div>

                                <div className="mt-4 text-center">
                                    <input type="submit" class="submit-button transform duration-300 text-lg bg-yellow-500 hover:bg-yellow-700 hover:text-white hover:translate-x-4 text-gray-200 px-8 py-3 cursor-pointer" value="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </Slide>

                    {/* Right Content in form */}
                    <Slide right duration={1000}>
                        <div className="mx-auto ">
                            <h3 className="text-2xl md:text-2xl xl:text-3xl my-5 pb-4 text-gray-200 text-center">GET IN TOUCH</h3>
                            <div className="address mt-10 text-gray-300">
                                <FontAwesomeIcon class="w-8 pb-2 text-yellow-600 cursor-pointer duration-300" icon={faPeriscope}></FontAwesomeIcon>
                                <h4>Address</h4>
                                <p>Baridhara, Dhaka Bangladesh</p>
                            </div>
                            <div className="email my-10 text-gray-300">
                                <FontAwesomeIcon class="w-8 pb-2 text-yellow-600 cursor-pointer duration-300" icon={faAppStore}></FontAwesomeIcon>
                                <h4>Email</h4>
                                <p>info@attrabit.net</p>
                            </div>
                            <div className="phone my-4 text-gray-300">
                                <FontAwesomeIcon class="w-7 pb-2 text-yellow-600 cursor-pointer duration-300" icon={faAddressBook}></FontAwesomeIcon>
                                <h4>Phone</h4>
                                <p>+8801671060576</p>
                            </div>
                        </div>
                    </Slide>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;