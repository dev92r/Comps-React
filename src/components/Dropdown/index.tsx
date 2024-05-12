import { Stack, Text, Icon } from "@fluentui/react";
import { DropdownOptions } from "../../Model/Dropdown";
import { useEffect, useState, useRef } from "react";

interface props {
  options: DropdownOptions[];
  onChange: (option: DropdownOptions) => void;
  value: DropdownOptions | undefined;
}
export function Dropdown({ options, onChange, value }: props) {
  const [showOption, setShowOption] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!dropdownRef.current) {
        return;
      }

      if (!dropdownRef.current.contains(event.target as Node)) {
        setShowOption(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setShowOption(!showOption);
  };

  const handleOnSelect = (selectedOption: DropdownOptions) => {
    onChange(selectedOption);
    setShowOption(false);
  };

  return (
    <div ref={dropdownRef}>
      <Stack>
        <Stack.Item>
          <Text variant="small">Select a Color</Text>
        </Stack.Item>
        <Stack
          tokens={{ padding: 10 }}
          horizontal
          styles={{
            root: {
              background: "rgb(0,55,85)",
              color: "white",
            },
          }}
        >
          <Stack.Item grow align="start" onClick={handleClick}>
            {value?.label || "Select..."}
          </Stack.Item>
          <Stack.Item align="end">
            <Icon iconName="TriangleSolidDown12" />
          </Stack.Item>
        </Stack>
        {showOption && (
          <Stack
            tokens={{ childrenGap: 10, padding: 10 }}
            styles={{
              root: { border: "1px solid rgb(0,55,85)", borderTop: "none" },
            }}
          >
            {options.map((option, index) => {
              return (
                <Stack.Item
                  key={index}
                  styles={{ root: { cursor: "pointer" } }}
                  onClick={() => handleOnSelect(option)}
                >
                  {option.label}
                </Stack.Item>
              );
            })}
          </Stack>
        )}
      </Stack>
    </div>
  );
}

export default Dropdown;
