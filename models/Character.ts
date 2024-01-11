import CharClass from "./CharClasses/CharClass";
import Race from "./Race/Race";

export default class Character {
    name: string = "Tav";

    race: Race | undefined;

    charClass: CharClass | undefined;
    useRecommendedAS: boolean = false;


    AttributePoints : number = 27;
    Attributes: {
        Strength: number,
        Dexterity: number,
        Constitution: number,
        Intelligence: number,
        Wisdom: number,
        Charisma: number,
    } = {
        Strength: 8,
        Dexterity: 8,
        Constitution: 8,
        Intelligence: 8,
        Wisdom: 8,
        Charisma: 8,
    }
}
