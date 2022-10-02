import { Message } from './NotificationMessage.styled';
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => {
  return <Message>{message}</Message>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;