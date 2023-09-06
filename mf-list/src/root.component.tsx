import { useEffect, useState } from "react";
import { ITodo, storeTodo } from "@fgaviria/store";

export default function Root(props) {
	const [todos, setTodos] = useState<ITodo[]>([]);
	useEffect(() => {
		const subscription = storeTodo.storeTodo$.subscribe((todos) =>
			setTodos(todos)
		);

		return () => {
			subscription.unsubscribe();
		};
		console.log("Root");
	}, []);

	return (
		<section>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</section>
	);
}
