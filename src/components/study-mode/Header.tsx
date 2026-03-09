interface Props {
	view: string
	setView: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({view, setView}: Props) {
	return (
		<header className="flex items-center justify-between">
			<img
				className="my-1"
				src="images/logo-small.svg"
				alt="Logo"
			/>
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
