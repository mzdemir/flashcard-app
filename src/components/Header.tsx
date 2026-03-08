interface Props {
	view: string
	setView: React.Dispatch<React.SetStateAction<string>>
}
import {useRef, useState, useEffect} from "react"

export default function Header({view, setView}: Props) {
	const studyRef = useRef<HTMLButtonElement>(null)
	const allCardsRef = useRef<HTMLButtonElement>(null)

	const activeRef = view === "study-mode" ? studyRef : allCardsRef
	const [sliderStyle, setSliderStyle] = useState({width: 0, left: 0})

	useEffect(() => {
		const activeEl = activeRef.current
		if (activeEl) {
			setSliderStyle({
				width: activeEl.offsetWidth,
				left: activeEl.offsetLeft,
			})
		}
	}, [view, activeRef])

	return (
		<header className="flex items-center justify-between">
			<img className="my-1" src="images/logo-small.svg" alt="Logo" />
			<nav className="relative text-preset-4 font-semibold bg-neutral-0 flex gap-1 p-1 border border-color rounded-full overflow-hidden shadow-1">
				<div
					style={{width: sliderStyle.width, left: sliderStyle.left}}
					className="absolute top-1 bottom-1 bg-yellow-500 border border-color rounded-full transition-all duration-300 ease-in-out"></div>

				<button
					ref={studyRef}
					className="relative z-10 py-2.5 px-3 cursor-pointer"
					onClick={() => setView("study-mode")}>
					Study Mode
				</button>
				<button
					ref={allCardsRef}
					className="relative z-10 py-2.5 px-3 cursor-pointer"
					onClick={() => setView("all-cards")}>
					All Cards
				</button>
			</nav>
		</header>
	)
}
