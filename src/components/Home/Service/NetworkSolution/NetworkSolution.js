import React from 'react';
import { Fade } from 'react-reveal';
import dataNetwork from '../../../../images/data-network.jpg';
import networkSecurity from '../../../../images/network-security.png';
import voiceAndVideo from '../../../../images/voice-and-video.png';

const NetworkSolution = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto">

                {/* All Content Wrapper */}
                <div class="p-3">
                    {/* Network Solution Content start */}
                    <Fade bottom duration={1000}>
                        <div>
                        <h2 class="text-3xl text-center cursor-pointer text-gray-200 my-10"> <span class="text-sky-500">NETWORK</span> SOLUTION</h2>
                        </div>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <div>
                            <p class="text-gray-400 text-justify text-base">Attrabit is a Japanese firm dedicated to providing services and products to help our customers realize more utilization and productivity from their existing infrastructure.</p>
                            <p class="text-gray-400 text-justify py-2 text-base">We are specializing in building robust networks, deploying network management systems, and implementing data security solutions. We have more than 10 years of network engineering experience with the latest technologies to build fast, secure, and highly-available enterprise networks.</p>
                            <p class="text-gray-400 text-justify text-base">We have a reputation for innovative solutions, greater customer service and quality control. we understand the value of top notch networking talent.</p>
                            <p class="text-gray-400 text-justify py-2 text-base">Our engineers are the best in the business. Their exposure to many complex multi-vendor network configurations and the intense training they receive, make their troubleshooting services invaluable. Our experts help clients reduce total cost of ownership by leveraging the Global Delivery Model (brought to perfection by Infosys), onsite-offshore model, and automated processes.</p>
                            <p class="text-gray-400 text-justify text-base">We provide systems integration services that include end-to-end lifecycle activities such as network planning, network design, network implementation, and network testing and certification.</p>
                        </div>
                    </Fade>

                    {/* Data Network Content start */}
                    <div class="grid md:grid-cols-2 gap-6 pt-20 items-center" id="data-network">
                        <Fade bottom duration={1000}>
                            <div>
                                <h2 class="text-3xl mb-10 text-center md:text-left text-gray-200">DATA NETWORK</h2>
                                <p class="text-gray-400 text-justify text-base">From confidential company information to sensitive financial records, the data you transfer on a daily basis ensures the successful operation and credibility of your business. Every time you transport this data, you place it at risk. To reduce these risks and to stay current with progressing compliance issues, you need a safe and reliable networking solution.</p>
                                <p class="text-gray-400 py-2 text-justify text-base">Our team of professionals is here to provide you with the security you need ??? and the peace of mind you deserve. In addition to developing a BYOD (bring your own device) strategy and offering a wide range of cost-effective wireless, switching and routing solutions, we can design, implement and support a custom networking solution that allows you to transfer your data assets safely and securely across multiple platforms and operating systems.</p>
                                <p class="text-gray-400 text-justify text-base">So whether you want to redesign your existing network or replace it completely, we have the right mix of experience and expertise to guide your business in the right direction.</p>
                            </div>
                        </Fade>

                        {/* Right Content Image */}
                        <div class="p-10 mt-0 md:mt-16 animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={dataNetwork} alt="" />
                        </div>
                    </div>

                    {/* Voice and video solution Content Start */}
                    <div class="grid md:grid-cols-2 gap-6 pt-20 items-center" id="voice-and-video">
                        <div class="p-2 mt-0 md:mt-16 animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={voiceAndVideo} alt="" />
                        </div>

                        {/* Right Content Start */}
                        <Fade bottom duration={1000}>
                            <div class="py-20">
                                <h2 class="text-3xl my-10 px-10 text-center md:text-left text-gray-200">VOICE AND VIDEO SOLUTION</h2>
                                <div class="mt-12 px-10">
                                    <p class="text-gray-400 text-justify text-base">Our Voice & Video solutions help you communicate and collaborate within and beyond your organization, helping you meet the demands of growth.</p>
                                    <p class="text-gray-400 text-justify py-2 text-base">With our years of experience, we provide Voice and Video Solutions based on below systems.</p>
                                    <ul class="mt-7 text-gray-400 text-base">
                                        <li><a href="#cisco-ip" alt="">Cisco IP Telephony</a></li>
                                        <li><a href="#cisco-jabber" alt="">Cisco Jabber</a></li>
                                        <li><a href="#cisco-telepresence" alt="">Cisco Telepresence</a></li>
                                        <li><a href="#avaya-ip" alt="">Avaya IP telephony</a></li>
                                        <li><a href="#polycome" alt="">Polycome Video Systems</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Network Security Content Start */}
                    <div class="grid md:grid-cols-2 gap-6 pt-20 items-center" id="network-security">
                        <Fade bottom duration={1000}>
                            <div>
                                <h2 class="text-3xl my-10 text-gray-200 text-center md:text-left">NETWORK SECURITY</h2>
                                <p class="text-gray-400 text-justify pt-8 text-base">If you are like most businesses today, you share data with customers, partners and suppliers almost constantly. While this ability to communicate and collaborate makes your business more productive, it also makes your business???s security and compliance vitally important. What steps are you taking to ensure your company???s data is being protected in the most aggressive ways possible?</p>
                                <p class="text-gray-400 text-justify py-2 text-base">Through firewall, IPS, encryption, SPAM, Spyware and Content Filtering, we can maximize your integrated business environment by protecting any and all of your company???s critical business data. We???ll drastically reduce the complexity of your business??? data storage, security, compliance and availability, while maintaining best practices for data security and implementation.
                                </p>
                            </div>
                        </Fade>

                        {/* Right Content Image */}
                        <div class="p-10 mt-20 animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={networkSecurity} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default NetworkSolution;