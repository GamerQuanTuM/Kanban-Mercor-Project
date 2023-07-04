"use client";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { StaticImageData } from "next/image";
import {
  Moodboard1,
  Moodboard2,
  MobileAppDesign,
  Onboarding,
} from "@/utils/icon";
import { TodoHeader, TodoFooter } from "@/utils";

interface Props {
  todo: Todo;
  index: number;
}

export interface PictureData {
  [key: string]: StaticImageData;
}

const Todo: FC<Props> = ({ index, todo }) => {
  const pictures: PictureData = {
    MobileAppDesign,
    Moodboard1,
    Moodboard2,
    Onboarding,
  };

  return (
    <Draggable draggableId={todo.id!.toString()} key={todo.id} index={index}>
      {(provided) => (
        <div className="rounded-2xl bg-purple-100">
          <div
            className="p-5 rounded-2xl bg-white"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TodoHeader todo={todo} pictures={pictures} />
            <TodoFooter todo={todo} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
