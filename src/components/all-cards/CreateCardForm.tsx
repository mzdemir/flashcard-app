export default function CreateCardForm() {
	return (
		<form
			action=""
			className="bg-neutral-0 p-5 rounded-2xl grid gap-4 text-base/[1.2] border border-r-4 border-b-4">
			<label className="grid gap-2 font-medium">
				Question
				<input
					name="question"
					className="border rounded-md p-4 font-normal"
					placeholder="e.g., What is the capital of France?"
				/>
			</label>
			<label className="grid gap-2 font-medium">
				Answer
				<textarea
					name="answer"
					className="border rounded-md p-4  font-normal resize-none"
					placeholder="e.g., Paris"
					rows={3}></textarea>
			</label>
			<label className="grid gap-2 font-medium">
				Category
				<input
					type="text"
					name="category"
					className="border rounded-md p-4 font-normal"
					placeholder="e.g., Geography"
				/>
			</label>
			<button className="flex items-center justify-center gap-2 font-semibold justify-self-start bg-yellow-500 py-3 px-5 border rounded-full shadow-2 hover:shadow-4 cursor-pointer">
				<img
					src="/images/icon-circle-plus.svg"
					aria-hidden="true"
				/>
				Create Card
			</button>
		</form>
	)
}
