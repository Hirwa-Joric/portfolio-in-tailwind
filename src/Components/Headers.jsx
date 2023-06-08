import Navbar from "./Navbar"
import person from "../assets/person.png"
import cross from "../assets/cross.png"
import bell from "../assets/bell.svg"
function Headers() {
    return (
        <div className="m-auto ">
            <Navbar />
            <div className="w-auto flex items-center justify-center mt-10">
            <div className="w-[980px]  flex-col  ">
                <p className="font-srif font-semibold text-9xl  text-[#284D57] md-10">
                    Performance- <br></br>based <span className="text-[#E64B2F]">businesses</span> succeed.
                </p>
                <p className="font-Montserrat font-normal text-base text-3xl leading-[136.7%] w-[667px] h-[50px] text-[#5B5653] mt-10">
                    Small is a dedicated performance  management platform that helps you execute nonstrategic goals and  retail  key talent.</p>
                
            </div>
            <div className="relative w-[616px] h-[612px]">
                <img src={person} alt="person"  className="absolute w-[618px] z-[1] left-[50px] top-0"/>
                <img src={cross} alt="cross" className="relative left-[175px] top-[100px] w-[618px]"/>
                <div className="flex flex-col items-center p-4 absolute w-48 h-36 z-10 bg-white">
                    <div className="relative">
                    <div className="absolute w-[102px] h-[13px] bg-rgba-red top-6"></div>
                    <p className="font-sans font-semibold text-4xl ">+10k</p>
                    </div>
                    <p className="font-montserat text-sm text-[#5B5653] text-center">Create conversation per moth</p>
                </div>
                <div className="absolute w-[336px] h-[120px] left-[280px] top-[24px] p-5 bg-white z-10 flex gap-4 top-[32px]">
                    <img src={bell} alt="bell" className="relative w-[38px] h-[38px] " />
                    <div>
                    <p>Q3 Engament Survey Results</p>
                        <p>eNPS improved by 22% since last quarter</p>
                    </div>
                </div>
                </div >
                </div>
        </div>

  )
}

export default Headers