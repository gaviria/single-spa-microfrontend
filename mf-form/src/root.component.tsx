import { ITodo, storeTodo } from "@fgaviria/store";
export default function Root(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const text = e.target.text.value;
		const todo: ITodo = {
			id: storeTodo.id,
			text: text,
			completed: false,
		};

		storeTodo.addTodo(todo);

		console.log("handleSubmit: ", text);
		console.log(storeTodo);
	};

	console.log(storeTodo);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input type="text" name="text" id="text" />
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}
