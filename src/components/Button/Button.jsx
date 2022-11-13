import PropTypes from 'prop-types';
import Buttons from './Button.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/sliceContact';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Buttons type="button" onClick={() => dispatch(deleteContact(id))}>
      Delete
    </Buttons>
  );
};

Button.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Button;
