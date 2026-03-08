import CategoryDropDown from "./CategoryDropDown"

export default function FlashCardHeader({setShuffle}) {
	return (
		<header className="grid grid-cols-[auto_auto] gap-y-2.5 py-3 text-preset-4 font-medium relative after:absolute after:bottom-0 after:-left-4 after:-right-4 after:h-px after:bg-neutral-900">
			<CategoryDropDown />
			<button
				className="flex items-center gap-2 justify-self-end px-4 py-3 border border-color rounded-full"
				onClick={() => setShuffle(true)}>
				<img src="/images/icon-shuffle.svg" aria-hidden="true" />
				Shuffle
			</button>
			<label className="flex items-center gap-2">
				<input type="checkbox" className="" />
				Hide Mastered
			</label>
		</header>
	)
}
