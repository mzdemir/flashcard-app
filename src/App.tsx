import Header from "./components/shared/Header"
import Statics from "./components/study-mode/Static"
import FlashCardContainer from "./components/study-mode/FlashCardContainer"

import {useState, useEffect, createContext} from "react"
import AllCardsContainer from "./components/all-cards/AllCardsContainer"

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
	setView: React.Dispatch<React.SetStateAction<string>>
}

const CardContext = createContext<CardContextType>({flashcards: [], setFlashcards: () => {}, setView: () => {}})

export default function App() {
	const [view, setView] = useState("study-mode")
	const [flashcards, setFlashcards] = useState<Card[]>(() => {
		try {
			const saved = localStorage.getItem("flashcards")
			return saved ? JSON.parse(saved) : []
		} catch {
			return []
		}
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
		<CardContext.Provider value={{flashcards, setFlashcards, setView}}>
			<Header view={view} setView={setView} />
			{view === "study-mode" ? (
				<>
					<FlashCardContainer />
					<Statics />
				</>
			) : (
				<AllCardsContainer />
			)}
		</CardContext.Provider>
	)
}

export {CardContext}
