"useclient"

import Image from "next/image";

function Header() {
    return (
        <>
        <div className=" py-10 flex justify-around px-8 ml-16">
            <div className="flex gap-2 w-[504px] h-[44px] bg-black2 rounded">
                <Image
                    src={'/search.svg'}
                    alt="search"
                    width={13}
                    height={12}
                    className="cursor-pointer ml-2"
                />

                <form>
                    <input type="text" 
                    placeholder="Search here..."
                    className="w-[300px] h-[44px] bg-black2 pl-2 rounded outline-none border-none text-white"
                    />
                </form>
            </div>
                <div className="w-[86px] h-[29px] bg-white my-2"></div>
        </div>
        </>
    )
}
export default Header;