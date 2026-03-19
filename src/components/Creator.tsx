import { createStore } from 'solid-js/store';

import Input from './Input';

export default function Creator() {
  const [getCharacter, setCharacter] = createStore({
    name: "Gimli",
    ancestry: "Dwarf"
  });

  const races = ["Dwarf", "Human"];

  return (
    <>
      <p>Name: {getCharacter.name} the {getCharacter.ancestry}</p>

      <Input
        type="text"
        id="name"
        name="Name"
        value={getCharacter.name}
        inputEvent={(e) => setCharacter("name", e.currentTarget.value)}
      />

      <div class="input">
        <label for="ancestry">Ancestry</label>
        <select
          id="ancestry"
          value={getCharacter.ancestry}
          onInput={(e) => setCharacter("ancestry", e.currentTarget.value)}
        >
          {races.map((data) => <option value={data}>{data}</option>)}
        </select>
      </div>
    </>
  );
}
