import {type Card} from "../../types"

type Props = {currentCard: Card | null}

export default function ProgressBar({currentCard}: Props) {
	return (
		<div
			className={`self-end flex gap-2 text-xs/[1.3] font-medium tracking-[-3%] ${currentCard?.knownCount === 5 && "bg-teal-400 px-3 py-1.5 rounded-full border shadow-0"}`}>
			{currentCard?.knownCount === 5 ? (
				<div className="flex gap-1.5">
					<img className="size-4" src="/images/icon-mastered.svg" aria-hidden="true" />
					Mastered
				</div>
			) : (
				<div className="w-15 h-2 my-1 bg-neutral-0 rounded-full border flex items-center">
					<div
						style={{width: `${(currentCard?.knownCount ?? 0) * 20}%`}}
						className="bg-neutral-900 h-2 rounded-full transition-all duration-300 ease-in-out"></div>
				</div>
			)}
			<span>{currentCard?.knownCount}/5</span>
		</div>
	)
}
