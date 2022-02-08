import React from 'react';
import { Fade } from 'react-reveal';
import dataManagement from '../../../../images/Db-management.png';
import intellisenceSecurity from '../../../../images/intelisence-security.png';
import serverStorage from '../../../../images/Server-storage.jpg';

const ICTSolution = () => {
    return (
        <section class="">
            <div class="max-w-screen-xl mx-auto">

                {/* All Content Wrapper Start */}
                <div class="content_wrapper p-3">
                    {/* ICT Solution Details Here */}
                    <Fade bottom duration={1000}>
                        <div>
                            <h2 class="text-3xl text-center cursor-pointer text-gray-200 my-10">ICT <span class="text-sky-500">SOLUTION</span></h2>
                        </div>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <div>
                            <p class="text-gray-400 text-justify text-base">Within our global network of skills and experience we combine a unique insight into how ICT can embrace, support and drive strategic business processes with a portfolio of sophisticated global technology partners. We work to attain the highest possible accreditation with each of our major partners – Cisco, HP, NetApp, VMware, Ca Technologies, ServiceNow and IBM – and have deployed data centre, communications and collaboration, and managed service expertise with almost 50 customers worldwide.</p>
                        </div>
                    </Fade>

                    {/* Service storage Management Content Start */}
                    <div class="grid lg:grid-cols-2 gap-6 mt-24 items-center" id="server-management">
                        <Fade bottom duration={1000}>
                            <div>
                                <h2 class="text-3xl mb-10 text-center md:text-left text-gray-200">SERVER STORAGE MANAGEMENT</h2>
                                <p class="text-gray-400 text-base text-justify">With more than 20 years of experience in the server and storage space. Attrabit Engineers of server and storage practice focus on providing design, development, and support and maintenance services to the ecosystem which include dedicated server hosting, server networking and backup   cloud technology with more than 20 years of experience.</p>
                                <p class="text-gray-400 text-base text-justify py-2">In IT solutions management, we have led complex projects across the value chain with global storage and computing companies in market segments such as storage target, storage interconnect, host software, and platform engineering. Armed with this experience and deep server & storage domain knowledge, we have helped customers address both current and future trends in front- and back-office processes.</p>
                                <p class="text-gray-400 text-justify text-base">We have dedicated Centers of Excellence for accelerated delivery across VLSI design, hardware, firmware, system software/virtualization, and application development. Creating waves in server storage technology ,our engineers are working on various layers of storage software that run on business servers; on embedded storage software that runs on storage interconnect elements like switches, directors and routers; on embedded software that runs on SAN and NAS storage systems; and on storage applications and solutions that involve backup, restore, archive, retrieve and quick recovery.</p>
                                <p class="text-gray-400 text-justify py-2 text-base">Through our proprietary framework — Managed Application Services (MaSCoT), which manages processes such as quality, governance, transformation, knowledge, test, project, and demand management — we significantly reduce our customers’ operational costs.</p>
                            </div>
                        </Fade>

                        {/* Right Content Image */}
                        <div class="p-20 mt-0 lg:mt-20 mx-auto animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={serverStorage} alt="" />
                        </div>
                    </div>

                    {/* Db Management Content Start */}
                    <div class="grid lg:grid-cols-2 gap-6 my-0 md:my-20 mx-auto items-center" id="db-management">
                        <div class="p-10 mt-0 lg:mt-20 animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={dataManagement} alt="" />
                        </div>

                        {/* Right Content Start */}
                        <Fade bottom duration={1000}>
                            <div class="my-20">
                                <h2 class="text-3xl my-10 text-center md:text-left text-gray-200">DB-MANAGEMENT</h2>
                                <div>
                                    <p class="text-gray-400 text-justify text-base">Comprehensive Database Consulting Services.</p>
                                    <p class="text-gray-400 text-justify py-2 text-base">Do you want your organization to be as efficient and effective as possible? Of course you do! You can help your organization reach new levels in performance with Attrabit database consulting services. Our services will show you how to foster a more effective, more reliable database environment, which will lead to a stronger, more successful organization or enterprise overall. With the help of a proven database consultancy like Attrabit, you can properly manage and utilize your data to provide you with the type of business intelligence the world’s most successful corporations leverage to guide their own operations. And we would know, since we’ve worked with them ourselves.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Intellisense Security Content Start */}
                    <div class="grid md:grid-cols-2 gap-6 items-center" id="intellisense-security">
                        <Fade bottom duration={1000}>
                            <div>
                                <h2 class="text-3xl my-10 text-center md:text-left text-gray-200">INTELLISENSE SECURITY</h2>
                                <p class="text-gray-400 text-justify text-base">Attrabit has been in the security and surveillance industry for over 20 years. We have a multiple years of true in the field experience and can tackle just about any security requirement or issue that comes about. We have experience at every level starting with office alarm and CCTV systems all the way to the top level systems for large corporate customers, manufacturing facilities, and Government and Law Enforcement agencies.</p>
                                <p class="text-gray-400 text-justify py-2 text-base">We specialize in many disciplines to provide a vast knowledge base for our clients to rely upon in an effort to provide the type of security services or equipment that will meet their needs. We are expert in the areas of hidden video surveillance including wireless hidden video products and techniques.</p>
                                <p class="text-gray-400 text-justify text-base">Our expertise also includes hidden video counter-surveillance techniques and practices (the ability to detect and dispose of hidden bugs including listening devices as well as video) which is a great advantage in our industry as we get to see both sides of the tracks shall we say, and we have now added complete biometric systems/solutions to our line of products and services.</p>
                            </div>
                        </Fade>

                        {/* Right Content Image  */}
                        <div class="p-10 mt-0 lg:mt-20 animate-pulse">
                            <img class="rounded border-4 border-sky-300" src={intellisenceSecurity} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ICTSolution;