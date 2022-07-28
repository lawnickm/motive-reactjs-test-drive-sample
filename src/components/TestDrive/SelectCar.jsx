import React, { useState } from 'react';

export const SelectCar = ({ setCarInfo, buttonText, handleChangeComponent }) => {
    const [make, setMake] = useState("Volvo");
    const [model, setModel] = useState("XC90");
    const [year, setYear] = useState("2022");
    const [trim, setTrim] = useState("Black");


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const carInfomation = {make, model, year, trim};
        setCarInfo(carInfomation)
        handleChangeComponent()
    }

    return (
        <>
            <div className='test-drive-body-select-car'>
                <form
                    className="test-drive-select-car-form"
                    id="select-car-form"
                    onSubmit={handleFormSubmit}
                >
                    <label for="cars">Make:</label>
                    <select value={make} onChange={(e)=>setMake(e.target.value)} id="cars" name="car">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <label for="models">Model:</label>
                    <select value={model} onChange={(e)=>setModel(e.target.value)} id="models" name="model">
                        <option value="XC90">XC90</option>
                        <option value="XC70">XC70</option>
                        <option value="XC50">XC50</option>
                        <option value="XC40">XC40</option>
                    </select>
                    <label for="year">Year:</label>
                    <select value={year} onChange={(e)=>setYear(e.target.value)} id="year" name="year">
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                    <label for="trim">Trim:</label>
                    <select value={trim} onChange={(e)=>setTrim(e.target.value)} id="trim" name="trim">
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>

                    <div className='test-drive-main-actions'>
                        <button className='test-drive-main-button button'> Select Dates </button>
                    </div>
                </form>
            </div>
        </>
    );
};
