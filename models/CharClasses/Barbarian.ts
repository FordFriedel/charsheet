import CharClass from "./CharClass";

export default class Barbarian implements CharClass{
    name = "Barbarian";

    RecommendedAttributes = {
        Strength: 15,
        Dexterity: 14,
        Constitution: 14,
        Intelligence: 8,
        Wisdom: 10,
        Charisma: 10,
    }   
}