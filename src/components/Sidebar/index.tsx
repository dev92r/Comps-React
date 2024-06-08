import { Stack } from "@fluentui/react";
import Link from "../Link";

function Sidebar() {
  const links = [
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Counter", path: "/counter" },
  ];
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {links.map((link) => {
        return (
          <Stack.Item key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </Stack.Item>
        );
      })}
    </Stack>
  );
}
export default Sidebar;
