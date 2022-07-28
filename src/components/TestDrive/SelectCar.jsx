import React from 'react';

export const SelectCar = ({carInfo}) => {
    return(
        <div className='test-drive-body-select-car'>
            <form className="test-drive-select-car-form" action="">
                <label for="cars">Make</label>
                <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <label for="cars">Model</label>
                <select id="cars" name="cars">
                    <option value="volvo">XC90</option>
                    <option value="saab">XC70</option>
                    <option value="fiat">XC50</option>
                    <option value="audi">XC40</option>
                </select>
                <label for="cars">Year</label>
                <select id="cars" name="cars">
                    <option value="volvo">2022</option>
                    <option value="saab">2021</option>
                    <option value="fiat">2020</option>
                    <option value="audi">2019</option>
                </select>
                <label for="cars">Trim</label>
                <select id="cars" name="cars">
                    <option value="volvo">Black</option>
                    <option value="saab">Red</option>
                    <option value="fiat">Yellow</option>
                    <option value="audi">Green</option>
                </select>
            </form>
        </div>
    );
};
