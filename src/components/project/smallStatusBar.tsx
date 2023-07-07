
function SmallStatusBar({ finished }: { finished: boolean }) {
    return (
        <>
            <div className={`rounded-md overflow-hidden flex items-center w-40 ${finished ? "bg-light-gray" : "bg-light-green"}`}>
                <div className={`w-2 h-8 ${finished ? "bg-normal-text" : "bg-dark-green"}`}></div>
                <span className="ml-2 font-medium">
                    {finished ? "Сбор завершен" : "Идет сбор"}
                </span>
            </div>
        </>
    )
}

export default SmallStatusBar
