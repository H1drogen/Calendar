import './App.css';
import DragItemMolecule from './__main__/presentation/components/molecules/DragItemMolecule/DragItemMolecule';
import WeekOrgansim from './__main__/presentation/components/organsim/WeekOrgansim/WeekOrgansim';

function App() {
 const rowElementsArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>The calendar space</p>
        <DragItemMolecule>TestDragItem</DragItemMolecule>
        <div id="calendar-body">
          <WeekOrgansim weekStartDate="2000-10-30" rowElements={rowElementsArray} />
        </div>
      </header>
    </div>
  );
}
export default App;
