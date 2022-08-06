import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const options = [
  {
    id: 'good',
    title: 'Good',
    type: 'button',
  },
  {
    id: 'neutral',
    title: 'Neutral',
    type: 'button',
  },
  {
    id: 'bad',
    title: 'Bad',
    type: 'button',
  },
];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prev => good + 1);
        break;
      case 'neutral':
        setNeutral(prev => neutral + 1);
        break;
      case 'bad':
        setBad(prev => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = (good / countTotalFeedback()) * 100;
    return Math.round(percentage);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: '100px',
        alignItems: 'center',
        borderRadius: '10px',
        fontSize: 18,
        backgroundColor: ' rgba(68, 209, 162,0.7)',
        padding: '20px',
        color: '#010101',
      }}
    >
      <h1>Please leave feedback</h1>
      <Section title="Statistics">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
