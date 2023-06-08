import Group from "../assets/Group.svg";
import text from "../assets/text.svg"

function Navbar() {
    return (
        <div className="flex gap-[200px] align-center justify-center  h-[52px] ">
        <div className = "flex gap-3 w-[-20px]">
            <img src={Group} alt="logo"  className="relative w-[100px]" />
            <img src={text} alt="text-logo"  className="relative w-[100px]"/>
        </div>
        <div className="flex">
            <ul className="flex gap-[90px] align-center items-center ">
                <li className="text-[25px] font-montserrat font-normal text-base leading-5 text-[#463F3C]">Product</li>
                <li className="text-[25px] font-montserrat font-normal text-base leading-5 text-[#463F3C]">Pricing</li>
                <li className="text-[25px] font-montserrat font-normal text-base leading-5 text-[#463F3C]">Recources</li>
                <li className="text-[25px] font-montserrat font-normal text-base leading-5 text-[#463F3C]">Customers</li>
                <li className="text-[25px] font-montserrat font-normal text-base leading-5 text-[#463F3C]">About</li>
            </ul>
        </div>
        <div className="flex gap-[5px]">
            <div
                className=" flex items-center justify-center text-center w-[106px] h-[63px] border border-1 border-solid border-gray-300 rounded-[35px]"
            >
                Sign in</div>
            <div
                className=" flex items-center justify-center text-center w-[106px] h-[63px] border border-1 border-solid bg-[#E64B2F] rounded-[35px] text-white"
            >
                Let's talk</div>
        </div>
    </div>
)
}

export default Navbar