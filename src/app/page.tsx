"use client";

import Image from "next/image";
import { FaGithub, FaXTwitter} from "react-icons/fa6";
import BubbleCanvas from "./components/bubbles";
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiPython } from "react-icons/si";
import BubbleItem from "./components/BubbleItem";
import { useState } from "react";


export default function Home() {

  const [ selectedBubble, setSelectedBubble ] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col h-full  text-white bg-gradient-to-b from-[#12aad3] via-[#09114e] to-[#000000] overflow-x-hidden">

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
          <div className="flex flex-col ml-[10px] mr-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              Skills
            </h1>

            <div className="grid grid-cols-3 mt-5 gap-y-3">
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

            <div className="flex flex-row mt-3">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center  w-[35%] h-[80%] ">
              {selectedBubble === null &&(
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center mt-10">
                  Please click bubbles to see details
                </h1>)
              }

              {selectedBubble === "HTML" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">HTML</h2>
                  <p>HTMLはウェブページの構造を定義するためのマークアップ言語です。</p>
                  <p>基本的なタグや属性を理解し、セマンティックなマークアップを心がけています。</p>
                </div>
              )}
              
              { selectedBubble === "CSS" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">CSS</h2>
                  <p>CSSはウェブページのスタイルを定義するためのスタイルシート言語です。</p>
                  <p>レイアウト、色、フォントなどを調整し、レスポンシブデザインにも対応しています。</p>
                </div>
              )}

              { selectedBubble === "JavaScript" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">JavaScript</h2>
                  <p>JavaScriptはウェブページに動的な機能を追加するためのプログラミング言語です。</p>
                  <p>DOM操作やイベント処理、非同期通信などを利用して、インタラクティブなウェブアプリケーションを作成します。</p>
                </div>
              )}

              { selectedBubble === "TypeScript" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">TypeScript</h2>
                  <p>TypeScriptはJavaScriptのスーパーセットで、型安全性を提供します。</p>
                  <p>大規模なアプリケーション開発において、コードの可読性と保守性を向上させるために使用しています。</p>
                </div>
              )}

              { selectedBubble === "Python" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">Python</h2>
                  <p>Pythonは汎用的なプログラミング言語で、データ分析や機械学習など幅広い分野で使用されています。</p>
                  <p>簡潔な構文と豊富なライブラリが特徴で、バックエンド開発にも利用しています。</p>
                </div>
              )}

              { selectedBubble === "基本情報技術者試験" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">基本情報技術者試験</h2>
                  <p>基本情報技術者試験は、ITエンジニアの基礎的な知識と技能を評価する試験です。</p>
                  <p>プログラミング、ネットワーク、データベースなどの幅広い分野にわたる知識が求められます。</p>
                </div>
              )}

              { selectedBubble === "toeic" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">TOEIC</h2>
                  <p>TOEICは英語のコミュニケーション能力を測定する試験です。</p>
                  <p>リスニングとリーディングのスキルを評価し、国際的なビジネス環境での英語力を証明します。</p>
                </div>
              )}

              { selectedBubble === "Photoタイマー" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">Photoタイマー</h2>
                  <p>Photoタイマーは、写真撮影のタイマー機能を提供するアプリケーションです。</p>
                  <p>ユーザーが指定した時間に写真を自動で撮影できるようにします。</p>
                  <p>ReactとTypeScriptを使用して開発され、ユーザーインターフェースはシンプルで直感的です。</p>
                </div>
              )}

              { selectedBubble === "ポートフォリオ" && (
                <div className="flex flex-col ">
                  <h2 className="text-xl text-center">ポートフォリオ</h2>
                  <p>このポートフォリオは、私のスキルとプロジェクトを紹介するために作成されました。</p>
                  <p>Next.jsとTailwind CSSを使用して、レスポンシブで魅力的なデザインを実現しています。</p>
                </div>
              )}

          </div>
    {/* details end */}


    {/* projects */}
          <div className="flex flex-col w-[365px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
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
