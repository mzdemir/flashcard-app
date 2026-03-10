import FlashCardHeader from "../shared/FlashCardHeader"
import CreateCardForm from "./CreateCardForm"
import FlashCardsContainer from "./FlashCardsContainer"
import useGetFlashCard from "../../hooks/useGetFlashCard"

import {useState} from "react"
const cardsPerTime = 12
export default function AllCardsContainer() {
	const {shuffledCards, setShuffle, setFilters, setIsHideMastered} = useGetFlashCard()
	const [visibleCardCount, setVisibleCardCount] = useState(cardsPerTime)

	const cardsToDisplay = shuffledCards.slice(0, visibleCardCount)
	const hasMoreItems = visibleCardCount < shuffledCards.length

	return (
		<>
			<CreateCardForm />
			<FlashCardHeader
				setShuffle={setShuffle}
				setFilters={setFilters}
				setIsHideMastered={setIsHideMastered}
			/>
			<FlashCardsContainer cardsToDisplay={cardsToDisplay} />

			{hasMoreItems && (
				<button
					onClick={() => setVisibleCardCount(prev => prev + cardsPerTime)}
					className="bg-neutral-0 text-base/[1.2] font-medium w-fit m-auto px-5 py-3 border rounded-full shadow-2 cursor-pointer hover:shadow-4 focus-visible:shadow-focus focus-visible:outline-none">
					Load More
				</button>
			)}
		</>
	)
}
