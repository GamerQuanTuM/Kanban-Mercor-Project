"use client";

import { FC, useState, useEffect } from "react";
import { cardData } from "@/constants/cardData";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todos } from "@/utils/index";
import { useGlobalContext } from "@/store";
import useDebounce from "@/hooks/useDebounce";

const Home: FC = () => {
  const { searchTerm } = useGlobalContext();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  

  const [notStartedTodos, setNotStartedTodos] = useState<Array<Todo>>(
    cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "not started" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );
  const [startedTodos, setStartedTodos] = useState<Array<Todo>>(
    cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "started" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>(
    cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "completed" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );

  useEffect(() => {
    const filteredNotStartedTodos = cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "not started" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    const filteredStartedTodos = cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "started" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    const filteredCompletedTodos = cardData[0].todos.filter(
      (todo: Todo) =>
        todo.status === "completed" &&
        todo.title!.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    setNotStartedTodos(filteredNotStartedTodos);
    setStartedTodos(filteredStartedTodos);
    setCompletedTodos(filteredCompletedTodos);
  }, [debouncedSearchTerm]);

  const findTodoById = (id: string, array: Todo[]) => {
    return array.find((todo: Todo) => todo.id === id);
  };

  const removeTodoById = (id: string, array: Todo[]) => {
    return array.filter((todo: Todo) => todo.id !== id);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let updatedNotStartedTodos = [...notStartedTodos];
    let updatedStartedTodos = [...startedTodos];
    let updatedCompletedTodos = [...completedTodos];

    const todo = findTodoById(draggableId, [
      ...notStartedTodos,
      ...startedTodos,
      ...completedTodos,
    ]);

    if (source.droppableId === "1") {
      updatedNotStartedTodos = removeTodoById(
        draggableId,
        updatedNotStartedTodos
      );
    } else if (source.droppableId === "2") {
      updatedStartedTodos = removeTodoById(draggableId, updatedStartedTodos);
    } else if (source.droppableId === "3") {
      updatedCompletedTodos = removeTodoById(
        draggableId,
        updatedCompletedTodos
      );
    }

    if (destination.droppableId === "1") {
      updatedNotStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "not started",
      });
    } else if (destination.droppableId === "2") {
      updatedStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "started",
      });
    } else if (destination.droppableId === "3") {
      updatedCompletedTodos.splice(destination.index, 0, {
        ...todo,
        status: "completed",
      });
    }

    setNotStartedTodos(updatedNotStartedTodos);
    setStartedTodos(updatedStartedTodos);
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[15px]">
        <Todos todos={notStartedTodos} status="not started" draggableId="1" />
        <Todos todos={startedTodos} status="started" draggableId="2" />
        <Todos todos={completedTodos} status="completed" draggableId="3" />
      </div>
    </DragDropContext>
  );
};

export default Home;
