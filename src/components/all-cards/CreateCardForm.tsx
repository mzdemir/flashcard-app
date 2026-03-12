import {nanoid} from "nanoid"
import {CardContext} from "../../App"
import {useContext, useState, useRef} from "react"

type Props = {
	action: string
	displayModal: {update: boolean; delete: boolean; id: string}
	setDisplayModal: React.Dispatch<React.SetStateAction<{update: boolean; delete: boolean; id: string}>>
}

export default function CreateCardForm({action, displayModal, setDisplayModal}: Props) {
	const [showHintTexts, setShowHintTexts] = useState({question: false, answer: false, category: false})
	const {setFlashcards} = useContext(CardContext)
	const formRef = useRef<HTMLFormElement>(null)

	function addNewCard(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.target)
		const question = formData.get("question") as string
		const answer = formData.get("answer") as string
		const category = formData.get("category") as string

		if (!question) return setShowHintTexts(prev => ({...prev, question: true}))
		if (!answer) return setShowHintTexts(prev => ({...prev, answer: true}))
		if (!category) return setShowHintTexts(prev => ({...prev, category: true}))

		if (action === "create") {
			setFlashcards(prev => [
				{id: nanoid(5), question: question, answer: answer, category: category, knownCount: 0},
				...prev,
			])
			if (formRef.current) formRef.current.reset()
		}

		// prettier-ignore
		if (action === "update") {
			setFlashcards(prev => prev.map(p => {
					return p.id === displayModal.id ? {...p, question, answer, category} : p
				})
			)
			setDisplayModal(prev => ({...prev, update: false}))
		}
	}

	return (
		<form
			onSubmit={addNewCard}
			className="bg-neutral-0 p-5 rounded-2xl grid gap-4 text-base/[1.2] border border-r-4 border-b"
			ref={formRef}>
			<label className="grid gap-2 font-medium">
				Question
				<input
					name="question"
					className={`border rounded-md p-4 font-normal ${showHintTexts.question && "border-pink-700 shadow-invalid"} focus-visible:border-blue-600 focus-visible:shadow-focus focus-visible:outline-none`}
					placeholder="e.g., What is the capital of France?"
					onChange={() => setShowHintTexts(prev => ({...prev, question: false}))}
				/>
				{showHintTexts.question && (
					<p className="flex gap-1.5 items-center text-sm/[1.4] font-normal text-pink-700">
						<img className="size-3.5" src="/images/icon-error.svg" aria-hidden="true" />
						Please enter a question.
					</p>
				)}
			</label>
			<label className="grid gap-2 font-medium">
				Answer
				<textarea
					name="answer"
					className={`border rounded-md p-4 font-normal ${showHintTexts.answer && "border-pink-700 shadow-invalid"} resize-none min-h-25  focus-visible:border-blue-600 focus-visible:shadow-focus focus-visible:outline-none`}
					placeholder="e.g., Paris"
					onChange={() => setShowHintTexts(prev => ({...prev, answer: false}))}></textarea>
				{showHintTexts.answer && (
					<p className="flex gap-1.5 items-center text-sm/[1.4] font-normal text-pink-700">
						<img className="size-3.5" src="/images/icon-error.svg" aria-hidden="true" />
						Please enter an answer.
					</p>
				)}
			</label>
			<label className="grid gap-2 font-medium">
				Category
				<input
					type="text"
					name="category"
					className={`border rounded-md p-4 font-normal ${showHintTexts.category && "border-pink-700 shadow-invalid"}  focus-visible:border-blue-600 focus-visible:shadow-focus focus-visible:outline-none`}
					placeholder="e.g., Geography"
					onChange={() => setShowHintTexts(prev => ({...prev, category: false}))}
				/>
				{showHintTexts.category && (
					<p className="flex gap-1.5 items-center text-sm/[1.4] font-normal text-pink-700">
						<img className="size-3.5" src="/images/icon-error.svg" aria-hidden="true" />
						Please enter a category.
					</p>
				)}
			</label>
			<button className="flex items-center justify-center gap-2 font-semibold justify-self-start bg-yellow-500 py-3 px-5 border rounded-full shadow-2 hover:shadow-4 cursor-pointer  focus-visible:shadow-focus focus-visible:outline-none">
				<img src="/images/icon-circle-plus.svg" aria-hidden="true" />
				Create Card
			</button>
		</form>
	)
}
