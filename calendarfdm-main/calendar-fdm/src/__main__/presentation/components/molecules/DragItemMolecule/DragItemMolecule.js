import React from 'react'
import './DragItemMolecule.css' 

export default class DragItemMolecule extends React.Component {
  static dragItemIdGenerator = 1;
  #dragItemId;
  
  constructor() {
    super();
    this.#dragItemId = "drag-item" + DragItemMolecule.dragItemIdGenerator;
    DragItemMolecule.dragItemIdGenerator++;
  }

  static resetDragItemId () {DragItemMolecule.dragItemIdGenerator = 1; }

  handleDragStart = (event) => {
    console.log("DRAG STARTING: ");
    console.log(event.target);
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  render() {
    return (
      <div data-testid='drag-item' id={this.#dragItemId} className='drag-item' draggable='true' onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    )
  }
}
