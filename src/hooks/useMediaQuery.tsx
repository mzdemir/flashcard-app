import {useState, useEffect} from "react"

export default function useMediaQuery() {
	const query = "(min-width: 36rem)"
	const [matches, setMatches] = useState(window.matchMedia(query).matches)
	const hitBreakpoint = matches

	useEffect(() => {
		const media = window.matchMedia(query)
		const listener = () => setMatches(media.matches)
		media.addEventListener("change", listener)
		return () => media.removeEventListener("change", listener)
	}, [query])

	return hitBreakpoint
}
