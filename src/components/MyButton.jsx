import PropTypes from 'prop-types';

const MyButton = ({ text, type, onClick }) => {
	const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

	return (
		<button className={['MyButton', `MyButton_${btnType}`].join(' ')} onClick={onClick}>
			{text}
		</button>
	);
};

MyButton.defaultProps = {
	type: 'default',
};

MyButton.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default MyButton;
