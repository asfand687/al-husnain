import images from './images'

const wines = [
	{
		title: 'Chapel Hill Shiraz',
		price: '$56',
		tags: 'AU | Bottle',
	},
	{
		title: 'Catena Malbee',
		price: '$59',
		tags: 'AU | Bottle',
	},
	{
		title: 'La Vieillw Rose',
		price: '$44',
		tags: 'FR | 750 ml',
	},
	{
		title: 'Rhino Pale Ale',
		price: '$31',
		tags: 'CA | 750 ml',
	},
	{
		title: 'Irish Guinness',
		price: '$26',
		tags: 'IE | 750 ml',
	},
]

const cocktails = [
	{
		title: 'Aperol Sprtiz',
		price: '$20',
		tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
	},
	{
		title: "Dark 'N' Stormy",
		price: '$16',
		tags: 'Dark rum | Ginger beer | Slice of lime',
	},
	{
		title: 'Daiquiri',
		price: '$10',
		tags: 'Rum | Citrus juice | Sugar',
	},
	{
		title: 'Old Fashioned',
		price: '$31',
		tags: 'Bourbon | Brown sugar | Angostura Bitters',
	},
	{
		title: 'Negroni',
		price: '$26',
		tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
	},
]

const awards = [
	{
		imgUrl: images.award02,
		title: 'Flexible Schedule',
		subtitle:
			'We offers one of the most effective Arabic and online Quran teaching websites, through its interactive digital environment.',
	},
	{
		imgUrl: images.award01,
		title: 'Best Online Tutors',
		subtitle:
			'We select only the best tutors from Al-Azhar, one of the world’s most prestigious Islamic universities, to guide you through each course',
	},
	{
		imgUrl: images.award05,
		title: 'Video Sessions',
		subtitle:
			'We also provide one-on-one interactive video sessions to help you and your family learn the Quran online. Providing immediate feedback to the students.',
	},
	{
		imgUrl: images.award03,
		title: 'Study Material',
		subtitle:
			'Because your successful learning is of the utmost importance to us, IQRA carefully hand-picks teaching materials to achieve the best results.',
	},
]

export default { wines, cocktails, awards }
