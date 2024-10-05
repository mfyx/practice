import React from "react";
import Die from "./Die"


export default function App() {
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            });
        }
        return newDice;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    // const diceValues = allNewDice();
    const [dice, setDice] = React.useState(allNewDice());

    const diceElements = dice.map((die) => {
        return <Die key={die.index} value={die.value} isHeld={die.isHeld} />
    });

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    );
}