import { List, Stack } from "@fluentui/react";
import { FruitsItems, FruitsItemsConfig } from "../../Model/Fruits";

interface props {
  data: FruitsItems[];
  config: FruitsItemsConfig[];
}
function Table({ data, config }: props) {
  return (
    <Stack styles={{ root: { maxWidth: 500 } }}>
      <Stack horizontal horizontalAlign="space-evenly">
        {config.map((column) => {
          return (
            <Stack.Item align="center" styles={{ root: { minWidth: 100 } }}>
              {column.label}
            </Stack.Item>
          );
        })}
      </Stack>
      {data.map((rowData) => {
        return (
          <Stack horizontal horizontalAlign="space-evenly">
            {config.map((cellData) => {
              return (
                <Stack.Item align="center" styles={{ root: { minWidth: 100 } }}>
                  {cellData.render(rowData)}
                </Stack.Item>
              );
            })}
          </Stack>
        );
      })}
    </Stack>
  );
}
export default Table;
