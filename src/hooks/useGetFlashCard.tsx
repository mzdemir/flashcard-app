import {CardContext} from "../App"
import {useContext, useState, useMemo} from "react"

import {type Card} from "../types"

function shuffleArray(array: Card[]) {
	const shuffled = [...array]
	for (let i = shuffled.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1))
		const current = shuffled[i]
		shuffled[i] = shuffled[randomIndex]
		shuffled[randomIndex] = current
	}
	return shuffled
}

export default function useGetFlashCard() {
	const {flashcards} = useContext(CardContext)

	const [filters, setFilters] = useState<string[]>([])
	const [shuffle, setShuffle] = useState(false)
	const [isHideMastered, setIsHideMastered] = useState(false)

	const filteredCards = useMemo(
		() => (filters.length > 0 ? flashcards.filter(f => filters.includes(f.category)) : flashcards),
		[filters, flashcards],
	)

	const masteredHidden = useMemo(
		() => (isHideMastered ? filteredCards.filter(f => f.knownCount !== 5) : filteredCards),
		[filteredCards, isHideMastered],
	)

	const shuffledCards = useMemo(
		() => (shuffle ? shuffleArray(masteredHidden) : masteredHidden),
		[masteredHidden, shuffle],
	)

	return {setFilters, setShuffle, setIsHideMastered, masteredHidden, shuffledCards}
}
