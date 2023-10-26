import React from 'react';
import { render } from '@testing-library/react';
import SlotAtom from '../../../../__main__/presentation/components/atoms/SlotAtom/SlotAtom';

describe('SlotAtom', () => {
    it('renders an item with class slot', () => {
        //arrange
        const { container } = render(<SlotAtom />);
  
        //act
        const element = container.querySelector(".slot");

        //assert
        expect(element).toBeInTheDocument;
    });
});

describe('SlotAtom', () => {
    it('resets the slot id number when resetSlotId is called', () => {
        //arrange
        SlotAtom.resetSlotId();
        const { container } = render(<SlotAtom />);

        //act
        const element = container.querySelector("#slot1");

        //assert
        expect(element).toBeInTheDocument;

    });
});

describe('SlotAtom', () => {
    it('increments the slot id number each time a SlotAtom is rendered, rendering id="slot2" on the second render', () => {
        //arrange
        SlotAtom.resetSlotId();
        const { container } = render(
            <>
                <SlotAtom />
                <SlotAtom />
            </>
        );

        //act
        const element = container.querySelector("#slot2");

        //assert
        expect(element).toBeInTheDocument;
    });
});

describe('SlotAtom', () => {
    it('when the handleDragEvent is called, if the droppedElement is not a node, then appendChild is not called', () => {
        const appendChildMock = jest.fn();

        /* Arrange: 
        -   create appendChild mock
        -   render SlotAtom
        -   set droppableElement not to be instanceof Node
        -   set up dragEnter event
        */
        const { getByTestId } = render(<SlotAtom />);
        const slotElement = getByTestId('test-slot');
        const mockDroppableElement = jest.fn(() => false);
        Object.defineProperty(slotElement, 'appendChild', { value: appendChildMock });
        const dragEnterEvent = new Event('dragenter', { bubbles: true });
        dragEnterEvent.dataTransfer = {
            types: ['text/plain'],
            target: slotElement,
            getData: mockDroppableElement,
        };
    
        //act: 
        slotElement.dispatchEvent(dragEnterEvent);  

        // Assert: Check if appendChildMock was not called
        expect(appendChildMock).not.toHaveBeenCalled();
    });
});

describe('SlotAtom', () => {
    it('appendChild is not called when the droppedElement is node that does not contain the class "drag-item"', () => {
        
        /* Arrange: 
        -   render SlotAtom
        -   set droppableElement to be custom span element
        -   mock document.getByElementId to return droppableElement
        -   set up dragEnter event
        */
        SlotAtom.resetSlotId();

        const appendChildMock = jest.fn();

        const droppedElement = document.createElement('span');
        droppedElement.id = "test-element"

        const { getByTestId } = render(<SlotAtom />);
        const slotElement = getByTestId('test-slot');
        
        Object.defineProperty(slotElement, 'appendChild', { value: appendChildMock });
        const getElementByIdMock = jest.spyOn(document, 'getElementById').mockReturnValue(droppedElement);
        const dragEnterEvent = new Event('dragenter', { bubbles: true });
        dragEnterEvent.dataTransfer = {
            types: ['text/plain'],
            target: slotElement,
            getData: jest.fn((n) => droppedElement)
        };
    
        //act
        slotElement.dispatchEvent(dragEnterEvent);  
        getElementByIdMock.mockRestore();

        // Assert: Check if appendChildMock was called with droppedElement
        expect(appendChildMock).not.toHaveBeenCalled();
    });
});

describe('SlotAtom', () => {
    it('appendChild is not called when the droppedElement is node that does not contain the class "drag-item"', () => {
        
        /* Arrange: 
        -   render SlotAtom
        -   set droppableElement to be custom span element
        -   mock document.getByElementId to return droppableElement
        -   set up dragEnter event
        */
        SlotAtom.resetSlotId();

        const appendChildMock = jest.fn();

        const droppedElement = document.createElement('span');
        droppedElement.id = "test-element"
        droppedElement.classList.value ="drag-item"

        const { getByTestId } = render(<SlotAtom />);
        const slotElement = getByTestId('test-slot');
        
        Object.defineProperty(slotElement, 'appendChild', { value: appendChildMock });
        const getElementByIdMock = jest.spyOn(document, 'getElementById').mockReturnValue(droppedElement);
        const dragEnterEvent = new Event('dragenter', { bubbles: true });
        dragEnterEvent.dataTransfer = {
            types: ['text/plain'],
            target: slotElement,
            getData: jest.fn((n) => droppedElement)
        };
    
        //act
        slotElement.dispatchEvent(dragEnterEvent);  
        getElementByIdMock.mockRestore();

        // Assert: Check if appendChildMock was called with droppedElement
        expect(appendChildMock).toHaveBeenCalledWith(droppedElement);
    });
});