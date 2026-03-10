import {CardContext} from "../../App"
import {useContext, useState} from "react"

type Props = {setFilters: React.Dispatch<React.SetStateAction<string[]>>}

export default function CategoryDropDown({setFilters}: Props) {
	const {flashcards} = useContext(CardContext)
	const [showDropdown, setShowDropdown] = useState(false)

	const categories = flashcards
		?.map(card => card.category)
		.reduce(
			(acc, curr) => {
				acc[curr] = (acc[curr] || 0) + 1
				return acc
			},
			{} as Record<string, number>,
		)

	function getFilters(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value
		setFilters(prev => (prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]))
	}

	return (
		<div className="relative">
			<button
				onClick={() => setShowDropdown(prev => !prev)}
				className="flex items-center gap-2 px-4 py-3 bg-neutral-0 border rounded-full hover:bg-neutral-100 cursor-pointer focus-visible:border focus-blue">
				<span>All Categories</span>
				<img
					src="/images/icon-chevron-down.svg"
					aria-hidden="true"
				/>
			</button>

			<form
				className={`${!showDropdown && "hidden"} absolute mt-2 grid bg-neutral-0 z-10 overflow-hidden text-sm/[1.2] border rounded-lg font-medium text-nowrap shadow-3`}>
				{categories
					&& Object.entries(categories)
						.sort()
						.map(([cate, count]) => (
							<label
								key={cate}
								className="flex items-center gap-2 hover:bg-neutral-100 py-2  px-4 cursor-pointer border-b">
								<input
									type="checkbox"
									className="focus-blue"
									id={cate}
									value={cate}
									onChange={event => getFilters(event)}
								/>
								{cate} <span className="text-neutral-600 -ml-1">({count})</span>
							</label>
						))}
			</form>
		</div>
	)
}
