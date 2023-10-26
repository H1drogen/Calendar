import './App.css';
import SlotAtom from './__main__/presentation/components/atoms/SlotAtom/SlotAtom';
import DragItemMolecule from './__main__/presentation/components/molecules/DragItemMolecule/DragItemMolecule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The calendar space</p>
        <DragItemMolecule>TestDragItem</DragItemMolecule>
        <div id="calendar-body">
          <SlotAtom></SlotAtom>
        </div>
      </header>
    </div>
  );
}
export default App;
