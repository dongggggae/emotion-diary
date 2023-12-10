import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get('id');

	const mode = searchParams.get('mode');
	console.log(mode);
	console.log(id);

	return (
		<div>
			<h2>여기는 편집하는 페이지</h2>
			<button onClick={setSearchParams({ change: '바굽니다' })}>QS</button>
			<button onClick={() => navigate('/home')}>Home</button>
		</div>
	);
};

export default Edit;
