import Navbar from "./Navbar"
import person from "../assets/person.png"
import cross from "../assets/cross.png"
import bell from "../assets/bell.svg"
function Headers() {
    return (
        <div className="w-[1440px] h-[830px] m-auto bg-slate-400">
            <Navbar />
            <div className="w-[680px] h-[327px]">
                <p className="font-srif font-normal font-semibold text-6xl leading-[136.7%] text-[#284D57]">
                    Performance- <br></br>based <span className="text-[#E64B2F]">businesses</span> succeed.
                </p>
                <p className="font-Montserrat font-normal text-base leading-[136.7%] w-[567px] h-[50px] text-[#5B5653] ">
                    Small is a dedicated performance  management platform that helps you execute nonstrategic goals and  retail  key talent.</p>
                
            </div>
            <div className="absolute w-[616px] h-[612px]">
                <img src={person} alt="person" />
                <img src={cross} alt="cross" />
                <div className="flex-col items-center py-[17px] px-[23px] absolute w-[187px] h-[138px] top-[460px] left-0">
                    <p>+10k</p>
                    <p>Create conversation per moth</p>
                </div>
                <div className="absolute w-[336px] h-[120px] left-[280px] top-[24px]">
                    <img src={bell} alt="bell" />
                    <p>Q3 Engament Survey Results</p>
                    <p>eNPS improved by 22% since last quarter</p>
                </div>
            </div>
        </div>

  )
}

export default Headers