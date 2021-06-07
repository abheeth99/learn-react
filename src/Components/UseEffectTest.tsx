import React, { useEffect, useRef, useState } from 'react'

const UseEffectTest: React.FC<any>=(props) =>{

    const [tab, setTab] = useState('zero');

    useEffect(()=>{
        console.log("UseEffectTest")

        return ()=>{
        console.log("UseEffectTest return") // hits first
        }
    });

    // If deps is empty -> only one hit, when mounting

    return (
        <div>
            Use effect test <hr/>
            <button onClick={()=>setTab('One')}>Tab 1</button>
            <button onClick={()=>setTab('One')}>Tab 2</button>
            <button onClick={()=>setTab('Two')}>Tab 2</button>
            <h3>{tab}</h3>
        </div>
    );
}

export default UseEffectTest
