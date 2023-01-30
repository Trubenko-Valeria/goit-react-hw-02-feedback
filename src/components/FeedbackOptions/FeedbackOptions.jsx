import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.button_state}>
      <button
        name="good"
        type="button"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        {options[0]}
      </button>
      <button
        name="neutral"
        type="button"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        {options[1]}
      </button>
      <button
        name="bad"
        type="button"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        {options[2]}
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.array.isRequired,
};
