import React, { Component, Fragment } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  functionCount = event => {
    const stateKey = event.target.name;
    this.setState(state => ({
      [stateKey]: state[stateKey] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const rez = (good / (good + neutral + bad)) * 100;
    // if (isNaN(rez)) {
    //   return 0;
    // } else return rez.toFixed(0);
    return rez;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const rezult = good + neutral + bad;

    return (
      <Fragment>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.functionCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {rezult <= 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />
          )}
        </Section>
      </Fragment>
    );
  }
}

export default App;
