import { Link } from 'react-router-dom';

const RouterTest = () => {
	return (
		<>
			<Link to={'/'}>HOME</Link>
			<br />
			<Link to={'/New'}>New</Link>
			<br />
			<Link to={'/Diary'}>Diary</Link>
			<br />
			<Link to={'/Edit'}>Edit</Link>
		</>
	);
};

export default RouterTest;
