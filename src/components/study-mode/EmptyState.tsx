import {useContext} from "react"
import {CardContext} from "../../App"

export default function EmptyState() {
	const {setView} = useContext(CardContext)
	return (
		<div className="h-90 flex flex-col gap-8 justify-center text-center text-base/[1.2]">
			<div className="grid gap-3">
				<p className="text-2xl/[1.2] font-semibold">No cards to study</p>
				<p className="text-neutral-600">You don't have any cards yet. Add your first card in the All Cards tab.</p>
			</div>
			<button
				className="font-medium border self-center w-fit px-5 py-3 rounded-full shadow-2"
				onClick={() => setView("all-card")}>
				Go to All Cards
			</button>
		</div>
	)
}
