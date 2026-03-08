import FlashCardHeader from "./FlashCardHeader"
import FlashCard from "./FlashCard"

import {useState, createContext} from "react"

interface FiltersContextType {
	filters: string[]
	setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const FiltersContext = createContext<FiltersContextType>({
	filters: [],
	setFilters: () => {},
})

// interface Shuffle {
// 	shuffle: boolean
// 	setShuffle: React.Dispatch<React.SetStateAction<boolean>>
// }

export default function FlashCardContainer() {
	const [filters, setFilters] = useState<string[]>([])
	const [shuffle, setShuffle] = useState(false)

	return (
		<section className="bg-neutral-0 grid gap-4 px-4 rounded-2xl border border-color border-r-3 border-b-3">
			<FiltersContext.Provider value={{filters, setFilters}}>
				<FlashCardHeader setShuffle={setShuffle} />
				<FlashCard shuffle={shuffle} />
			</FiltersContext.Provider>
		</section>
	)
}

export {FiltersContext}
