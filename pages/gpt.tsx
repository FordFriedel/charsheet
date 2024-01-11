// ... (existing imports)

export default function Home() {
  const [character, setCharacter] = useState<Character>(new Character());
  const [charClass, setCharClass] = useState<CharClass | undefined>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClassDrop = (e: any) => {
    setCharClass(charClassFactory(e.target.value!));
  };
  const updateCharacter = (newCharacter: Character) => {
    setCharacter(newCharacter);
    console.log("test");
  };

  const decreaseAttribute = () => {
    // Add logic to decrease the attribute value
  };

  const increaseAttribute = () => {
    // Add logic to increase the attribute value
  };

  const renderAttributeRow = (attribute: string, newAttribute: number, raceBonus: number) => (
    <tr key={attribute}>
      <td>{attribute}</td>
      <td>
        <button
          onClick={decreaseAttribute}
          className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-md hover:bg-brown-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          -
        </button>
      </td>
      <td>{newAttribute}</td>
      <td>
        <button
          onClick={increaseAttribute}
          className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-brown-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          +
        </button>
      </td>
      <td>{`Racial Bonus: ${raceBonus}`}</td>
      <td>{`Total: ${newAttribute + raceBonus}`}</td>
    </tr>
  );

  return (
    <main className="bg-beige min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg border-4 border-dashed border-brown-900 bg-wood-pattern shadow-lg text-center">
        {/* ... (existing code) */}
        
        {/* Attribute Table */}
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Decrease</th>
              <th>New Value</th>
              <th>Increase</th>
              <th>Racial Bonus</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {renderAttributeRow("Strength", character.Attributes.Strength, 2)}
            {renderAttributeRow("Dexterity", character.Attributes.Dexterity, 1)}
            {/* Add more attribute rows as needed */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
