import Race from "./Race";

export default class HighElf implements Race {
    name = "High Elf";

    AttributeBonus = { 
        Strength: 0, 
        Dexterity: 2, 
        Constitution: 0, 
        Intelligence: 1, 
        Wisdom: 0, 
        Charisma: 0, 
    };
}