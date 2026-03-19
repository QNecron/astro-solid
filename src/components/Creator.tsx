import { createStore } from 'solid-js/store';

export default function Creator() {
  const [getCharacter, setCharacter] = createStore({
    name: "Gimli",
    ancestry: "Dwarf"
  });

  const races = ["Dwarf", "Human"];

  return (
    <>
      <p>Name: {getCharacter.name} the {getCharacter.ancestry}</p>

      <div class="input">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          value={getCharacter.name}
          autocomplete="off"
          onInput={(e) => setCharacter("name", e.currentTarget.value)}
        />
      </div>

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
