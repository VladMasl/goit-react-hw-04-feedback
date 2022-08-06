import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(({ id, title, type }) => (
    <button
      key={id}
      id={id}
      onClick={onLeaveFeedback}
      className={s.statisticsBtn}
      type={type}
    >
      {title}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
