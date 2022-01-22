import emailjs from '@emailjs/browser';
import React from 'react';
import { faAppStore, faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
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
            <h1 class="text-3xl mt-16 mb-10 p-4 text-white">Contact Us</h1>
                <div class="grid grid-cols-2 gap-4">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 p-4">
                            <div className="form-name flex justify-between">
                                <div className="input-form">
                                    <label className="block mb-2 text-white">First Name</label>
                                    <input type="text" className="form-control w-72 p-2 rounded" placeholder="Write your first name" name="first_name" required/>
                                </div>
                                <div className="input-form">
                                    <label className="block mb-2 text-white">Last Name</label>
                                    <input type="text" className="form-control w-72 p-2 rounded" placeholder="Write your last name" name="last_name" required/>
                                </div>
                            </div>

                            <div className="form-name flex justify-between">
                                <div className="input-form">
                                    <label className="block mt-3 mb-2 text-white">Email</label>
                                    <input type="email" className="form-control w-72 p-2 rounded" placeholder="Write your email address" name="email" required/>
                                </div>
                                <div className="input-form">
                                    <label className="block mt-3 mb-2 text-white">Subject</label>
                                    <input type="subject" className="form-control w-72 p-2 rounded" placeholder="Write your email address" name="subject" required/>
                                </div>
                            </div>

                            <div className="text-area">
                                <label className="block mt-3 mb-2 text-white">Message</label>
                                <textarea className="form-control rounded" id="" cols="73" rows="7" placeholder="Write your message here" name="Message" required></textarea>
                            </div>

                            <div className="mt-4">
                                <input type="submit" className="submit-button bg-yellow-600 text-white px-4 py-2 rounded-full cursor-pointer" value="Send Message"/>
                            </div>
                        </div>
                    </form>

                    <div className="right-content text-white px-40">
                        <h3 className="text-2xl my-5 pb-4">GET IN TOUCH</h3>
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