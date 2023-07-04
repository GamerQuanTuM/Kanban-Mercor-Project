import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import {
  CommentsIcon,
  FilesIcon,
  Person1 as person1,
  Person2 as person2,
  Person3 as person3,
  Person4 as person4,
} from "@/utils/icon";

interface Props {
  todo: Todo;
}

interface PictureData {
  [key: string]: StaticImageData;
}

const TodoFooter: FC<Props> = ({ todo }) => {
  let { users } = todo;
  if (!users) return;

  const showUsers = users.length > 4 ? users.slice(0, 4) : users;
  const number = users.length > 4 ? users.length - 4 : 0;

  const usersList: PictureData = {
    person1,
    person2,
    person3,
    person4,
  };
  const overlap = "right";
  return (
    <footer className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:items-center">
      <div className="flex">
        {showUsers.map((user, idx) => {
          const styles =
            overlap === "right"
              ? {
                  zIndex: 20 - idx,
                  marginLeft: true ? "-4px" : "-8px",
                }
              : {
                  zIndex: 20 + idx,
                  marginRight: true ? "-4px" : "-8px",
                };
          return (
            <Image
              src={usersList[user]}
              alt={user}
              className="border border-white rounded- w-6 h-6"
              style={styles}
              key={user}
            />
          );
        })}
        {number !== 0 && (
          <span className="flex justify-center items-center bg-[#F4D7DA] border border-white rounded-full text-red text-[15px] font-medium z-40 h-6 w-6">
            +{number}
          </span>
        )}
      </div>
      <section className="flex flex-col gap-[14px] sm:flex-row sm:items-center">
        <span className="flex gap-[5px] items-center text-xs font-medium text-[#787486]">
          <Image src={CommentsIcon} alt="CommentsIcon" />
          {todo.comments + " comments"}
        </span>
        <span className="flex gap-[5px] items-center text-xs font-medium text-[#787486]">
          <Image src={FilesIcon} alt="FilesIcon" />
          {todo.files + " files"}
        </span>
      </section>
    </footer>
  );
};

export default TodoFooter;
