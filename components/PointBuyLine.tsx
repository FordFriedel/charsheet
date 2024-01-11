import Character from "@/models/Character";
import React from "react";
export type AttributeType = "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma";

const PointBuyLine = ({attribute,character,updateCharacter}:{attribute: AttributeType,character: Character,updateCharacter: Function}) => {
    const decreaseAttribute = () => {
        let pts = character.AttributePoints;
        let score = character.Attributes[attribute];
        const value = score - 1;
        if(score <= 8) return;
        if(score > 13) {
            pts += 1;
        }
        pts +=1;
        const newAttributes = {...character.Attributes,[attribute]:value};
        updateCharacter({...character, Attributes:newAttributes, AttributePoints:pts});
    }
    const increaseAttribute = () => {
        let pts = character.AttributePoints;
        let score = character.Attributes[attribute];
        const newScore = score + 1;
        if(newScore > 15) return;
        if(newScore > 13) {
            if(pts < 2) return;
            pts -= 1;
        }
        if(pts < 1) return;
        pts -=1;
        const newAttributes = {...character.Attributes,[attribute]:newScore};
        updateCharacter({...character, Attributes:newAttributes, AttributePoints:pts});
    }

    let newAttribute = (character.useRecommendedAS && character.charClass) ? character.charClass?.RecommendedAttributes[attribute] : character.Attributes[attribute];
    let raceBonus = character.race ? character.race.AttributeBonus[attribute] : 0;

    //currently stuck on how do we update if there is a change
    
    //TEST returning values for table
    return(
        <tr>
            <td>{attribute}</td>
            <td><button onClick={decreaseAttribute} className="bg-blue-500 text-white px-2.5 rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300">-</button></td>
            <td>{newAttribute}</td>
            <td><button onClick={increaseAttribute} className="bg-blue-500 text-white px-2 rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300">+</button></td>
            <td>{raceBonus}</td>
            <td>{newAttribute! + raceBonus}</td>
        </tr>
    )

    if(character.useRecommendedAS===false){
        return (

            <div className="flex items-center justify-between space-x-2">
                <td>{attribute}</td>
                    <td><button onClick={decreaseAttribute} className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-brown-700 focus:outline-none focus:ring focus:border-blue-300">-</button></td>
                    <td><span>{newAttribute}</span></td>
                    <td><button onClick={increaseAttribute} className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-brown-700 focus:outline-none focus:ring focus:border-blue-300">+</button></td>
                    <td><div>{`Racial Bonus: ${raceBonus}`}</div></td>
                    <td><div>{`Total: ${newAttribute! + raceBonus}`}</div></td>
            </div>
            
        )
    }
    return(
        <div>
            {attribute}
            {newAttribute}
            {`Racial Bonus: ${raceBonus}`}
            {`Total: ${newAttribute! + raceBonus}`}
       </div>
    )
}
export default PointBuyLine;
