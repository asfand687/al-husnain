import Image from 'next/image'
import Link from 'next/link'
import { courses } from '../data/data'
function OurCourses() {
	return (
		<section className='w-full lg:max-w-7xl text-[#613A3A] px-4 pb-8 mx-auto flex flex-col items-center'>
			<h2 className='text-center text-4xl font-bold uppercase relative -top-14'>Our Courses</h2>
			<div className='flex justify-center md:justify-between flex-wrap gap-y-8'>
				{courses.map((course) => (
					<article key={course.id} className='w-96 rounded-md shadow-2xl text-[#613A3A]'>
						<Image
							className='rounded-t-md h-full object-cover'
							src={course.img}
							alt='balloons'
							height={800}
						/>
						<div className='p-6 flex flex-col justify-between h-[300px]'>
							<div>
								<h2 className='font-medium text-2xl pb-2'>{course.title}</h2>
								<p className='text-justify'>{course.description}</p>
								<p className='pt-2'>
									<strong>Duration:</strong>{' '}
									<span className='text-xl'>{course.duration}</span>
								</p>
							</div>
							<div className=''>
							<Link href='#'>
									<a className='inline-flex bg-[#613A3A] px-10 text-[#DCEFFD] font-medium hover:opacity-80 py-3 rounded mt-4 uppercase'>
										More Info
									</a>
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default OurCourses
