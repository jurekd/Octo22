import React from 'react';

export default class WordMatching extends React.Component {
    constructor() {
        super();
        this.correctCards = 0;
    }
    init() {
        // Hide the success message
        $('#successMessage').hide();
        $('#task').hide();
        $('#successMessage').css({
            left: '580px',
            top: '250px',
            width: 0,
            height: 0
        });
        // Reset the game
        this.correctCards = 0;
        $('#cardPile').html('');
        $('#cardSlots').html('');

        // Create the pile of shuffled cards
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var definitions = [
            { 'value': 'Modulo', 'index': 1 },
            { 'value': 'Przyśpieszenie ziemskie', 'index': 2 },
            { 'value': 'Wysokość', 'index': 3 },
            { 'value': 'Wczytanie modułu', 'index': 4 },
            { 'value': 'Pętla', 'index': 5 },
            { 'value': 'liczba PI', 'index': 6 },
            { 'value': 'Ciąg znaków', 'index': 7 },
            { 'value': 'Porównanie', 'index': 8 },
            { 'value': 'Potęgowanie', 'index': 9 },
            { 'value': 'Dzielenie całkowite', 'index': 10 }];

        var words = [
            { 'value': '%', 'index': 1 },
            { 'value': 'g', 'index': 2 },
            { 'value': 'h', 'index': 3 },
            { 'value': 'import', 'index': 4 },
            { 'value': 'for', 'index': 5 },
            { 'value': '3,14', 'index': 6 },
            { 'value': '"text"', 'index': 7 },
            { 'value': '==', 'index': 8 },
            { 'value': '**', 'index': 9 },
            { 'value': '//', 'index': 10 }];

        numbers.sort(function () { return Math.random() - .5 });
        var number = 0;
        for (var i = 0; i <= 9; i++) {
            number = numbers[i];
            $('<div>' + definitions[number]['value'] + '</div>').data('number', definitions[number]['index']).attr('id', 'card' + [number]).appendTo('#cardPile').draggable({
                containment: '#content',
                stack: '#cardPile div',
                cursor: 'move',
                revert: true
            });
        }
        numbers.sort(function () { return Math.random() - .5 });
        number = 0;
        for (var i = 0; i <= 9; i++) {
            number = numbers[i];
            $('<div>' + words[number]['value'] + '</div>').data('number', words[number]['index']).appendTo('#cardSlots').droppable({
                accept: '#cardPile div',
                hoverClass: 'hovered',
                drop: handleCardDrop
            });
        }
    }
    handleCardDrop(event, ui) {
        var slotNumber = $(this).data('number');
        var cardNumber = ui.draggable.data('number');
        // If the card was dropped to the correct slot,
        // change the card colour, position it directly
        // on top of the slot, and prevent it being dragged
        // again
        if (slotNumber == cardNumber) {
            ui.draggable.addClass('correct');
            ui.draggable.draggable('disable');
            $(this).droppable('disable');
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
            ui.draggable.draggable('option', 'revert', false);
            this.correctCards++;
        }
        // If all the cards have been placed correctly then display a message
        // and reset the cards for another go
        if (this.correctCards == 10) {
            //$('#cardSlots').fadeOut();
            //$('#cardPile').slideToggle('slow');
            // $('#successMessage').show();
            // $('#successMessage').animate( {
            //   left: '380px',
            //   top: '200px',
            //   width: '400px',
            //   height: '100px',
            //   opacity: 1
            // } );
            $('#task').fadeIn('slow');
            // $('#content').fadeOut();
            //$('#content').replaceWith('<img src="/Theme/Images/lekcja/liczby_7.PNG" class="img-responsive center-block" alt="">');
        }
    }
    componentDidMount() {
        $( this.init );
    }
    render() {
        return (
            <div id="content">
                <div id="cardPile"></div>
                <div id="cardSlots"> </div>
                <div id="task">
                    <h3>Wykorzystaj wzór</h3>
                    <img src="/AplikacjeJavaScriptOffline/WordMatching/liczby_7.PNG" class="img-responsive center-block" alt="" />
                </div>
                <div id="successMessage">
                    <h2><img src="/AplikacjeJavaScriptOffline/WordMatching/liczby_7.PNG" class="img-responsive center-block" alt="" /></h2>
                </div>
            </div>
        )
    }
}