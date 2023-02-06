import { useState } from "react";
import ListingBody from "./components/ListingBody";
import { ContextProductCount } from "./utils/context-product";

export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <ContextProductCount.Provider
      value={{ contextProductCount, setContextProductCount }}
    >
      <ListingBody />
    </ContextProductCount.Provider>
  );
}
