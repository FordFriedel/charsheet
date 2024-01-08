import Artificer from "./Artificer";
import Barbarian from "./Barbarian";

export default interface CharClass {
    name: string;
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