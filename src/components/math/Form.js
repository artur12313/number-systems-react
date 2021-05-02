import React from 'react';
import refresh from '../../img/refresh.png'


const Form = () => {

   

    return(
        <form class="container">
            <div class="row g-3 align-items-center">
                <div class="col-sm-3">
                    <input type="text" class="form-control"/>
                </div>
                <div class="col-sm-3">
                    <select class="form-control" id="from_numerals">
                        <option disabled="disabled" class="title">Systemy pozycyjne</option>
                        <option value="2||binary">Dwójkowy system liczbowy</option>
                        <option value="3||ternary" selected="selected">Trójkowy system liczbowy</option>
                        <option value="4||quaternary">liczebniki porzadkowe</option>
                        <option value="5||quinary">Piątkowy system liczbowy</option>
                        <option value="6||senary">Szótstkowy system liczbowy</option>
                        <option value="7||septenary">Siódemkowy system liczbowy</option>
                        <option value="8||octal">Ósemkowy system liczbowy</option>
                        <option value="9||nonary">Dziewiątkowy system liczbowy</option>
                        <option value="10||decimal">Dziesiętny system liczbowy</option>
                        <option value="11||undecimal">Jedenastkowy system liczbowy</option>
                        <option value="12||duodecimal">Dwunastkowy system liczbowy</option>
                        <option value="13||base 13">Trzynastkowy system liczbowy</option>
                        <option value="16||hexadecimal">Szesnastkowy system liczbowy</option>
                        <option value="20||vigesimal">Dwudziestkowy system liczbowy</option>
                        <option disabled="disabled">&nbsp;</option>
                        <option disabled="disabled" class="title">Systemy numeryczne</option>
                        <option value="A||arabic">Cyfry arabskie</option>
                        <option value="R||Roman">Rzymski system liczbowy</option>
                    </select>
                </div>
                <input type="image" src={refresh} />
                <div class="col-sm-3">
                <select class="form-control" id="to_numerals">
                        <option disabled="disabled" class="title">Systemy pozycyjne</option>
                        <option value="2||binary">Dwójkowy system liczbowy</option>
                        <option value="3||ternary" selected="selected">Trójkowy system liczbowy</option>
                        <option value="4||quaternary">liczebniki porzadkowe</option>
                        <option value="5||quinary">Piątkowy system liczbowy</option>
                        <option value="6||senary">Szótstkowy system liczbowy</option>
                        <option value="7||septenary">Siódemkowy system liczbowy</option>
                        <option value="8||octal">Ósemkowy system liczbowy</option>
                        <option value="9||nonary">Dziewiątkowy system liczbowy</option>
                        <option value="10||decimal">Dziesiętny system liczbowy</option>
                        <option value="11||undecimal">Jedenastkowy system liczbowy</option>
                        <option value="12||duodecimal">Dwunastkowy system liczbowy</option>
                        <option value="13||base 13">Trzynastkowy system liczbowy</option>
                        <option value="16||hexadecimal">Szesnastkowy system liczbowy</option>
                        <option value="20||vigesimal">Dwudziestkowy system liczbowy</option>
                        <option disabled="disabled">&nbsp;</option>
                        <option disabled="disabled" class="title">Systemy numeryczne</option>
                        <option value="A||arabic">Cyfry arabskie</option>
                        <option value="R||Roman">Rzymski system liczbowy</option>
                    </select>
                </div>
                <a href="#" class="btn btn-primary">Submit</a>
            </div>
        </form>
    )

}



export default Form;