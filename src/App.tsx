import { Stack } from "@fluentui/react";
import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";

function App() {
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <Stack.Item>
        <Stack tokens={{ childrenGap: 10 }}>
          <Stack.Item>
            <Link to={"/accordion"}>Accordion</Link>
          </Stack.Item>
          <Stack.Item>
            <Link to={"/dropdown"}>Dropdown</Link>
          </Stack.Item>
          <Stack.Item>
            <Link to={"/button"}>Buttons</Link>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item grow>
        <Stack>
          <Stack.Item>
            <Route path={"/accordion"}>
              <AccordionPage />
            </Route>
          </Stack.Item>
          <Stack.Item>
            <Route path={"/dropdown"}>
              <DropdownPage />
            </Route>
          </Stack.Item>
          <Stack.Item>
            <Route path={"/button"}>
              <ButtonPage />
            </Route>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}

export default App;
