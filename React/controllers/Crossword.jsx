import React from 'react';

export default class Crossword extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        // var words = [];
        // var numbers = [];
        // this.props.config.questions.forEach((element) => {
        //     words.push(element.answer);
        //     numbers.push(element.number);
        // });
        // crosswordInit(words, numbers, this.props.config.number);
        $('#Task').replaceWith(this.props.iframe);
    }
    render() {
        // return (
        //     <div className="game" >
        //         <div id="crossword"></div>
        //         <br />
        //         <div>
        //             {this.props.config.questions.map((element, index) => {
        //                 return <span key={index}>{index}. {element.question}<br /></span>
        //             })}
        //         </div>
        //         <div id="crosswordTask">
        //             <h3>Gratulacje twoje zadanie do wykonania to:</h3>
        //             {this.props.result}
        //         </div>
        //     </div>
        // )
        return <div id="Task"></div>
    }
}
