import { Button } from "@core";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
      <Button>{"안녕"}</Button>
    </MantineProvider>
  );
}

export default App;
