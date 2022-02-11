import emailjs from '@emailjs/browser';
import { faAppStore, faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Slide } from 'react-reveal';

const Contact = () => {
    const [captchaValid, setCaptchaValid] = useState(null);
    const [userValid, setUserValid] = useState(false);

    const captcha = useRef(null);

    //   This function is for Recaptcha
    const handleOnChange = (e) => {
        if(captcha.current.getValue()) {
            setCaptchaValid(true);
        } 
        e.target.reset();
    }

    // Handling email sender
    const  sendEmail = (e) => {
        e.preventDefault();

        if(captcha.current.getValue()) {
            setUserValid(true);
            setCaptchaValid(true);
        } else {
            setUserValid(false);
            setCaptchaValid(false);
        }
    
        emailjs.sendForm('service_eog97l5', 'template_zli7n2d', e.target, 'user_MeroBc5u7VmNBItDAfmXU' )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    //   
    const  refreshPage = () => {
        window.location.reload(false);
      }

    return (
        <section class="p-10">
            <div class="max-w-screen-xl mx-auto">
                <h1 class="text-4xl text-gray-200 text-center">CONTACT US</h1>
                <p class="text-center text-gray-400 my-2" >Be assured, you're in good hands with Attrabit Whatever your precise needs may be, let us see what we can offer you to further empower your organization with our IT expertise. For all things Networking, Software Development and ICT solution, you can rely on us at Attrabit.</p>

                <div class="grid lg:grid-cols-2 mt-10 gap-4 md:p-5 lg:p-10 items-center bg-gray-700 rounded-3xl">
                    {/* Contact Form Start */}
                    <Slide left duration={1000}>
                        <form class="p-12" onSubmit={sendEmail} >
                            <div className="p-12 mx-auto bg-gray-800 rounded-3xl">
                                <div className="input-form">
                                    <label className="text-gray-200">Full Name</label>
                                    <input type="text" className="form-control w-full h-12 p-3 rounded border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Full Name" name="first_name" required/>
                                </div>

                                <div className="input-form py-5">
                                    <label className="mb-2 text-gray-200">Email</label>
                                    <input type="email" className="form-control h-12 w-full  p-3 rounded border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Email" name="email" required/>
                                </div>

                                <div className="input-form">
                                    <label className="mb-2 text-gray-200">Subject</label>
                                    <input type="subject" className="form-control w-full h-12 p-3 rounded border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Subject" name="subject" required/>
                                </div>

                                <div className="text-area mt-5">
                                    <label className="text-gray-200 block">Message</label>
                                    <textarea className="form-control w-full p-3 rounded border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" id="" rows="7" placeholder="Your Message" name="Message" required></textarea>
                                </div>

                                {/* Google Recaptcha handling */}
                                <div class="pt-3">
                                    <ReCAPTCHA
                                        ref={captcha}
                                        sitekey="6Lc06G0eAAAAAG4muULavGmQ9RhHYt6hOEGI-U4R"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                {captchaValid === false && 
                                    <div>
                                        <p class="pt-3 text-red-600">Recaptcha Not Valid</p>
                                    </div>
                                }

                                <div className="mt-4 text-center">
                                    <button onClick={refreshPage} disabled={!captchaValid} type="submit" class="submit-button transform duration-300 text-lg bg-sky-900 hover:bg-sky-800 hover:text-white hover:translate-x-4 text-gray-200 w-full h-12 cursor-pointer rounded">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Slide>

                    {/* Right Content in form */}
                    <Slide right duration={1000}>
                        <div class="mx-auto text-center ">
                            <h3 class="text-2xl md:text-3xl text-sky-400 font-medium pt-5 text-center">GET IN TOUCH</h3>
                            <p class="text-gray-300 text-center mx-auto my-5">Facing a problem? Well, we’re waiting here with the solution!</p>
                            
                            {/* Address and Phone part */}
                            <div class="md:flex justify-evenly gap-6">
                                {/* Address part */}
                                <div class="mt-10 md:flex md:gap-4 items-center text-gray-300">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-sky-700 p-1 rounded mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h4 class="text-sky-400 text-lg font-medium mt-1 md:my-0">Address</h4>
                                        <p>Concord Farhan Building</p>
                                        <p>Road 3, Block J, Baridhara</p>
                                        <p>Dhaka 1212</p>
                                        <p>+880–192–580–8240</p>
                                    </div>
                                </div>

                                {/* Phone part */}
                                <div class="my-10 md:flex md:gap-4 items-center justify-center text-gray-300">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-sky-700 p-1 rounded mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h4 class="text-sky-400 text-lg font-medium mt-1 md:my-0">Phone</h4>
                                        <p>+8801671060576</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email and Working */}
                            <div class="md:flex justify-evenly gap-10">
                                {/* Email part */}
                                <div class="my-10 md:flex gap-4 items-center justify-center text-gray-300">
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-sky-700 p-1 rounded mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                        </svg>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h4 class="text-sky-400 text-lg font-medium mt-1 md:my-0">Email</h4>
                                        <p>info@attrabit.net</p>
                                    </div>
                                </div>

                                {/* Working part */}
                                <div class="my-10 md:flex md:gap-4 items-center justify-center text-gray-300">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-sky-700 p-1 rounded mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div class="text-center md:text-left">
                                        <h4 class="text-sky-400 text-lg font-medium mt-1 md:my-0">Working Hour</h4>
                                        <p>9 am - 6 pm (Mon-Sat)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Contact;