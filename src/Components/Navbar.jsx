import Group from "../assets/Group.svg";
import text from "../assets/text.svg"

function Navbar() {
    return (<div>
        <div className = "flex gap-3">
            <img src={Group} alt="logo" />
            <img src={text} alt="text-logo" />
        </div>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
)
}

export default Navbar