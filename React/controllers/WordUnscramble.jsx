import React from 'react';

export default class WordUnscramble extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var WordsArray = ['dwa','razy','dziesięć','do','potęgi','minus','trzy','kilograma'];
        wordUnscrambleInit('scrambleContainer', WordsArray);
    }
    render() {
        return (
            <div id="scrambleContainer">

            </div>
        )
    }
}