'use client';
import {useState} from 'react';

export default function HungerButton() {

    const [hunger, setHunger] = useState(0);

    function handleClik() {
        setHunger(hunger + 1);
        console.log('increment hungry count');
    }

    return  <button onClick={handleClik}>Hungry ({hunger})</button>;
}