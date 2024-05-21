import { Stack } from "@fluentui/react";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <Stack.Item>
        <Sidebar />
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
            <Route path={"/buttons"}>
              <ButtonPage />
            </Route>
          </Stack.Item>
          <Stack.Item>
            <Route path={"/modal"}>
              <ModalPage />
            </Route>
          </Stack.Item>
          <Stack.Item>
            <Route path={"/table"}>
              <TablePage />
            </Route>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}

export default App;
