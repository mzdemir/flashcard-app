export default function CategoryDropDown() {
	// prettier-ignore
	return (
    <div>
      <div>{/* select-wrapper */}
        <button className="flex items-center gap-2 px-4 py-3 border border-neutral-900 rounded-full">	{/* select-trigger */}
          <span>All Categories</span>
          <img src="/images/icon-chevron-down.svg" aria-hidden="true" />
        </button>
      </div>
      <div>{/* custom options */}
        <span></span>
			</div>
    </div>
  )
}
