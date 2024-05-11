import { Icon, Stack } from "@fluentui/react";
import { AccordionItems } from "../../Model/Accordion";
import { useState } from "react";

export interface props {
  items: AccordionItems[];
}

export function Accordion({ items }: props) {
  const [isExpanded, setIsExpanded] = useState<number>();

  const handleOnClick = (index: number) => {
    setIsExpanded((currentExpandedIndex) => {
      return currentExpandedIndex !== index ? index : undefined;
    });
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {items.map((item, index) => {
        return (
          <Stack key={index} tokens={{ childrenGap: 6 }}>
            <Stack.Item onClick={() => handleOnClick(index)}>
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
                <Stack.Item grow align="start">
                  {item.label}
                </Stack.Item>
                <Stack.Item align="end">
                  <Icon
                    iconName={
                      isExpanded === index
                        ? "TriangleSolidDown12"
                        : "TriangleSolidUp12"
                    }
                  />
                </Stack.Item>
              </Stack>
            </Stack.Item>
            {isExpanded === index && (
              <Stack.Item tokens={{ padding: 10 }}>{item.content}</Stack.Item>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Accordion;
