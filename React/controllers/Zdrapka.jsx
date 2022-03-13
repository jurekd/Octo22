import React from 'react';

export default class Zdrapka extends React.Component {
    constructor() {
        super();
        this.backImg = '/Theme/Images/Aplications/Kinestetyk/M3_1/M3_1back.jpg';
        this.frontImg = '/Theme/Images/Aplications/Kinestetyk/M3_1/M3_1front.jpg'
    }
    componentDidMount() {
        Zdrapka(this.backImg, this.frontImg, "ZdrapkaM3L1");
    }
    render() {
        return (
            <div>
                <div id="main">
                    <div><canvas id="ZdrapkaM3L1"></canvas></div>
                </div>
            </div>
        )
    }
}