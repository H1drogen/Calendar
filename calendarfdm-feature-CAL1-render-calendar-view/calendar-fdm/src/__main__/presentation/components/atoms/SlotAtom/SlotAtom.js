import React from 'react';
import "./SlotAtom.css";

export default class SlotAtom extends React.Component {
    static slotIdGenerator = 1;
    #slotId;

    constructor() {
        super();
        this.#slotId = "slot" + SlotAtom.slotIdGenerator;
        SlotAtom.slotIdGenerator++;
    }

    static resetSlotId () {this.slotIdGenerator = 1; }

    handleDragEnter = (event) => {        
        event.preventDefault();

        const targetElement = event.target;
        const droppedElement = document.getElementById(event.dataTransfer.getData('text/plain'));

        if (droppedElement instanceof Node && droppedElement.classList.contains("drag-item")) {
            targetElement.appendChild(droppedElement);
        } else {
            console.log("Invalid elements. Check the values of targetElement and droppedElement.");
        }
    }

    render() {
        const { date, targetId} = this.props;
        return (
            <div className="slot" data-testid="test-slot" id={this.#slotId} onDrop={this.handleDrop} onDragEnter={this.handleDragEnter}>
            </div>
        )
    }
}
