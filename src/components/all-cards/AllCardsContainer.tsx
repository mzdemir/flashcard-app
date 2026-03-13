import FlashCardHeader from "../shared/FlashCardHeader"
import CreateCardForm from "./CreateCardForm"
import FlashCardsContainer from "./FlashCardsContainer"
import useGetFlashCard from "../../hooks/useGetFlashCard"
import {useContext, useState} from "react"
import {CardContext} from "../../App"

const cardsPerTime = 12

export default function AllCardsContainer() {
	const {setFlashcards} = useContext(CardContext)
	const {shuffledCards, setShuffle, setFilters, setIsHideMastered} = useGetFlashCard()
	const [visibleCardCount, setVisibleCardCount] = useState(cardsPerTime)
	const [displayModal, setDisplayModal] = useState({update: false, delete: false, id: ""})

	const cardsToDisplay = shuffledCards.slice(0, visibleCardCount)
	const hasMoreItems = visibleCardCount < shuffledCards.length

	return (
		<>
			<CreateCardForm action="create" displayModal={displayModal} setDisplayModal={setDisplayModal} />

			<div className="lg:col-span-3">
				<FlashCardHeader setShuffle={setShuffle} setFilters={setFilters} setIsHideMastered={setIsHideMastered} />
			</div>

			{cardsToDisplay && cardsToDisplay.length > 0 ? (
				<FlashCardsContainer cardsToDisplay={cardsToDisplay} setDisplayModal={setDisplayModal} />
			) : (
				<section className="text-center grid gap-2.5">
					<p className="text-2xl/[1.2] font-semibold">No cards yet</p>
					<p className="text-base/[1.4] font-normal">
						Add your first card using the form above and it will show up here.
					</p>
				</section>
			)}

			{hasMoreItems && (
				<button
					onClick={() => setVisibleCardCount(prev => prev + cardsPerTime)}
					className="bg-neutral-0 text-base/[1.2] font-medium w-fit m-auto px-5 py-3 border rounded-full shadow-2 cursor-pointer hover:shadow-4 focus-visible:shadow-focus focus-visible:outline-none lg:col-span-3">
					Load More
				</button>
			)}

			{(displayModal.update || displayModal.delete) && (
				<div className="fixed bg-overlay z-10 inset-0 flex items-center justify-center">
					{displayModal.update && (
						<div className="max-w-150 w-full p-4 relative">
							<button
								className="absolute right-9 top-8"
								onClick={() => setDisplayModal(prev => ({...prev, update: false}))}
								aria-label="Click to close menu">
								<img src="/images/icon-cross.svg" aria-hidden="true" />
							</button>
							<CreateCardForm action="update" displayModal={displayModal} setDisplayModal={setDisplayModal} />
						</div>
					)}

					{displayModal.delete && (
						<div className="bg-neutral-0 grid text-base/[1.2] font-semibold max-w-150 w-full m-4 rounded-2xl divide-y">
							<div className="grid gap-2 p-6">
								<p className="text-[1.5rem]">Delete this card?</p>
								<p className="font-normal leading-[1.4]">This action can't be undone.</p>
							</div>
							<div className="ml-auto flex gap-2.5 pbs-3 px-6 pbe-4">
								<button
									className="px-4 py-3 border rounded-full cursor-pointer"
									onClick={() => setDisplayModal(prev => ({...prev, delete: false}))}>
									Cancel
								</button>
								<button
									className="px-5 py-3 border rounded-full bg-yellow-500 shadow-2 cursor-pointer"
									onClick={() => {
										setFlashcards(prev => prev.filter(p => p.id != displayModal.id))
										setDisplayModal(prev => ({...prev, delete: false}))
									}}>
									Delete Card
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}
