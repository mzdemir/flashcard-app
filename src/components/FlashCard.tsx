import {useState} from "react"

export default function FlashCard() {
	const [showAnswer, setShowAnswer] = useState(false)

	return (
		<>
			<div
				className={`${!showAnswer ? "bg-pink-400" : "bg-blue-400"} h-90 grid place-items-center gap-4 px-4 py-5 border-2 border-neutral-900 rounded-2xl shadow-2`}>
				<span className="text-preset-6 font-medium bg-neutral-0 px-3 py-1.5 border rounded-full shadow-0">
					{"Category"}
				</span>
				<div className="py-19 grid gap-4">
					<p className="text-preset-1 font-bold text-center">{"question"}</p>
					<button className="text-preset-4 font-medium opacity-80" onClick={() => setShowAnswer(true)}>
						Click to reveal answer
					</button>
				</div>
				<div>
					<div>
						<div></div>
					</div>
					<span>{"0/5"}</span>
				</div>
			</div>

			<div className="text-preset-4 font-medium grid place-items-center gap-2.5 pb-2 relative after:absolute after:-bottom-4 after:-left-4 after:-right-4 after:h-0.5 after:bg-neutral-900">
				<button className="flex gap-2 items-center justify-center w-full  bg-yellow-500 py-3 rounded-full border shadow-2 cursor-pointer">
					<img src="/images/icon-circle-check.svg" aria-hidden="true" />I Know This
				</button>
				<button className="flex gap-2 items-center justify-center w-full py-3 rounded-full border shadow-2  cursor-pointer">
					<img src="/images/icon-reset.svg" aria-hidden="true" /> Reset Progress
				</button>
			</div>

			<div className="flex justify-between items-center py-4">
				<button className="p-3 border rounded-full">
					<img src="/images/icon-chevron-left.svg" aria-hidden="true" />
				</button>
				<p className="text-neutral-600 text-preset-5 font-medium">Card 1 of 40</p>
				<button className="p-3 border rounded-full">
					<img src="/images/icon-chevron-right.svg" aria-hidden="true" />
				</button>
			</div>
		</>
	)
}
