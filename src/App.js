import { Filters } from "./features/item/Filters";
import { ItemList } from "./features/item/ItemsList";

function App() {
  return (
    <div className="App">
      <ItemList />
      <Filters />
    </div>
  );
}

export default App;
