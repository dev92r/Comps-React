import { useState } from "react";
import { DropdownOptions } from "../Model/Dropdown";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState<DropdownOptions>();
  const options: DropdownOptions[] = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleOnSelect = (option: DropdownOptions) => {
    setSelection(option);
  };

  return (
    <>
      <Dropdown onChange={handleOnSelect} options={options} value={selection} />
    </>
  );
}

export default DropdownPage;
