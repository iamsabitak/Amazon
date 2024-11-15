import { MantineProvider } from "@mantine/core";
import React from "react";
import Homepage from "./components/Homepage";
import "@mantine/core/styles.css";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Homepage />
    </MantineProvider>
  );
};

export default App;
