import { createStore } from 'solid-js/store';

export default function Creator() {
  const [getCharacter, setCharacter] = createStore({
    name: "Gimli",
    ancestry: "Dwarf"
  });

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
        <label for="ancestry">Name</label>
        <input
          id="ancestry"
          type="text"
          value={getCharacter.ancestry}
          autocomplete="off"
          onInput={(e) => setCharacter("ancestry", e.currentTarget.value)}
        />
      </div>
    </>
  );
}
