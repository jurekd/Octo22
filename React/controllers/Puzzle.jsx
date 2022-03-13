import React from 'react';

export default class Puzzle extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        init("PuzzleM2L3","/Theme/Images/Aplications/Kinestetyk/M2_3/M2_3.png");
    }
    render() {
        return (
            <div>
                <canvas id="PuzzleM2L3"></canvas>
            </div>
        )
    }
}