import React from 'react';
import Zdrapka from '../controllers/Zdrapka.jsx';
import Puzzle from '../controllers/Puzzle.jsx';
import Crossword from '../controllers/Crossword.jsx';
import FillInBlank from '../controllers/FillInBlank.jsx';
import WSGM from '../controllers/WSGM.jsx';
import WordMatching from '../controllers/WordMatching.jsx';
import WordUnscramble from '../controllers/WordUnscramble.jsx';

export default class AppsController extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <iframe className='app' src={this.props.iframe}></iframe>
    }
}