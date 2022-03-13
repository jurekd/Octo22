import React from 'react';

export default class FillInBlank extends React.Component {
    constructor() {
        super();
        this.text = 'Język Python pozwala na wykonywanie obliczeń,  podobnie jak zwykły kalkulator.  Różnica polega na tym,  że jednocześnie trzeba wpisać liczby oraz działanie,  które chcemy wykonać.  W podobny sposób jesteś w stanie uzyskać wynik działania wszystkich podstawowych działań matematycznych  –  odejmowania,  mnożenia  (symbol *)  i dzielenia  (symbol /)  W programowaniu znaki wykonywania działań (+,-,*,/)  i inne,  które poznasz później nazywamy operatorami.  Część całkowita od części dziesiętnej liczby rozdzielana jest znakiem kropki.'
    }
    componentDidMount() {
        fillInTheBlankGameInit(this.text, [1, 10, 41, 72, 83]);
    }
    render() {
        return (
            <div>
                <h3>Uzupełnij luki</h3>
                <div id="sentence"></div>
                <h3>Brakujące słowa</h3>
                <div id="words"></div>
                <div id="task" style={{"display": "none"}}><h3>Treść Zadania</h3>Policz o ile niższy jest Pałac Kultury i Nauki w Warszawie (188 m) od Wieży Eiffla w Paryżu (300 m)?</div>
            </div>
        )
    }
}