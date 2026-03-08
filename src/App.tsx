import {useState} from "react"
import Header from "./components/Header"

import Statics from "./components/Static"
import FlashCardContainer from "./components/FlashCardContainer"

export default function App() {
	const [view, setView] = useState("study-mode")

	return (
		<>
			<Header view={view} setView={setView} />
			{view === "study-mode" ?
				<>
					<FlashCardContainer />
					<Statics />
				</>
			:	null}
		</>
	)
}
