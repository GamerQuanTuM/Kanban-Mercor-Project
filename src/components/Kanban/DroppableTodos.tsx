"use client";
import { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "@/utils/index";

interface Props {
  droppableId: string;
  todos: Todo[];
}

const DroppableTodos: FC<Props> = ({ droppableId, todos }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          className="flex flex-col gap-5"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos.map((todo: Todo, index: number) => (
            <Todo key={todo.id} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableTodos;
