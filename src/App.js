// import { MyResponsiveGrid } from './MyResponsiveGrid';
import ReactGridLayout, { WidthProvider } from "react-grid-layout";

import './App.css';
import { MyFirstGrid } from './MyFirstGrid';

function App() {
  const GridLayout = WidthProvider(ReactGridLayout);

  return (
    <div className="App">
      <header className="App-header">
<MyFirstGrid/>
      </header>
    </div>
  );
}

export default App;
