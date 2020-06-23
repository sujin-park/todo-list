import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import styled from 'styled-components';

interface CardProps {
  id: number;
  index: number;
  moveCard: (dragId: number, dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  id: number;
  index: number;
  type: string;
}

const ItemTypes = {
  CARD: 'card',
};

const DraggedContainer = styled.div`
  cursor: move;
  opacity: 1;
`;

const DraggedItem: React.FC<CardProps> = ({
  children,
  index,
  id,
  moveCard,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, index, id },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(item.id, dragIndex, hoverIndex);
    },
  });

  drag(drop(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <DraggedContainer ref={ref} style={{ opacity }}>
      {children}
    </DraggedContainer>
  );
};

export default DraggedItem;
