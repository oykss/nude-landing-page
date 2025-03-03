import { FaCheck } from 'react-icons/fa';
import { GrSecure, GrShieldSecurity } from 'react-icons/gr';

const BENEFITS = [
	{
		icon: <FaCheck size={24} color='#6D6D89' />,
		title: 'The real deal',
		desc: 'We’re authorised and regulated by the Financial Conduct Authority.',
		color: '#B2B0BD',
	},
	{
		icon: <GrShieldSecurity size={24} color='#AA7549' />,
		title: 'Your money, covered',
		desc: 'Your money’s eligible for protection by the Financial Services Compensation Scheme.',
		color: '#DEB28A',
	},
	{
		icon: <GrSecure size={24} color='#577975' />,
		title: 'Safe as houses',
		desc: 'Your data’s locked up with bank-level encryption to keep your money safe.',
		color: '#CAD4BD',
	},
];

export default BENEFITS;
