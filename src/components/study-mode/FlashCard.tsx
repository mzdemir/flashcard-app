import {type Card} from "../../types.tsx"
import {useState, useEffect} from "react"

type Props = {
	currentCard: Card | null
	setCurrentCard: React.Dispatch<React.SetStateAction<Card | null>>
	shuffledCards: Card[]
	currentCardIndex: number
}

export default function FlashCard({currentCard, setCurrentCard, shuffledCards, currentCardIndex}: Props) {
	const [showAnswer, setShowAnswer] = useState(false)

	useEffect(() => {
		setCurrentCard(shuffledCards[currentCardIndex])
	}, [shuffledCards, currentCardIndex, setCurrentCard])

	return (
		<div
			onClick={() => setShowAnswer((prev) => !prev)}
			className={`${!showAnswer ? "bg-pink-400" : "bg-blue-400"} bg-[url(/images/pattern-flashcard-bg.svg)] bg-center h-90 grid place-items-center gap-4 px-4 py-5 border-2 border-color rounded-2xl shadow-2 relative cursor-pointer`}>
			<img
				className="size-6 absolute top-10 right-7.5"
				src={`/images/pattern-star-${!showAnswer ? "blue" : "pink"}.svg`}
				aria-hidden="true"
			/>

			<img className="size-8 absolute left-7 bottom-8" src="/images/pattern-star-yellow.svg" aria-hidden="true" />

			<span className="text-xs/[1.2] font-medium bg-neutral-0 px-3 py-1.5 border border-color rounded-full shadow-0 self-start">
				{currentCard?.category}
			</span>
			<div
				className={`flex items-stretch gap-3 transition-all duration-500 ${showAnswer ? " flex-col-reverse" : "flex flex-col"}`}>
				<p className="text-xl/[1.2] font-bold text-center">
					{!showAnswer ? currentCard?.question : currentCard?.answer}
				</p>
				<p className="text-base[1.2] font-medium text-center opacity-80">
					{!showAnswer ? "Click to reveal answer" : "Answer:"}
				</p>
			</div>
			<div className="self-end flex gap-2 items-center">
				<div className="w-15 h-2 my-1 bg-neutral-0 rounded-full border flex items-center">
					<div
						style={{width: `${(currentCard?.knownCount ?? 0) * 20}%`}}
						className="bg-neutral-900 h-2 rounded-full transition-all duration-300 ease-in-out"></div>
				</div>
				<span className="text-xs/[1.3] font-medium tracking-[-3%]">{currentCard?.knownCount}/5</span>
			</div>
		</div>
	)
}
