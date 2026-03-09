import {type Card} from "../../types.tsx"

type Props = {
	currentCard: Card | null
	setFlashcards: React.Dispatch<React.SetStateAction<Card[]>>
}

export default function FlashCardActions({currentCard, setFlashcards}: Props) {
	return (
		<div className="text-base[1.2] font-medium grid place-items-center gap-2.5 pb-2 relative after:absolute after:-bottom-4 after:-left-4 after:-right-4 after:h-0.5 after:bg-neutral-900">
			<button
				className="flex gap-2 items-center justify-center w-full bg-yellow-500 py-3 rounded-full border border-color shadow-2 cursor-pointer hover:shadow-4 focus-visible:shadow-focus focus-visible:outline-none"
				//prettier-ignore
				onClick={() =>
						setFlashcards((prev) => prev.map((card) => {
							return card.id === currentCard?.id ? {...card, knownCount: card.knownCount + 1} : card
					}))}
				disabled={(currentCard?.knownCount ?? 0) >= 5 ? true : false}>
				<img src="/images/icon-circle-check.svg" aria-hidden="true" />I Know This
			</button>
			<button
				className="flex gap-2 items-center justify-center w-full py-3 rounded-full border border-color shadow-2 cursor-pointer hover:shadow-4 focus-visible:shadow-focus focus-visible:outline-none"
				//prettier-ignore
				onClick={() =>
						setFlashcards((prev) => prev.map((card) => {
							return card.id === currentCard?.id ? {...card, knownCount: 0} : card
						}))}>
				<img src="/images/icon-reset.svg" aria-hidden="true" /> Reset Progress
			</button>
		</div>
	)
}
