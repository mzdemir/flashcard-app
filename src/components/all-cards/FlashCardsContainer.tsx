import ProgressBar from "../shared/ProgressBar"
import type {Card} from "../../types"
import {useState} from "react"

type Props = {
	cardsToDisplay: Card[]
	setDisplayModal: React.Dispatch<React.SetStateAction<{update: boolean; delete: boolean; id: string}>>
}

export default function FlashCardsContainer({cardsToDisplay, setDisplayModal}: Props) {
	const [openMenuId, setOpenMenuId] = useState<string | null>(null)

	return (
		<section className="grid gap-5 xs:grid-cols-2 lg:col-span-3 lg:grid-cols-3" aria-live="assertive">
			{cardsToDisplay?.map(card => (
				<div key={card.id} className="bg-neutral-0 border rounded-2xl flex flex-col">
					<h2 className="p-4 text-xl/[1.2] font-semibold border-b">{card.question}</h2>
					<div className="p-4 text-sm/[1.4] font-medium flex flex-col gap-1.5 flex-1 border-b">
						<span className="opacity-60">Answer:</span>
						<p>{card.answer}</p>
					</div>
					<div className="flex gap-2 justify-between px-4">
						<div className="py-3.5 pr-2.5 self-start border-r w-min xs:w-fit">
							<p className="text-xs/[1.3] tracking-[-3%] font-medium border px-3 py-1.5 rounded-full shadow-0">
								{card.category}
							</p>
						</div>
						<div className="py-3.5 self-center mr-auto">
							<ProgressBar currentCard={card} />
						</div>
						<div className="relative flex items-center border-l">
							<button
								onClick={() => setOpenMenuId(prev => (prev === card.id ? null : card.id))}
								aria-label="Click to open to delete or update the card"
								className="ml-2 cursor-pointer rounded-sm hover:border hover:shadow-2 focus-visible:outline-none focus-visible:border focus-visible:shadow-2">
								<img src="/images/icon-menu.svg" aria-hidden="true" />
							</button>
							<div
								className={`absolute bottom-full mb-1 -mr-2 right-0 w-35 bg-neutral-0 text-sm/[1.4] font-medium grid border rounded-lg overflow-hidden transition-all duration-200 ${openMenuId !== card.id ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
								aria-hidden={openMenuId !== card.id}>
								<button
									className="py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-neutral-100 focus-visible:outline-blue-600 focus-visible:-outline-offset-3 focus-visible:outline-3 focus-visible:rounded-lg"
									tabIndex={openMenuId !== card.id ? -1 : 0}
									onClick={() => setDisplayModal(prev => ({...prev, update: true, id: card.id}))}>
									<img src="/images/icon-edit.svg" aria-hidden="true" />
									Edit
								</button>
								<hr />
								<button
									className="py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-neutral-100 focus-visible:outline-blue-600 focus-visible:-outline-offset-3 focus-visible:outline-3 focus-visible:rounded-lg"
									tabIndex={openMenuId !== card.id ? -1 : 0}
									onClick={() => setDisplayModal(prev => ({...prev, delete: true, id: card.id}))}>
									<img src="/images/icon-delete.svg" aria-hidden="true" />
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	)
}
