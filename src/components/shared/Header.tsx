interface Props {
	view: string
	setView: React.Dispatch<React.SetStateAction<string>>
}

import useMediaQuery from "../../hooks/useMediaQuery"

export default function Header({view, setView}: Props) {
	const hitBreakpoint = useMediaQuery()

	return (
		<header className="flex items-center justify-between lg:col-span-3">
			<img className="my-1" src={!hitBreakpoint ? "images/logo-small.svg" : "images/logo-large.svg"} alt="Logo" />
			<nav className="text-base/[1.2] font-semibold bg-neutral-0 flex gap-1 p-1 border border-color rounded-full overflow-hidden shadow-1">
				<button
					className={`${view === "study-mode" && "bg-yellow-500 border"} py-2.5 px-3 cursor-pointer rounded-full hover:border focus-visible:border focus-blue`}
					onClick={() => setView("study-mode")}>
					Study Mode
				</button>
				<button
					className={`${view === "all-cards" && "bg-yellow-500 border"} py-2.5 px-3 cursor-pointer rounded-full hover:border focus-visible:border focus-blue`}
					onClick={() => setView("all-cards")}>
					All Cards
				</button>
			</nav>
		</header>
	)
}
