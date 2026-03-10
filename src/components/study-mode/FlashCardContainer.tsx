import FlashCardHeader from "../shared/FlashCardHeader"
import FlashCard from "./FlashCard"
import FlashCardNav from "./FlashCardNav"
import FlashCardActions from "./FlashCardActions"
import useGetFlashCard from "../../hooks/useGetFlashCard"

import {type Card} from "../../types"
import {CardContext} from "../../App"
import {useContext, useState} from "react"
import EmptyState from "./EmptyState"

export default function FlashCardContainer() {
	const {flashcards, setFlashcards} = useContext(CardContext)
	const {shuffledCards, setShuffle, setFilters, setIsHideMastered, masteredHidden} = useGetFlashCard()

	const [currentCard, setCurrentCard] = useState<Card | null>(null)
	const [currentCardIndex, setCurrentCardIndex] = useState(0)

	function changeCard(index: number) {
		setCurrentCardIndex(prev => {
			const next = prev + index
			if (next < 0) return 0
			if (next >= shuffledCards.length) return prev
			return next
		})
	}

	return (
		<section
			className="bg-neutral-0 grid  gap-4 px-4 rounded-2xl border border-color border-r-3 border-b-3"
			aria-live="assertive">
			<FlashCardHeader
				setShuffle={setShuffle}
				setFilters={setFilters}
				setIsHideMastered={setIsHideMastered}
			/>
			<hr className="-mx-4 -mbs-1" />
			{masteredHidden && flashcards.length > 0 ? (
				<>
					<FlashCard
						currentCard={currentCard}
						setCurrentCard={setCurrentCard}
						shuffledCards={shuffledCards}
						currentCardIndex={currentCardIndex}
					/>
					<FlashCardActions
						currentCard={currentCard}
						setFlashcards={setFlashcards}
					/>
					<FlashCardNav
						changeCard={changeCard}
						currentCardIndex={currentCardIndex}
						shuffledCards={shuffledCards}
					/>
				</>
			) : (
				<EmptyState />
			)}
		</section>
	)
}
