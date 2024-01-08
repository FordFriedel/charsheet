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

    return (
        <div>
            {attribute}
            <button onClick={decreaseAttribute}>  - </button>
            {character.Attributes[attribute]}
            <button onClick={increaseAttribute}> +</button>
        </div>
    )
}
export default PointBuyLine;
