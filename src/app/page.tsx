import Image from "next/image";
import { FaGithub, FaXTwitter} from "react-icons/fa6";
import BubbleCanvas from "./components/bubbles";
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiPython } from "react-icons/si";
import BubbleItem from "./components/BubbleItem";


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen h-full  text-white bg-gradient-to-b from-[#12aad3]  to-[#090238] overflow-hidden">

    <div>
      <div className="ray-wrapper">
      <div className="ray left-0 "/>
      <div className="ray left-[40%] "/>
      <div className="ray left-[80%]  "/>
      <div className="ray left-[120%] "/>
      </div>
      <BubbleCanvas />      
    </div>
      
      <main className="relative flex flex-col z-20 h-full">
{/* about */}
        <div className = "flex flex-row justify-center mt-7"> 
          <Image
            className=""
            src={"/my-picture.jpg"}
            alt="my-picture"
            width={120}
            height={160}          
          />

          <div>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl">
          永井琉
          </h1>
          <p>
            豊橋技術科学大学工学部情報・知能工学科2年(2028年3月卒業予定)
          </p>
          <p>
            web,アプリ開発のバックエンド、フロントエンド共に関心を持っています。
          </p>
          <p>
            見やすく使いやすい設計を考えることが好きです。
          </p>
          </div>
          
          <div className="">
            <a 
              href="https://github.com/Ryu-0402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={60} />
            </a>
            <a 
              href="https://x.com/RyuN_0402?s=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaXTwitter size={60} />
            </a>
          </div>
        </div>
{/* about end */}

{/* skills,projects */}
        <div className="relative flex flex-1 mt-10">
    {/* skills */}
          <div className="flex flex-col bg-blue-700 ml-[10px] mr-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              Skills
            </h1>

            <div className="flex flex-row mt-5">
              <BubbleItem 
                iconComponent={<SiHtml5 size={60} className="text-[#e34c26]" />}
              />
              <BubbleItem 
                iconComponent={<SiCss3 size={60} className="text-[#264de4]" />}
              />
              <BubbleItem 
                iconComponent={<SiJavascript size={60} className="text-[#f7df1e]" />}
              />
              <div className="flex flex-col items-center">
                <SiTypescript size={60} className="text-[#3178c6]"/>
                <p></p>
              </div>
              <div className=" flex flex-col items-center">
                <SiPython size={60} className="text-[#3776ab]"/>
                <p></p>
              </div>
            </div>

            <div className="flex flex-row mt-3">
              <p>
                基本情報技術者試験
              </p>
              <p>
                TOEIC
              </p>
            </div>
          </div>
    {/* skills end */}

    {/* details */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-black">
            details
            <p>
              heiufhreifhreifhrifhrireiuhfrei
            </p>
          </div>
    {/* details end */}
          
    {/* projects */}
          <div className="flex flex-col w-[365px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              Projects
            </h1>
            <div className="flex flex-row mt-5">
              <BubbleItem iconSrc="/photoタイマー-icon.png" label="photoタイマー"/>
              <BubbleItem label="ポートフォリオ"/>
            </div>
          </div>
    {/* projects end */}
        </div>
{/* skills,projects end */}
      </main>
      
      <footer> 
      </footer>
    </div>
  );
}
