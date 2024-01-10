import Race from "./Race";

export default class Human implements Race {
    name = "Human";

    AttributeBonus = { 
        Strength: 1, 
        Dexterity: 1, 
        Constitution: 1, 
        Intelligence: 1, 
        Wisdom: 1, 
        Charisma: 1, 
    };
}