import { useState, useEffect, useCallback } from 'react';

function Converter() {
    const [drop1, setDrop1] = useState(false);
    const [drop2, setDrop2] = useState(false);

    const [shift, setShift] = useState(false);

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);

    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');

    const [result, setResult] = useState('');

    const [conversion, setConversion] = useState([]);
    const [countries, SetCountries] = useState([]);

    const getCurrency = useCallback(async() => {
        const res = await fetch('https://v6.exchangerate-api.com/v6/7460e40c8a04beb4b4acebc1/latest/USD', {
            method: 'GET',
        });

        const data = await res.json();
        if (res.status === 200) {
            setConversion(data.conversion_rates);
        }
    }, []);

    useEffect(() => {
        getCurrency();
    });

    return ( 
        <div className="cal-container">
            <div className="calculator">
                <div className="head">
                    <h2>Currency Converter</h2>
                </div>

                <div className="calbody">
                    <div className="form-cont">
                        <form>
                            <fieldset>
                                <legend>from</legend>
                                <div className="dropdown">
                                    <div id="myDropdown" className="dropdown-content" style={{display: drop1 ? "block" : "none"}}>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                    </div>
                                </div>

                                <div className="cinfo">            
                                    <div className="cname">
                                        <h3>USD</h3>
                                    </div>
        
                                    <div className="cselect">
                                        <div onClick={() => {
                                            if (drop2)  {
                                                setDrop2(false);
                                                setDrop1(true);
                                            } else {
                                                setDrop1(!drop1);
                                            }
                                        }} className={drop1 ? "dropicon droped" : "dropicon"}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </i>
                                        </div>

                                        
                                    </div>
                                </div>
            
                                <div className="cinput">
                                    <input type="text" name="usd" id="usd" placeholder="0.00" onChange={(event) => setAmount1(event.target.value)}/> 
                                </div>
                            </fieldset>
                        </form>
                    </div>

                    <div className="mover">
                        <div onClick={() => {
                            setShift(!shift);
                            setDrop1(false);
                            setDrop2(false);
                        }} className={shift ? "contm shifted" : "contm"}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </i>
                        </div>
                    </div>

                    <div className="form-cont">
                        <form>
                            <fieldset>
                                <legend>to</legend>
                                <div className="dropdown">
                                    <div id="myDropdown" className="dropdown-content" style={{display: drop2 ? "block" : "none"}}>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                        <p><strong>USD</strong> - US Dollars</p>
                                        <p><strong>RWF</strong> - Rwandan Francs</p>
                                    </div>
                                </div>

                                <div className="cinfo">            
                                    <div className="cname">
                                        <h3>USD</h3>
                                    </div>
        
                                    <div className="cselect">
                                        <div onClick={() => {
                                            if (drop1)  {
                                                setDrop1(false);
                                                setDrop2(true);
                                            } else {
                                                setDrop2(!drop2);
                                            }
                                        }} className={drop2 ? "dropicon droped" : "dropicon"}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </i>
                                        </div>

                                        
                                    </div>
                                </div>
            
                                <div className="cinput">
                                    <input type="text" name="usd" id="usd" placeholder="0.00" onChange={(event) => setAmount1(event.target.value)}/> 
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>

                <div className="result">
                    <h2>Result</h2>

                    <div className="result body">
                        <p>{result}</p>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Converter;