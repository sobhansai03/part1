import React, { useState } from "react";

const Button = ({ event, text }) => {
    return <button onClick={event}>{text}</button>;
};

const Statistic = ({ text, value, additional = "" }) => {
    return (
        <span>
            {text} {value} {additional}
        </span>
    );
};

const Statistics = ({ good, bad, neutral }) => {
    const all = good + bad + neutral;
    const average = (good - bad) / all;
    const positive = (good * 100) / all;
    if (all === 0) {
        return <p>No feedback given</p>;
    } else {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Statistic text="good" value={good} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Statistic text="neutral" value={neutral} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Statistic text="bad" value={bad} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Statistic text="all" value={all} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Statistic text="average" value={average} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Statistic
                                    text="positive"
                                    value={positive}
                                    additional="%"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give feedback</h1>
            <Button event={() => setGood(good + 1)} text="good" />
            <Button event={() => setNeutral(neutral + 1)} text="neutral" />
            <Button event={() => setBad(bad + 1)} text="bad" />
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    );
};

export default App;
