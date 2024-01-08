import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Children, useState } from 'react'
import CharClass, { charClassFactory } from '@/models/CharClasses/CharClass'
import PointBuyLine, { AttributeType } from '@/components/PointBuyLine'
import Character from '@/models/Character'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [character, setCharacter] = useState<Character>(new Character())
  const [charClass, setCharClass] = useState<CharClass | undefined>();
  const handleClassDrop = (e: any) => {
    setCharClass(charClassFactory(e.target.value!));
  }
  const updateCharacter = (newCharacter: Character) => {
    setCharacter(newCharacter);
    console.log("test")
  }

  return (
    <main className="bg-orange-800 min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg border-4 border-dashed border-brown-900 bg-wood-pattern shadow-lg text-center">
        <h1 className="text-4xl font-medieval mb-6 text-brown-800">Choose Your Class</h1>
        <select
          id="classDrop"
          onChange={handleClassDrop}
          className="py-3 px-5 border-2 border-brown-600 rounded-md mb-5 text-brown-700 bg-beige text-black"  // <-- Add text-black here
        >
          <option disabled defaultValue=""></option>
          <option value="artificer">Artificer</option>
          <option value="barbarian">Barbarian</option>
        </select>
        <div className="text-2xl text-brown-700">
          {charClass?.name || "No Class Selected"}
        </div>
        Character Attribute Points Remaining: {character.AttributePoints}
        <ul>
          {Object.keys(character.Attributes).map((attribute, index) => {
            return (
              <li key={index}>
                <PointBuyLine character={character} attribute={attribute as AttributeType} updateCharacter={updateCharacter} />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
