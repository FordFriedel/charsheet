import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Children, useState } from 'react'
import CharClass, { charClassFactory } from '@/models/CharClasses/CharClass'
import PointBuyLine, { AttributeType } from '@/components/PointBuyLine'
import Character from '@/models/Character'
import Race, { raceFactory } from '@/models/Race/Race'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [character, setCharacter] = useState<Character>(new Character())
  const [charClass, setCharClass] = useState<CharClass | undefined>();
  const [useRecommendedAS, setRecommendedAS] = useState<Boolean>(false);
  const [race, setRace] = useState<Race | undefined>();
  const handleClassDrop = (e: any) => {
    let newClass = (charClassFactory(e.target.value));
    updateCharacter({...character,charClass:newClass})
  }
  const handleRaceDrop = (e: any) => {    
    let newRace = (raceFactory(e.target.value));
    updateCharacter({...character, race:newRace});
  }
  const updateCharacter = (newCharacter: Character) => {
    setCharacter(newCharacter);
  }
  const handleCheckboxChange = (e: any) => { //Should we add a check to confirm 'e' is a valid boolean?
    let newValue = e.target.value;
    updateCharacter({...character,useRecommendedAS:newValue});
    setRecommendedAS(e.target.value);
  }

  return (
    <main className="bg-orange-800 min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg border-4 border-dashed border-brown-900 bg-wood-pattern shadow-lg text-center">
        <h1 className="text-2xl font-medieval mb-6 text-brown-800">Customize your character</h1>
        
        {/* *** CLASS DROP DOWN *** */}
        <li>
          Choose your class:
        <select
          id="classDrop"
          onChange={handleClassDrop}
          className="py-1 px-3 border-1 border-brown-600 rounded-md mb-5 text-black"  // <-- Add text-black here
        >
          <option disabled defaultValue=""></option>
          <option value="artificer">Artificer</option>
          <option value="barbarian">Barbarian</option>
        </select>
        </li>

        {/* *** RACE DROP DOWN *** */}
        <li>
          Choose your race: 
        <select
          id="raceDrop"
          onChange={handleRaceDrop}
          className="py-1 px-3 border-2 border-brown-600 rounded-md mb-5  text-black"  // <-- Add text-black here
        >
          <option disabled defaultValue=""></option>
          <option value="high-elf">High Elf</option>
          <option value="human">Human</option>
        </select>
        </li>

        {/* *** POINT BUY SECTION *** */}
        {/* *** USE (CLASS) RECOMMENDED ABILLITY SCORES *** */}
        <h1 className="text-2xl font-medieval mb-6 text-brown-800">Modify your Attributes</h1>
        <h5>Use Class Recommended Ability Scores?
        <input type="checkbox"  defaultChecked={false} onChange={handleCheckboxChange}/>        
        </h5>
          {/* *** ABILITY SCORE SELECTION *** */}
          Character Attribute Points Remaining: {character.AttributePoints}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className = "p-5">Attribute</th>
                <th></th>
                <th className = "p-2">Value</th>
                <th></th>
                <th className = "p-2">Race Mod</th>
                <th className = "p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <PointBuyLine character = {character} attribute="Strength" updateCharacter={updateCharacter}/>
              <PointBuyLine character = {character} attribute="Dexterity" updateCharacter={updateCharacter}/>
              <PointBuyLine character = {character} attribute="Constitution" updateCharacter={updateCharacter}/>
              <PointBuyLine character = {character} attribute="Intelligence" updateCharacter={updateCharacter}/>
              <PointBuyLine character = {character} attribute="Wisdom" updateCharacter={updateCharacter}/>
              <PointBuyLine character = {character} attribute="Charisma" updateCharacter={updateCharacter}/>
              {/* {Object.keys(character.Attributes).map((attribute, index) => {
                return (
                  <tr key={index}>
                    <PointBuyLine character={character} attribute={attribute as AttributeType} updateCharacter={updateCharacter}/>
                  </tr>
                )
              })} */}
            </tbody>
            </table>
      </div>
    </main>
  )
}
