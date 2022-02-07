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
            <div class="max-w-screen-xl mx-auto">
                <h1 class="text-4xl text-gray-200 text-center">CONTACT US</h1>
                <p class="text-center text-gray-400 my-2" >Do you have any question? Please feel free to ask your question or opinion under this form.</p>
                <div class="grid lg:grid-cols-2 mt-10 gap-4 md:p-5 lg:p-5 items-center bg-gray-700 rounded-3xl">

                    {/* Contact Form Start */}
                    <Slide left duration={1000}>
                        <form class="p-12" onSubmit={sendEmail} >
                            <div className="p-12 mx-auto bg-gray-800 rounded-3xl">
                                <div className="input-form">
                                    <label className="text-gray-200">Full Name</label>
                                    <input type="text" className="form-control w-full h-12 lg:w-full p-3 rounded" placeholder="Full Name" name="first_name" required/>
                                </div>

                                <div className="input-form py-5">
                                    <label className="mb-2 text-gray-200">Email</label>
                                    <input type="email" className="form-control h-12 w-full  lg:w-full p-3 rounded" placeholder="Email Address" name="email" required/>
                                </div>

                                <div className="input-form">
                                    <label className="mb-2 text-gray-200">Subject</label>
                                    <input type="subject" className="form-control w-full h-12 lg:w-full p-3 rounded" placeholder="Subject" name="subject" required/>
                                </div>

                                <div className="text-area mt-5">
                                    <label className="text-gray-200 block">Message</label>
                                    <textarea className="form-control w-full p-3 rounded" id="" rows="7" placeholder="Your Message" name="Message" required></textarea>
                                </div>

                                <div className="mt-4 text-center">
                                    <input type="submit" class="submit-button transform duration-300 text-lg bg-sky-900 hover:bg-sky-800 hover:text-white hover:translate-x-4 text-gray-200 w-full h-12 cursor-pointer rounded" value="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </Slide>

                    {/* Right Content in form */}
                    <Slide right duration={1000}>
                        <div className="mx-auto text-center ">
                            <h3 className="text-2xl md:text-2xl xl:text-3xl my-5 pb-4 text-gray-200 text-center">GET IN TOUCH</h3>
                            <div className="address mt-10 text-gray-300">
                                <FontAwesomeIcon class="w-8 pb-2 text-red-900 cursor-pointer duration-300 ml-40" icon={faPeriscope}></FontAwesomeIcon>
                                <h4>Address</h4>
                                <p>AttraBiT ICT Solution</p>
                                <p>Concord Farhan Building</p>
                                <p>Road 3, Block J, Baridhara</p>
                                <p>Dhaka 1212</p>
                                <p>Tel:  +880–192–580–8240, +880–167–106–0576</p>
                            </div>
                            <div className="email my-10 text-gray-300">
                                <FontAwesomeIcon class="w-8 pb-2 text-red-900 cursor-pointer duration-300 ml-40" icon={faAppStore}></FontAwesomeIcon>
                                <h4>Email</h4>
                                <p>info@attrabit.net</p>
                            </div>
                            <div className="phone my-4 text-gray-300">
                                <FontAwesomeIcon class="w-7 pb-2 text-red-900 cursor-pointer duration-300 ml-40" icon={faAddressBook}></FontAwesomeIcon>
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