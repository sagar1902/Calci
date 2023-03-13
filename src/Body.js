import { React, useState, useEffect } from 'react';

export default function Body() {
    const [query, setQuery] = useState('0');
    const [result, setResult] = useState(0);

    function update(e){
        if(query !== '0' || e.target.innerHTML === '.'){
            setQuery(query+e.target.innerHTML);
        }else{
            setQuery(e.target.innerHTML);
        }
    }

    function backspace(){
        if(query !== '0'){
            if(query.length === 1){
                setQuery('0');
            }else{
                setQuery(query.slice(0, -1));
            }
        }
    }

    useEffect(() => {
        try {
            setResult(eval(query))
        } catch (e) {
            setResult('Error')
        }
    }, [query]);

    // useEffect(() => {},[]);
    return (
        <div className="body">
            <h1>Calci</h1>
            <div className="result">
                <h2>{query}</h2>
                <h4>{result}</h4>
            </div>
            <div className="buttons">
                <div className="row">
                    <button type="button" onClick={(e)=>{update(e)}}>7</button>
                    <button type="button" onClick={(e)=>{update(e)}}>8</button>
                    <button type="button" onClick={(e)=>{update(e)}}>9</button>
                    <button type="button" onClick={()=>{backspace()}}>&lt;--</button>
                </div>
                <div className="row">
                    <button type="button" onClick={(e)=>{update(e)}}>4</button>
                    <button type="button" onClick={(e)=>{update(e)}}>5</button>
                    <button type="button" onClick={(e)=>{update(e)}}>6</button>
                    <button type="button" onClick={(e)=>{update(e)}}>-</button>
                </div>
                <div className="row">
                    <button type="button" onClick={(e)=>{update(e)}}>1</button>
                    <button type="button" onClick={(e)=>{update(e)}}>2</button>
                    <button type="button" onClick={(e)=>{update(e)}}>3</button>
                    <button type="button" onClick={(e)=>{update(e)}}>+</button>
                </div>
                <div className="row">
                    <button type="button" style={{width:'19%'}} onClick={(e)=>{update(e)}}>(</button>
                    <button type="button" style={{width:'19%'}} onClick={(e)=>{update(e)}}>0</button>
                    <button type="button" style={{width:'19%'}} onClick={(e)=>{update(e)}}>)</button>
                    <button type="button" style={{width:'19%'}} onClick={(e)=>{update(e)}}>.</button>
                    <button type="button" style={{width:'19%'}} onClick={(e)=>{update(e)}}>/</button>
                </div>
            </div>
        </div>
    );
}