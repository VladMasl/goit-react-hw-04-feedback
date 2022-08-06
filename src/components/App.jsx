import { Component } from 'react';
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

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    this.setState(prevState => {
      return { [e.target.id]: prevState[e.target.id] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(percentage);
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width:'500px',
          margin:'100px',
          alignItems: 'center',
          borderRadius:'10px',
          fontSize: 18,
          backgroundColor:' rgba(68, 209, 162,0.7)',
          padding:'20px',
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>
        <Section title="Statistics">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
