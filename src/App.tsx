import Header from "./components/Header"
import Statics from "./components/Static"
import FlashCardContainer from "./components/FlashCardContainer"

import {useState, useEffect, createContext} from "react"

interface Card {
	id: string
	question: string
	answer: string
	category: string
	knownCount: number
}

interface CardContextType {
	flashcards: Card[]
	setFlashcards: React.Dispatch<React.SetStateAction<Card[]>>
}

const CardContext = createContext<CardContextType>({
	flashcards: [],
	setFlashcards: () => {},
})

export default function App() {
	const [view, setView] = useState("study-mode")
	const [flashcards, setFlashcards] = useState<Card[]>(() => {
		const saved = localStorage.getItem("flashcards")
		return saved ? JSON.parse(saved) : []
	})

	useEffect(() => {
		async function getFlashCards() {
			const response = await fetch("./data.json")
			const result = await response.json()
			return setFlashcards(result.flashcards)
		}

		if (flashcards.length === 0) getFlashCards()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		localStorage.setItem("flashcards", JSON.stringify(flashcards))
	}, [flashcards])

	return (
		<CardContext.Provider value={{flashcards, setFlashcards}}>
			<Header view={view} setView={setView} />
			{view === "study-mode" ?
				<>
					<FlashCardContainer />
					<Statics />
				</>
			:	null}
		</CardContext.Provider>
	)
}

export {CardContext}
