import { useState } from 'react';
import './Calculator.css'
export default function Calculator() {
    const [data, setData] = useState('');
    const getValue = (event) => {
        console.log(event.target.value);
        setData(data.concat(event.target.value));
    }

    const getCalculation = () => {
        setData(eval(data).toString());
    }

    const getClear = () => {
        setData('');
    }

    const getBack = () => {
        setData(data.slice(0,data.length-1))
    }
    return (
        <>
            <div className="container">
                <div>
                    <input type="text"
                        placeholder="0"
                        value={data}
                        readOnly
                    />
                </div>

                <div className="button-box">
                    <button onClick={getValue} value='('>(</button>
                    <button onClick={getValue} value=')'>)</button>
                    <button onClick={getValue} value='%'>%</button>
                    <button onClick={getClear}>AC</button>

                    <button onClick={getValue} value='7'>7</button>
                    <button onClick={getValue} value='8'>8</button>
                    <button onClick={getValue} value='9'>9</button>
                    <button onClick={getValue} value='*'>*</button>

                    <button onClick={getValue} value='4'>4</button>
                    <button onClick={getValue} value='5'>5</button>
                    <button onClick={getValue} value='6'>6</button>
                    <button onClick={getValue} value='-'>-</button>

                    <button onClick={getValue} value='1'>1</button>
                    <button onClick={getValue} value='2'>2</button>
                    <button onClick={getValue} value='3'>3</button>
                    <button onClick={getValue} value='+'>+</button>

                    <button onClick={getValue} value='0'>0</button>
                    <button onClick={getBack} >Back</button>
                    <button onClick={getCalculation} >=</button>
                    <button onClick={getValue} value='/'>/</button>
                </div>
            </div>
        </>
    )
}
