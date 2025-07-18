"use client";

import Image from "next/image";
import { FaGithub, FaXTwitter} from "react-icons/fa6";
import BubbleCanvas from "./components/bubbles";
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiPython, } from "react-icons/si";
import BubbleItem from "./components/BubbleItem";
import { useState } from "react";


export default function Home() {

  const [ selectedBubble, setSelectedBubble ] = useState<string | null>(null);

  return (
    <div 
      className="relative flex flex-col   text-white bg-gradient-to-b from-[#12aad3] via-[#09305c] to-[#021428] z-0 overflow-hidden responsive-height"
      style={{}}>
      <div>
        <div className="ray-wrapper">
        <div className="ray left-0 "/>
        <div className="ray left-[40%] "/>
        <div className="ray left-[80%]  "/>
        <div className="ray left-[120%] "/>
      </div>

      <div className="ray-wrapper2">
        <div className="ray2 left-[0%] "/>
        <div className="ray2 left-[10%] "/>
        <div className="ray2 left-[20%] "/>
        <div className="ray2 left-[30%] "/>
        <div className="ray2 left-[40%] "/>
        <div className="ray2 left-[50%]  "/>
        <div className="ray2 left-[60%] "/>
        <div className="ray2 left-[70%] "/>
        <div className="ray2 left-[80%] "/>
        <div className="ray2 left-[90%] "/>
        <div className="ray2 left-[100%] "/>
        <div className="ray2 left-[110%] "/>
        <div className="ray2 left-[120%] "/>
        <div className="ray2 left-[130%] "/>
        <div className="ray2 left-[140%] "/>
        <div className="ray2 left-[150%] "/>
        <div className="ray2 left-[160%] "/>
        <div className="ray2 left-[170%] "/>
        <div className="ray2 left-[180%] "/>
      </div>
      <BubbleCanvas/>      
    </div>
      
      <main className="relative flex flex-col h-auto z-40">

{/* about */}
        <div className = "flex flex-row justify-center mt-[4%] gap-x-[5%]"> 
          <div 
            className="relative w-[60px] h-[80px]
            sm:w-[60px] sm:h-[80px]
            md:w-[81px] md:h-[108px]
            lg:w-[90px] lg:h-[120px]"  
          >
          <Image
            className="object-cover"
            src={"/my-picture.jpg"}
            alt="my-picture"
            fill         
          />
          </div>

          <div className="w-[50%]">
            <h1 
              className=""
              style={{ fontSize:"clamp(10px,4.5vw,30px) "}}>
              永井琉
            </h1>
            <div 
              className=""
              style={{ fontSize:"clamp(9px,2vw,17px) "}}>
              <p className="mb-[2%]">
                豊橋技術科学大学工学部情報・知能工学科2年(2028年3月卒業予定)
              </p>
              <p>
                web,アプリ開発のバックエンド、フロントエンド共に関心を持っています。
              </p>
              <p>
                見やすく使いやすい設計を考えることが好きです。
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-y-4 w-[10%] min-w-15 max-w-27">
            <a
              href="https://github.com/Ryu-0402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[70%] "
            >
            <FaGithub className="w-full h-auto text-white      hover:opacity-80 transition" />
            </a>

            <a
              href="https://x.com/RyuN_0402?s=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-[70%]"
            >
            <FaXTwitter className="w-full h-auto text-white hover:opacity-80 transition" />
            </a>
          </div>
        </div>
{/* about end */}

{/* skills,projects */}
        <div className="relative flex flex-1 mt-[4%]">
    {/* skills */}
          <div className="flex flex-col ml-[0.5%] mr-auto w-[30%]">
            <h1 
              className="text-center"
              style={{ fontSize:"clamp(10px,4.5vw,45px) "}}>
              Skills
            </h1>

            <div className="grid grid-cols-3 mt-[3%] gap-y-[9%]">
              <BubbleItem 
                iconComponent={<SiHtml5 size={60}
                className="text-[#e34c26]" />}
                label="HTML"
                onClick={() => setSelectedBubble("HTML")}
              />
              <BubbleItem 
                iconComponent={<SiCss3 size={60} className="text-[#264de4]" />}
                label="CSS"
                onClick={() => setSelectedBubble("CSS")}
              />
              <BubbleItem 
                iconComponent={<SiJavascript size={60} className="text-[#f7df1e]" />}
                label="JavaScript"
                onClick={() => setSelectedBubble("JavaScript")}
              />
              <BubbleItem 
                iconComponent={<SiTypescript size={60} className="text-[#3178c6]" />}
                label="TypeScript"
                onClick={() => setSelectedBubble("TypeScript")}
              />
              <BubbleItem 
                iconComponent={<SiPython size={60} className="text-[#3776ab]" />}
                label="Python"
                onClick={() => setSelectedBubble("Python")}
              />
            </div>

            <div className="grid grid-cols-3 mt-[10%] gap-y-[9%]">
              <BubbleItem
                label={<>基本情報<br/>技術者試験</>}
                alt="基本情報技術者試験"
                onClick={() => setSelectedBubble("基本情報技術者試験")}
              />
              <BubbleItem
                label="TOEIC"
                alt="toeic"
                onClick={() => setSelectedBubble("toeic")}
              />
            </div>
          </div>
    {/* skills end */}


    {/* details */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center  w-[35%] h-[80%]"
            style={{fontSize:"clamp(10px,vw,20px) "}}
          >
              {selectedBubble === null &&(
                <h1 className="text-center"
                  style={{ fontSize:"clamp(10px,4.5vw,45px) "}}>
                  Please click bubbles to see details
                </h1>)
              }

              {selectedBubble === "HTML" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center
                  mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>HTML</h2>
                  <p>HTMLはウェブページの構造を定義するためのマークアップ言語です。</p>
                  <p>基本的なタグや属性を理解し、セマンティックなマークアップを心がけています。</p>
                </div>
              )}
              
              { selectedBubble === "CSS" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>CSS</h2>
                  <p>CSSはウェブページのスタイルを定義するためのスタイルシート言語です。</p>
                  <p>レイアウト、色、フォントなどを調整し、レスポンシブデザインにも対応しています。</p>
                </div>
              )}

              { selectedBubble === "JavaScript" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>JavaScript</h2>
                  <p>JavaScriptはウェブページに動的な機能を追加するためのプログラミング言語です。</p>
                  <p>DOM操作やイベント処理、非同期通信などを利用して、インタラクティブなウェブアプリケーションを作成します。</p>
                </div>
              )}

              { selectedBubble === "TypeScript" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>TypeScript</h2>
                  <p>TypeScriptはJavaScriptのスーパーセットで、型安全性を提供します。</p>
                  <p>大規模なアプリケーション開発において、コードの可読性と保守性を向上させるために使用しています。</p>
                </div>
              )}

              { selectedBubble === "Python" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>Python</h2>
                  <p>Pythonは汎用的なプログラミング言語で、データ分析や機械学習など幅広い分野で使用されています。</p>
                  <p>簡潔な構文と豊富なライブラリが特徴で、バックエンド開発にも利用しています。</p>
                </div>
              )}

              { selectedBubble === "基本情報技術者試験" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(22px,3.5vw,50px)"}}>基本情報技術者試験</h2>
                  <p>基本情報技術者試験は、ITエンジニアの基礎的な知識と技能を評価する試験です。</p>
                  <p>プログラミング、ネットワーク、データベースなどの幅広い分野にわたる知識が求められます。</p>
                </div>
              )}

              { selectedBubble === "toeic" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>TOEIC</h2>
                  <p>TOEICは英語のコミュニケーション能力を測定する試験です。</p>
                  <p>リスニングとリーディングのスキルを評価し、国際的なビジネス環境での英語力を証明します。</p>
                </div>
              )}

              { selectedBubble === "Photoタイマー" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>Photoタイマー</h2>
                  <p>Photoタイマーは、写真撮影のタイマー機能を提供するアプリケーションです。</p>
                  <p>ユーザーが指定した時間に写真を自動で撮影できるようにします。</p>
                  <p>ReactとTypeScriptを使用して開発され、ユーザーインターフェースはシンプルで直感的です。</p>
                </div>
              )}

              { selectedBubble === "ポートフォリオ" && (
                <div className="flex flex-col ">
                  <h2 className="text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>ポートフォリオ</h2>
                  <p>このポートフォリオは、私のスキルとプロジェクトを紹介するために作成されました。</p>
                  <p>Next.jsとTailwind CSSを使用して、レスポンシブで魅力的なデザインを実現しています。</p>
                </div>
              )}

          </div>
    {/* details end */}


    {/* projects */}
          <div className="flex flex-col w-[30%]">
            <h1 
              className="text-center"
              style={{ fontSize:"clamp(10px,4.5vw,45px) "}}
            >

              Projects
            </h1>
            <div className="grid grid-cols-3 mt-5">
              <BubbleItem 
                iconSrc="/photoタイマー-icon.png" label="photoタイマー"
                onClick={()=> setSelectedBubble("Photoタイマー")}/>
              <BubbleItem 
                label="ポートフォリオ"
                onClick={()=>setSelectedBubble("ポートフォリオ")}/>
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
