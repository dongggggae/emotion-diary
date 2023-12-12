import PropTypes from 'prop-types';

const MyHeader = ({ headText, leftChild, rightChild }) => {
	return (
		<header>
			<div className="head_btn_left">{leftChild}</div>
			<div className="head_text">{headText}</div>
			<div className="head_btn_right">{rightChild}</div>
		</header>
	);
};

MyHeader.propTypes = {
	headText: PropTypes.string,
	leftChild: PropTypes.object,
	rightChild: PropTypes.object,
};

export default MyHeader;
