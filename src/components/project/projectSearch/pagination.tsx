import { Dispatch, SetStateAction } from "react";

function Pagination({ totalPages, page, setPage }: { totalPages: number, page: number, setPage: Dispatch<SetStateAction<number>> }) {
    return (
        <>

            <div className="flex mt-8 mb-20 ">
                {totalPages > 1 && Array.from(Array(totalPages).keys()).map((pageNumber) => <div
                    className={`font-bold ${pageNumber === page ? "bg-light-green" : "bg-white"} px-5 py-3 border-2 border-custom-gray cursor-pointer mr-2 rounded-md`}
                    onClick={() => { setPage(pageNumber) }}>
                    {pageNumber + 1}
                </div>)}
            </div>
        </>
    )
}

export default Pagination
