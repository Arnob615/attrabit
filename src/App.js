import React, { createContext, useState } from 'react';
import {
	BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom";
import './App.css';
import BusinessConsultancy from './components/Home/BusinessConsultancy/BusinessConsultancy';
import Contact from './components/Home/Contact/Contact';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import ICTSolution from './components/Home/Service/ICTSolution/ICTSolution';
import NetworkSolution from './components/Home/Service/NetworkSolution/NetworkSolution';
import SoftwareDevelopment from './components/Home/Service/SoftwareDevelopment/SoftwareDevelopment';
import Login from './components/Login/Login';
import ScrollToTop from './components/scroll/ScrollToTop';
import Signup from './components/Signup/Signup';
import logo from './images/logo/logo.png';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [isShow, setIsShow] = useState(false);
	const [changeNavbar, setChangeNavbar] = useState(false);
	const [business, setBusiness] = useState(false);
	const [network, setNetwork] = useState(false);
	const [software, setSoftware] = useState(false);
	const [ict, setIct] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}

	// When scrolling the navbar it changes background Color
	const changeBackground = () => {
		if (window.scrollY >= 120) {
			setChangeNavbar(true);
		} else {
			setChangeNavbar(false);
		}
	}

	window.addEventListener('scroll', changeBackground);

	// When you click the button then refresh the page
    const refreshPage = () => {
        window.location.reload(false);
    }

	return (
		<main class="main-background">
			<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
				<Router>
					<ScrollToTop />

					{/* Nav link start*/}
					<nav class={changeNavbar ? 'bg-gray-600 fixed inset-x-0 top-0 z-50' : 'bg-gray-600'}>
						<div class="max-w-screen-xl mx-auto flex justify-between p-5 items-center ">
							<div class="flex">

								{/* Logo is here */}
								<div>
									<Link to="/">
										<img class="w-36 cursor-pointer" src={logo} alt="" />
									</Link>
								</div>

								{/* Main Navbar part */}
								<div class="hidden lg:flex text-gray-300 space-x-3 ml-6 items-center text-sm">
									<Link class="main-nav" to="/"> HOME </Link>

									<div class="relative transition-all duration-200" onMouseEnter={() => setBusiness(true)} onMouseLeave={() => setBusiness(false)}>
										<div>
											<Link class="main-nav" to="/business-consultancy"> BUSINESS CONSULTANCY </Link>
										</div>

										{business &&
											<div class="absolute top-6 z-50">
												<ul class='bg-gray-600 w-52 h-32 grid grid-rows-3 pt-4'>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/business-consultancy/#fdi-market" alt="" > FDI Market Research </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/business-consultancy/#company-formation" alt="" > Company Formation </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/business-consultancy/#operation-management" alt="" > Operation Management </a>
													</li>
												</ul>
											</div>
										}
									</div>

									<div class="relative transition-all duration-200" onMouseEnter={() => setNetwork(true)} onMouseLeave={() => setNetwork(false)}>
										<div>
											<Link class="main-nav" to="/network-solution">NETWORK SOLUTION</Link>
										</div>

										{network &&
											<div class="absolute top-6 z-50">
												<ul class='bg-gray-600 w-48 h-32 grid grid-rows-3 pt-4'>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/network-solution/#data-network" alt="" > Data Network </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/network-solution/#voice-and-video" alt="" > Voice and video </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/network-solution/#network-security" alt="" > Network Security </a>
													</li>
												</ul>
											</div>
										}
									</div>

									<div class="relative transition-all duration-200" onMouseEnter={() => setSoftware(true)} onMouseLeave={() => setSoftware(false)}>
										<div>
											<Link class="main-nav" to="/software-development">SOFTWARE SOLUTION</Link>
										</div>

										{software &&
											<div class="absolute top-6 z-50">
												<ul class='bg-gray-600 w-48 h-32 grid grid-rows-3 pt-4'>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/software-development/#web-development" alt="" > Web Development </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/software-development/#apps-development" alt="" > Apps Development </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/software-development/#pos-solution" alt="" > Pos Solution </a>
													</li>
												</ul>
											</div>
										}
									</div>

									<div class="relative transition-all duration-200" onMouseEnter={() => setIct(true)} onMouseLeave={() => setIct(false)}>
										<div>
											<Link class="main-nav" to="/ict-solution">ICT SOLUTION</Link>
										</div>

										{ict &&
											<div class="absolute top-6 z-50">
												<ul class='bg-gray-600 w-48 h-32 grid grid-rows-3 pt-4'>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/ict-solution/#server-management" alt="" > Server Management </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/ict-solution/#db-management" alt="" > Db-Management </a>
													</li>
													<li class="p-1 main-nav" onClick={refreshPage}>
														<a href="/ict-solution/#intellisense-security" alt="" > Intellisense Security </a>
													</li>
												</ul>
											</div>
										}
									</div>
									<Link class="main-nav" to="/contact">CONTACT</Link>
								</div>
							</div>

							{/* Login and Signup button part */}
							<div class="hidden lg:flex space-x-3 items-center">
								<Link class="text-sm bg-sky-600 px-4 py-2 rounded text-white transform duration-300 hover:bg-sky-700" to="/login">LOGIN</Link>
								<Link class="text-sm bg-gray-400 px-4 py-2 text-gray-800 rounded transform duration-300 hover:bg-gray-800 hover:text-gray-200" to="signup">SIGN UP</Link>
							</div>

							{/* Mobile menu icon part */}
							<div class="lg:hidden flex items-center">
								<button class="text-white" onClick={() => handleClick()} >
									{isShow ?
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
										: <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									}
								</button>
							</div>
						</div>

						{/* This Navbar is for mobile menu */}
						<div class={isShow ? 'grid grid-rows-6 text-center bg-gray-700 items-center' : 'hidden'} >
							<a class="mobile-nav" href="/" alt="">HOME</a>
							<a class="mobile-nav" href="/business-consultancy">BUSINESS CONSULTANCY</a>
							<a class="mobile-nav" href="/network-solution">NETWORK SOLUTION</a>
							<a class="mobile-nav" href="/software-development">SOFTWARE DEVELOPMENT</a>
							<a class="mobile-nav" href="/ict-solution">ICT SOLUTION</a>
							<a class="mobile-nav" href="/contact">CONTACT</a>
						</div>
					</nav>
					{/* nav link end */}

					{/* Routes Components */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/network-solution" element={<NetworkSolution />} />
						<Route path="/software-development" element={<SoftwareDevelopment />} />
						<Route path="/ict-solution" element={<ICTSolution />} />
						<Route path="/business-consultancy" element={<BusinessConsultancy />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>

					<div>
						<Footer />
					</div>
				</Router>
			</UserContext.Provider>

		</main>
	);
}

export default App;
