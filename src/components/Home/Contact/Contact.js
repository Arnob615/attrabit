import emailjs from '@emailjs/browser';
import { faAppStore, faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
        <section>
            <div class="max-w-screen-xl mx-auto bg-gray-600">
            <h1 class="text-4xl pt-16 mb-10 p-4 text-white lg:text-center">CONTACT US</h1>
                <div class="grid lg:grid-cols-2 justify-between gap-4 md:p-5 lg:p-5">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 p-2">
                            <div className="input-form">
                                <label className="text-white pr-20">Full Name</label>
                                <input type="text" className="form-control w-full lg:w-full p-2 rounded" placeholder="Write Your Full Name" name="first_name" required/>
                            </div>

                            <div className="input-form py-5">
                                <label className="pr-28 mb-2 text-white">Email</label>
                                <input type="email" className="form-control  w-full  lg:w-full p-2 rounded" placeholder="Write Your Email Address" name="email" required/>
                            </div>

                            <div className="input-form">
                                <label className="pr-24 mb-2 text-white">Subject</label>
                                <input type="subject" className="form-control  w-full lg:w-full p-2 rounded" placeholder="What's Your Subject" name="subject" required/>
                            </div>

                            <div className="text-area mt-5">
                                <label className="text-white block">Message</label>
                                <textarea className="form-control rounded w-96 lg:w-full" id="" rows="7" placeholder="Write Your Message Details..." name="Message" required></textarea>
                            </div>

                            <div className="mt-4">
                                <input type="submit" class="submit-button transform duration-300 text-lg bg-yellow-500 hover:bg-yellow-700 hover:text-white hover:translate-x-4 text-gray-900 px-8 py-3 cursor-pointer" value="Send Message"/>
                            </div>
                        </div>
                    </form>

                    <div className="right-content text-white px-6 lg:px-40">
                        <h3 className="text-4xl my-5 pb-4 ">GET IN TOUCH</h3>
                        <div className="address my-4">
                        <FontAwesomeIcon class="w-8 pb-2 hover:text-red-600 cursor-pointer duration-300" icon={faPeriscope}></FontAwesomeIcon>
                            <h4>Address</h4>
                            <p>Baridhara, Dhaka Bangladesh</p>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon class="w-8 pb-2 hover:text-yellow-600 cursor-pointer duration-300" icon={faAppStore}></FontAwesomeIcon>
                            <h4>Email</h4>
                            <p>info@attrabit.net</p>
                        </div>
                        <div className="phone my-4">
                        <FontAwesomeIcon class="w-7 pb-2 hover:text-red-600 cursor-pointer duration-300" icon={faAddressBook}></FontAwesomeIcon>
                            <h4>Phone</h4>
                            <p>+8801671060576</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;