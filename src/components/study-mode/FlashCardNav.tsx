import {type Card} from "../../types"

type Props = {changeCard(index: number): void; currentCardIndex: number; shuffledCards: Card[]}

export default function FlashCardNav({changeCard, currentCardIndex, shuffledCards}: Props) {
	return (
		<div className="flex justify-between items-center py-4">
			<button
				className="p-3 border border-color rounded-full hover:bg-neutral-100 cursor-pointer focus-blue"
				onClick={() => changeCard(-1)}
				aria-label="Click to go previous flashcard">
				<img src="/images/icon-chevron-left.svg" aria-hidden="true" />
			</button>
			<p className="text-neutral-600 text-sm/[1.4] font-medium" aria-live="polite">
				Card {currentCardIndex + 1} of {shuffledCards.length}
			</p>
			<button
				className="p-3 border border-color rounded-full hover:bg-neutral-100 cursor-pointer focus-blue"
				onClick={() => changeCard(+1)}
				aria-label="Click to go next flashcard">
				<img src="/images/icon-chevron-right.svg" aria-hidden="true" />
			</button>
		</div>
	)
}
