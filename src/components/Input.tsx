interface Props {
  name: string;
  type: string;
  id: string;
  autocomplete?: string | "off";
  value: string;
  inputEvent?: (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => void;
}

export default function Input({
  name,
  type,
  id,
  autocomplete,
  value,
  inputEvent
}: Props) {

  return (
    <div class="input">
      <label for={id} class="input__label">{name}</label>
      <input
        id={id}
        class="input__field"
        type={type}
        autocomplete={autocomplete}
        value={value}
        onInput={inputEvent}
      />
    </div>
  );
}
