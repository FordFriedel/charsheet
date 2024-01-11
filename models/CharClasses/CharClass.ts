import Artificer from "./Artificer";
import Barbarian from "./Barbarian";

export default interface CharClass {
    name: string;

    RecommendedAttributes: {
        Strength: number,
        Dexterity: number,
        Constitution: number,
        Intelligence: number,
        Wisdom: number,
        Charisma: number,
    }
}

const charClassFactory = (name: string) => {
    switch (name){
        case "artificer":
            return new Artificer();
        case "barbarian":
            return new Barbarian();
    }
    return undefined;
}
export {charClassFactory};