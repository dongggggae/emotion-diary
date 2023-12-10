import { useParams } from 'react-router-dom';

const Diary = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<h2>여기는 다이어리 페이지</h2>
		</div>
	);
};

export default Diary;
