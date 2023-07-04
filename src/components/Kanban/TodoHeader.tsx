import Image from "next/image";
import { FC } from "react";
import { PictureData } from "./Todo";
import { MenuIcon } from "@/utils/icon";

interface Props {
  todo: Todo;
  pictures: PictureData;
}

const TodoHeader: FC<Props> = ({ todo, pictures }) => {
  return (
    <>
      <header className="flex justify-between items-center mb-1">
        <span
          className={`text-xs font-medium capitalize py-1 px-[6px] rounded-[4px] ${
            todo.status === "completed"
              ? "bg-[#83C29D] bg-opacity-20 text-[#68B266]"
              : todo.priority === "low"
              ? "bg-[#DFA874] bg-opacity-20 text-[#D58D49]"
              : "bg-[#D8727D] bg-opacity-20 text-[#D8727D]"
          }`}
        >
          {todo.status === "completed" ? todo.status : todo.priority}
        </span>
        <Image src={MenuIcon} alt="MenuIcon" />
      </header>
      <main className="flex flex-col gap-[6px] mb-7">
        <h3 className="text-lg font-semibold">{todo.title}</h3>
        {todo.description && (
          <p className="text-xs font-normal text-[#787486]">
            {todo.description}
          </p>
        )}
        {todo?.image.length !== 0 && (
          <div className="flex flex-wrap justify-center md:justify-around items-center">
            {todo?.image?.map((picture: string) => {
              return (
                <Image
                  src={pictures[picture]}
                  alt={picture}
                  key={picture}
                  className="w-full md:w-auto max-w-full md:max-w-none mb-2 md:mb-0 mr-2"
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default TodoHeader;
