import { MantineProvider } from "@mantine/core";
import React from "react";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <App />
    </MantineProvider>
  );
};

export default App;
