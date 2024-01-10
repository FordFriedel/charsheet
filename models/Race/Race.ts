import HighElf from "./HighElf";
import Human from "./Human";

export default interface Race {
    name: string;

    AttributeBonus :{
        Strength: number,
        Dexterity: number,
        Constitution: number,
        Intelligence: number,
        Wisdom: number,
        Charisma: number,
    } 
}

const raceFactory = (name: string) => {
    switch (name){
        case "human":
            return new Human();
        case "high-elf":
            return new HighElf();
    }
    return undefined;
}
export {raceFactory};