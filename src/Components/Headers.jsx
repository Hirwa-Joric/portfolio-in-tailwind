
import person from "../assets/person.png"
import cross from "../assets/cross.png"
import bell from "../assets/bell.svg"
import Navbar from "./Navbar"
function Headers() {
    return (
        <div className="m-auto  bg-[FFF8F2]">
            <Navbar />
            <div className="w-auto flex items-center justify-center mt-36 relative">
            <div className="w-[900px]  flex-col  ">
                <p className="font-semibold text-8xl  text-[#284D57] md-10">
                    Performance- <br></br>based <span className="text-[#E64B2F]">businesses</span> succeed.
                </p>
                <p className="font-Montserrat font-normal text-base text-3xl leading-[136.7%] w-[767px] h-[50px] text-[#5B5653] mt-10">
                    Small is a dedicated performance  management platform that helps you execute nonstrategic goals and  retail  key talent.</p>
                
            </div>
                <div className="relative w-[616px] h-[612px]">
                    {/* mmiddle contaienr */}
                <img src={person} alt="person"  className="absolute w-[618px] z-[1] left-[50px] top-0"/>
                    <img src={cross} alt="cross" className="relative left-36 top-9 w-[618px]" />
                    {/* bottom container */}
                <div className="flex-col items-center p-4 absolute w-[240px] z-20 bg-white top-[700px]">
                    <div className="relative">
                    <div className="absolute w-[102px] h-[13px] bg-rgba-red top-6"></div>
                    <p className="font-sans font-semibold text-6xl ">+10k</p>
                    </div>
                    <p className="font-montserat text-xl text-[#5B5653] text-center">Create conversation per moth</p>
                    </div>
                    {/* upper contaienr  */}
                <div className="absolute w-[500px] h-[190px] left-[280px] p-5 bg-white z-10 flex gap-4 top-[32px]">
                    <img src={bell} alt="bell" className="relative w-[78px] h-[78px] " />
                    <div>
                    <p className="text-[25px]">Q3 Engament Survey Results</p>
                        <p className="text-[30px]">eNPS improved by 22% since last quarter</p>
                    </div>
                </div>
                </div>
                </div>
        </div>
    ) 
}

export default Headers