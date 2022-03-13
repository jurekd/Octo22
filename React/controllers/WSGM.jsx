import React from 'react';

export default class WSGM extends React.Component {
    constructor() {
        super();
        this.Settings = {
            'directions': ['W', 'N'],
            'gridSize': 6,
            'words': ['dwa', 'modulo'],
            'wordsList': [],
            'debug': false
        }
        this.taskContent = 'Rok przestępny wypada co 4 lata (choć z pewnymi wyjątkami raz na 100 lat). Wykorzystując operator reszty z dzielenia (modulo), sprawdź czy rok 2018 będzie rokiem przestępnym?';
    }
    componentDidMount() {
        WordSearchGameInit(this.Settings, this.taskContent);
        var gameAreaEl = document.getElementById('ws-area');
        var gameobj = gameAreaEl.wordSearch();
        var words = gameobj.settings.wordsList,
            wordsWrap = document.querySelector('.ws-words');
        for (i in words) {
            var liEl = document.createElement('li');
            liEl.setAttribute('class', 'ws-word');
            liEl.innerText = words[i];
            wordsWrap.appendChild(liEl);
        }
    }
    render() {
        return (
            <div className="wrap">
                <p className="ws-question"><b>Jak zaznaczysz poprawnie odkryje się zadanie do wykonania</b></p>
                <p className="ws-question" data-ws-word="dwa">1.Wynik dzielenia całkowitego 5//2</p>
                <p className="ws-question" data-ws-word="modulo">2.Daje resztę z dzielenia dwóch liczb</p>
                <section id="ws-area"></section>
                <ul className="ws-words">

                </ul>
                <div>


                </div>
            </div>
        )
    }
}