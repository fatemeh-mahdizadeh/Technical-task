function Guide() {
    return (
        <div className="md:mt-36 flex md:flex-col justify-between md:w-2/12 flex-row md:items-end text-[10px] md:justify-items-end">
            <div className="flex flex-row gap-2 items-center">
                <p>foo-left</p>
                <p className="border bg-blue  border-1 border-blue w-[10px] h-[10px]"></p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>bar-left</p>
                <p className="border bg-orange border-1 border-orange  w-[10px] h-[10px]"></p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>baz-left</p>
                <p className="border bg-green border-1 border-green  w-[10px] h-[10px]"></p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>foo-right</p>
                <p className="border bg-red border-1 border-red  w-[10px] h-[10px]"></p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>bar-right</p>
                <p className="border bg-purple border-1 border-purple  w-[10px] h-[10px]"></p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>baz-right</p>
                <p className="border bg-brown border-1 border-brown  w-[10px] h-[10px]"></p>
            </div>
        </div>
    );
}

export default Guide;