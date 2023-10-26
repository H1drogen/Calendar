import React from 'react';
import { render } from '@testing-library/react';
import DragItemMolecule from '../../../../__main__/presentation/components/molecules/DragItemMolecule/DragItemMolecule';

describe('DragItemMolecule', () => {
    it('renders an item with class drag-item', () => {
        //arrange
        const { container } = render(<DragItemMolecule />);
  
        //act
        const element = container.querySelector(".drag-item");

        //assert
        expect(element).toBeInTheDocument;
    });
});

describe('DragItemMolecule', () => {
    it('resets the drag-item id number when resetDragItemId is called', () => {
        //arrange
        DragItemMolecule.resetDragItemId();
        const { container } = render(<DragItemMolecule />);

        //act
        const element = container.querySelector("#drag-item1");

        //assert
        expect(element).toBeInTheDocument;

    });
});

describe('DragItemMolecule', () => {
    it('increments the slot id number each time a DragItemMolecule is rendered, rendering id="drag-item2" on the second render', () => {
        //arrange
        DragItemMolecule.resetDragItemId();
        const { container } = render(
            <>
                <DragItemMolecule />
                <DragItemMolecule />
            </>
        );

        //act
        const element = container.querySelector("#drag-item2");

        //assert
        expect(element).toBeInTheDocument;
    });
});

describe('DragItemMolecule', () => {
    it('in handleDragStart, the event.dataTransfer.setData is called passing in the DragItemMolecule id', () => {
        
        /* Arrange: 
        -   render DragItemMolecule id to 1
        -   create a mock function to record if event.dataTransfer.setData is called with the correct input
        -   render a DragItemMolecule and retrieve it
        -   set up a dragStartEvent, passing in the mock setData
        */
        DragItemMolecule.resetDragItemId();

        const eventDataTransferSetDataMock = jest.fn();

        const { getByTestId } = render(<DragItemMolecule />);
        const dragElement = getByTestId('drag-item');

        const dragStartEvent = new Event('dragstart', { bubbles: true });
        dragStartEvent.dataTransfer = {
            types: ['text/plain'],
            setData: eventDataTransferSetDataMock
        };
    
        //act
        dragElement.dispatchEvent(dragStartEvent);  
        
        //assert
        expect(eventDataTransferSetDataMock).toHaveBeenCalledWith('text/plain', dragElement.id);
    });
});