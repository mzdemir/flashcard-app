import CategoryDropDown from "./CategoryDropDown"

interface FlashCardHeaderProps {
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>
	setFilters: React.Dispatch<React.SetStateAction<string[]>>
	setIsHideMastered: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FlashCardHeader({setShuffle, setFilters, setIsHideMastered}: FlashCardHeaderProps) {
	return (
		<header className="grid grid-cols-[auto_auto] gap-y-2.5 pbs-3 text-base/[1.2] font-medium">
			<CategoryDropDown setFilters={setFilters} />
			<button
				className="flex items-center gap-2 justify-self-end px-4 py-3 bg-neutral-0 border border-color rounded-full hover:bg-neutral-100 cursor-pointer focus-blue"
				onClick={() => setShuffle(prev => !prev)}>
				<img
					src="/images/icon-shuffle.svg"
					aria-hidden="true"
				/>
				Shuffle
			</button>
			<label className="flex items-center gap-2 cursor-pointer">
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
