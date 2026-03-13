import CategoryDropDown from "./CategoryDropDown"

interface FlashCardHeaderProps {
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>
	setFilters: React.Dispatch<React.SetStateAction<string[]>>
	setIsHideMastered: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FlashCardHeader({setShuffle, setFilters, setIsHideMastered}: FlashCardHeaderProps) {
	return (
		<header className="grid grid-cols-[auto_auto] gap-y-2.5 pbs-3 text-base/[1.2] font-medium xs:grid-cols-[auto_1fr_1fr] xs:gap-4">
			<CategoryDropDown setFilters={setFilters} />
			<button
				className="flex items-center gap-2 justify-self-end px-4 py-3 bg-neutral-0 border border-color rounded-full hover:bg-neutral-100 cursor-pointer focus-blue xs:col-start-3"
				onClick={() => setShuffle(prev => !prev)}
				aria-label="Click to shuffle the flashcards">
				<img src="/images/icon-shuffle.svg" aria-hidden="true" />
				Shuffle
			</button>
			<label className="flex items-center gap-2 cursor-pointer xs:col-start-2 xs:row-start-1">
				<input
					type="checkbox"
					className="focus-blue"
					value="false"
					onChange={event => setIsHideMastered(event.target.checked)}
				/>
				Hide Mastered
			</label>
		</header>
	)
}
