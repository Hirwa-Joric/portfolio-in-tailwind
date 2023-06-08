import Group from "../assets/Group.svg";
import text from "../assets/text.svg"

function Navbar() {
    return (<div className="flex gap-[70px] align-center justify-center  h-[52px] left=[164px] ] ">
        <div className = "flex gap-3">
            <img src={Group} alt="logo" />
            <img src={text} alt="text-logo" />
        </div>
        <div className="flex">
            <ul className="flex gap-5 align-center items-center ">
                <li>Product</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Recources</li>
                <li>Customers</li>
            </ul>
        </div>
        <div className="flex gap-[5px]">
            <div
                className=" flex items-center justify-center text-center w-[96px] h-[43px] border border-1 border-solid border-gray-300 rounded-[35px]"
            >
                Sign in</div>
            <div
                className=" flex items-center justify-center text-center w-[96px] h-[43px] border border-1 border-solid bg-[#E64B2F] rounded-[35px] text-white"
            >
                Let's talk</div>
        </div>
    </div>
)
}

export default Navbar