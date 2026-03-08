import {CardContext} from "../App"
import {FiltersContext} from "./FlashCardContainer"

import {useState, useContext, useEffect, useMemo} from "react"

interface Card {
	id: string
	question: string
	answer: string
	category: string
	knownCount: number
}

export default function FlashCard({shuffle}) {
	const {flashcards, setFlashcards} = useContext(CardContext)
	const {filters} = useContext(FiltersContext)

	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	const [currentCardIndex, setCurrentCardIndex] = useState(0)
	const [showAnswer, setShowAnswer] = useState(false)

	const filteredCards = filters.length > 0 ? flashcards.filter((f) => filters.includes(f.category)) : flashcards
	const shuffledCards = useMemo(() => {
		return shuffle ? shuffleArray(filteredCards) : filteredCards
	}, [filteredCards, shuffle])

	function shuffleArray(array: Card[]) {
		const shuffled = [...array]
		for (let i = shuffled.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1))
			const current = shuffled[i]
			shuffled[i] = shuffled[randomIndex]
			shuffled[randomIndex] = current
		}
		return shuffled
	}

	useEffect(() => {
		setCurrentCard(shuffledCards[currentCardIndex])
	}, [shuffledCards, currentCardIndex])

	function changeCard(index: number) {
		setCurrentCardIndex((prev) => {
			const next = prev + index
			if (next < 0) return 0
			if (next >= shuffledCards.length) return prev
			return next
		})
	}

	return (
		<>
			<div
				className={`${!showAnswer ? "bg-pink-400" : "bg-blue-400"} h-90 grid place-items-center gap-4 px-4 py-5 border-2 border-color rounded-2xl shadow-2`}>
				<span className="text-preset-6 font-medium bg-neutral-0 px-3 py-1.5 border border-color rounded-full shadow-0 self-start">
					{currentCard?.category}
				</span>
				<div className="grid items-stretch gap-4" onClick={() => setShowAnswer(true)}>
					<p className="text-preset-1 font-bold text-center">
						{!showAnswer ? currentCard?.question : currentCard?.answer}
					</p>
					{!showAnswer && <p className="text-preset-4 font-medium text-center opacity-80">Click to reveal answer</p>}
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

			<div className="text-preset-4 font-medium grid place-items-center gap-2.5 pb-2 relative after:absolute after:-bottom-4 after:-left-4 after:-right-4 after:h-0.5 after:bg-neutral-900">
				<button
					className="flex gap-2 items-center justify-center w-full bg-yellow-500 py-3 rounded-full border border-color shadow-2 cursor-pointer"
					//prettier-ignore
					onClick={() =>
						setFlashcards((prev) => prev.map((card) => {
							return card.id === currentCard?.id ? {...card, knownCount: card.knownCount + 1} : card
					}))}
					disabled={(currentCard?.knownCount ?? 0) >= 5 ? true : false}>
					<img src="/images/icon-circle-check.svg" aria-hidden="true" />I Know This
				</button>
				<button
					className="flex gap-2 items-center justify-center w-full py-3 rounded-full border border-color shadow-2  cursor-pointer"
					//prettier-ignore
					onClick={() =>
						setFlashcards((prev) => prev.map((card) => {
							return card.id === currentCard?.id ? {...card, knownCount: 0} : card
						}))}>
					<img src="/images/icon-reset.svg" aria-hidden="true" /> Reset Progress
				</button>
			</div>

			<div className="flex justify-between items-center py-4">
				<button className="p-3 border border-color rounded-full" onClick={() => changeCard(-1)}>
					<img src="/images/icon-chevron-left.svg" aria-hidden="true" />
				</button>
				<p className="text-neutral-600 text-preset-5 font-medium">
					Card {currentCardIndex + 1} of {filteredCards.length}
				</p>
				<button className="p-3 border border-color rounded-full" onClick={() => changeCard(+1)}>
					<img src="/images/icon-chevron-right.svg" aria-hidden="true" />
				</button>
			</div>
		</>
	)
}
