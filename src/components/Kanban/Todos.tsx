import Image from "next/image";
import { FC } from "react";
import { CreateIcon } from "@/utils/icon";
import { DroppableTodos } from "@/utils/index";

interface Props {
  todos: Todo[];
  status: string;
  draggableId: string;
}

const Todos: FC<Props> = ({ todos, status, draggableId }) => {
  const borderColor =
    status === "not-started"
      ? "border-b-[#5030E5]"
      : status === "started"
      ? "border-b-[#FFA500]"
      : "border-b-[#8BC48A]";

  const dotColor =
    status === "not-started"
      ? "bg-[#5030E5]"
      : status === "started"
      ? "bg-[#FFA500]"
      : "bg-[#76A5EA]";
  return (
    <div className="relative bg-[#F5F5F5] rounded-2xl p-5 flex flex-col gap-5">
      <header
        className={`flex items-center gap-2 text-base font-medium text-black mb-2 pb-[22px] border-b-[3px] ${borderColor}`}
      >
        <div className={`w-[8px] h-[8px] rounded-full ${dotColor}`}></div>
        <span className="text-base font-medium text-[#0D062D]">
          {status === "not-started"
            ? "To Do"
            : status === "started"
            ? "On Progress"
            : "Done"}
        </span>
        <span className="w-5 h-5 rounded-full bg-[#E0E0E0] flex justify-center items-center text-xs font-medium text-dusky-black mx-1">
          {todos.length}
        </span>
        {status === "not-started" && (
          <span className="absolute top-[22px] right-[22px]">
            <Image src={CreateIcon} alt="CreateIcon" />
          </span>
        )}
      </header>
      <DroppableTodos droppableId={draggableId} todos={todos} />
    </div>
  );
};

export default Todos;
