import React from 'react';
import Form from './math/Form';

/*      TO DO!

Implement JavaScript into static content

*/ 
const Main = () => {

    return(
        <div class="main">
            <br/>
            <Form />
            <br/>
        <table class="table">
        <tr><td>Dwójkowy system liczbowy</td><td id="2">10001</td></tr>
        <tr><td>Trójkowy system liczbowy</td><td id="3">100</td></tr>
        <tr><td>Piątkowy system liczbowy</td><td id="5">10001</td></tr>
        <tr><td>Szóstkowy system liczbowy</td><td id="6">10001</td></tr>
        <tr><td>Siódemkowy system liczbowy</td><td id="7">10001</td></tr>
        <tr><td>Ósemkowy system liczbowy</td><td id="8">10001</td></tr>
        <tr><td>Dziewiątkowy system liczbowy</td><td id="9">10001</td></tr>
        <tr><td>Dziesiętny system liczbowy</td><td id="10">10001</td></tr>
        <tr><td>Jedenastkowy system liczbowy</td><td id="11">10001</td></tr>
        <tr><td>Dwunastkowy system liczbowy</td><td id="12">10001</td></tr>
        <tr><td>Trzynastkowy system liczbowy</td><td id="13">10001</td></tr>
        <tr><td>Szesnastkowy system liczbowy</td><td id="16">10001</td></tr>
        <tr><td>Dwudziestkowy system liczbowy</td><td id="20">10001</td></tr>
        </table>
        <br/>
        </div>
    )

}

export default Main;