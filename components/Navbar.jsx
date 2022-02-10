import { useState } from 'react'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
	const [showDrawer, setShowDrawer] = useState(false)
	return (
		<nav className='px-4 bg-[#77FF94] text-[#613A3A]'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto flex items-center justify-between'>
				<div className='flex items-center'>
					<div className='pr-8 text-2xl font-bold font-mono'>
						<Link href='/'>
							<a>Al Hasnain</a>
						</Link>
					</div>
					<ul className='hidden font-medium lg:flex space-x-8'>
						<li>
							<Link href='/WebDevelopmentCourse'>Home</Link>
						</li>
						<li>
							<Link href='/HowItWorks'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/WebDevCurriculum'>
								<a>Contact Us</a>
							</Link>
						</li>
					</ul>
					<ul
						className={`fixed h-screen w-72 bg-white shadow-2xl pt-4 px-4  top-0 left-0 transform ${
							showDrawer ? 'translate-x-0' : '-translate-x-full'
						} z-20 lg:hidden transition-all duration-300 ease-linear tex-gray-800`}
					>
						<header className='flex justify-end'>
							<div
								onClick={() => setShowDrawer(!showDrawer)}
								className='cursor-pointer'
							>
								<FaTimes size={20} color={'#333'} />
							</div>
						</header>
						<div className='text-gray-800 space-y-6 uppercase font-bold pt-4'>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/'>Home</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/WebDevelopmentCourse'>About</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/HowItWorks'>
									<a>Contact Us</a>
								</Link>
							</li>
						</div>
					</ul>
				</div>
				<div className='flex font-medium items-center space-x-4 lg:block'>
					<Link href='#'>
						<a>Login</a>
					</Link>
					<div className='lg:hidden cursor-pointer'>
						<div onClick={() => setShowDrawer(!showDrawer)}>
							<FaBars size={20} color={'#333'} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
