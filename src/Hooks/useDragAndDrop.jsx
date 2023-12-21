import { useDrop } from 'react-dnd';

const DND_ITEM_TYPE = 'TASK';

const useDragAndDrop = (onDrop) => {
  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    drop: (item, monitor) => {
      const { id, status } = item;
      onDrop(id, status);
    },
  });

  return { drop };
};

export default useDragAndDrop;
