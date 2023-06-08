import Group from "../assets/Group.svg";
import text from "../assets/text.svg"

function Navbar() {
    return (<div className="flex gap-[60px] align-middle justify-between w-[1112px] h-[52px] top-[38px] left=[164px] position">
        <div className = "flex gap-3">
            <img src={Group} alt="logo" />
            <img src={text} alt="text-logo" />
        </div>
        <div className="flex">
            <ul className="flex gap-5">
                <li>Product</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Recources</li>
                <li>Customers</li>
            </ul>
        </div>
        <div className="flex gap-[5px]">
            <div
                className="text-center w-[96px] h-[43px] "
            >
                Sign in</div>
            <div>Let's talk</div>
        </div>
    </div>
)
}

export default Navbar