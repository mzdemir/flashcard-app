import {CardContext} from "../../App"

import {useContext} from "react"
export default function Statics() {
	const {flashcards} = useContext(CardContext)

	const mastered = flashcards?.filter(card => card.knownCount === 5).length
	const notStarted = flashcards?.filter(card => card.knownCount === 0).length
	const inProgress = flashcards?.length - (mastered + notStarted)

	return (
		<section
			className="bg-neutral-0 grid gap-4 px-4 py-5 border border-color border-r-3 border-b-3 rounded-2xl xs:grid-cols-2 lg:grid-cols-1 "
			aria-live="polite">
			<h2 className="text-2xl/[1.2] font-semibold xs:col-span-2 lg:col-span-1">Study Statistics</h2>
			<div className="grid grid-cols-[1fr_1fr_100px] border border-color rounded-xl overflow-hidden">
				<p className="text-base/[1.2] font-medium p-5 col-span-2 grid gap-8">
					Total cards
					<span
						className="text-[1.5rem]/[1.2] font-bold xs:text-[2rem]/[1.2] lg:text-[2.5rem]/[1.2]"
						aria-live="polite">
						{flashcards ? flashcards.length : 0}
					</span>
				</p>
				<div className="grid place-items-center bg-blue-400 py-12 px-9.5 border-l border-color">
					<img src="/images/icon-stats-total.svg" aria-hidden="true" />
				</div>
			</div>
			<div className="grid grid-cols-[1fr_1fr_100px] border border-color rounded-xl overflow-hidden">
				<p className="text-base/[1.2] font-medium p-5 col-span-2 grid gap-8">
					Mastered
					<span
						className="text-[1.5rem]/[1.2] font-bold xs:text-[2rem]/[1.2] lg:text-[2.5rem]/[1.2]"
						aria-live="polite">
						{mastered ? mastered : 0}
					</span>
				</p>
				<div className="grid place-items-center bg-teal-400 py-12 px-9.5 border-l border-color">
					<img src="/images/icon-stats-mastered.svg" aria-hidden="true" />
				</div>
			</div>
			<div className="grid grid-cols-[1fr_1fr_100px] border border-color rounded-xl overflow-hidden">
				<p className="text-base/[1.2] font-medium p-5 col-span-2 grid gap-8">
					In Progress
					<span
						className="text-[1.5rem]/[1.2] font-bold xs:text-[2rem]/[1.2] lg:text-[2.5rem]/[1.2]"
						aria-live="polite">
						{inProgress ? inProgress : 0}
					</span>
				</p>
				<div className="grid place-items-center bg-pink-500 py-12 px-9.5 border-l border-color">
					<img src="/images/icon-stats-in-progress.svg" aria-hidden="true" />
				</div>
			</div>
			<div className="grid grid-cols-[1fr_1fr_100px] border border-color rounded-xl overflow-hidden">
				<p className="text-base/[1.2] font-medium p-5 col-span-2 grid gap-8">
					Not Started
					<span
						className="text-[1.5rem]/[1.2] font-bold xs:text-[2rem]/[1.2] lg:text-[2.5rem]/[1.2]"
						aria-live="polite">
						{notStarted ? notStarted : 0}
					</span>
				</p>
				<div className="grid place-items-center bg-pink-400 py-12 px-9.5 border-l border-color">
					<img src="/images/icon-stats-not-started.svg" aria-hidden="true" />
				</div>
			</div>
		</section>
	)
}
