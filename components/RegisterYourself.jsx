function RegisterYourself() {
	return (
		<div className='text-gray-600 bg-gray-100'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto flex flex-col items-center'>
				<h2 className='font-semibold text-5xl text-center py-6'>
					Register Yourself
				</h2>
				<div className='w-full max-w-lg'>
					<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center py-8'>
						<div className='mb-4 w-full'>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='text'
								placeholder='First Name'
							/>
						</div>
						<div className='mb-4 w-full'>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='text'
								placeholder='Last Name'
							/>
						</div>
						<div className='mb-4 w-full'>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='email'
								placeholder='Email'
							/>
						</div>
						<div className='mb-4 w-full'>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='tel'
								placeholder='Phone'
							/>
						</div>
						<div className='mb-4 w-full'>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='txt'
								placeholder='Religion'
							/>
						</div>
						<div className='flex w-full items-center justify-between'>
							<button
								class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button'
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterYourself
