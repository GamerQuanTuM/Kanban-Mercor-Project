interface Todo {
    id?: string | number;
    title?: string;
    image?: any;
    description?: string;
    priority?: "low" | "completed" | "high";
    comments?: number;
    files?: number;
    users?: string[];
    status?: "not started" | "started" | "completed";
}

type CardData = {
    id: string;
    title: string;
    todos: Todo[];
    favColor: string;
}[];
