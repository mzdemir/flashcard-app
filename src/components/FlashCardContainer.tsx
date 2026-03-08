import FlashCardHeader from "./FlashCardHeader"
import FlashCard from "./FlashCard"

export default function FlashCardContainer() {
	return (
		<section className="bg-neutral-0 grid gap-4 px-4 rounded-2xl border border-r-3 border-b-3">
			<FlashCardHeader />
			<FlashCard />
		</section>
	)
}
