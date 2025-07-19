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
        <div className="ray left-[160%] "/>
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

{/* header */}
        <header className="">
          <p 
            className="text-center mt-[2%]"
            style={{ fontSize:"clamp(6px,calc(0.7vw + 4px),17px) "}}>
            更新日: 2025/7/19
          </p>
        </header>

{/* about */}
        <div className = "flex flex-row justify-center mt-[1%] gap-x-[5%]"> 
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
              style={{ fontSize:"clamp(10px,2vw,17px) "}}>
              <p className="mb-[2%]">
                豊橋技術科学大学工学部情報・知能工学科2年(2028年3月卒業予定)
              </p>
              <p>
                webサイト,アプリ開発のバックエンドと今は特にフロントエンドを学習しているところで、ユーザーの気持ちを考えた設計にこだわっています。まだ経験は浅いですが、このAIの時代、いろんなことに挑戦しやすいチャンスなのでどんどんスキルアップしていきたいです。
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
            style={{fontSize:"clamp(9px,calc(0.9vw + 5px),30px) "}}
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
                  style={{fontSize:"clamp(25px,4.5vw,50px)"}}>HTML</h2>
                  <p>
                    　初心者には一番簡単だと聞いたので一番最初に学んだ言語です。高校の時にprogateの無料の部分だけやりました。大学では1年生の時にプログラミングの授業やUdemyで基礎的な部分を学びました。最近はNext.jsやreact native上でhtmlが登場します。素のhtmlファイルで書くこともありますが、その場合はAIのコードを少し改変するくらいで済むことが多いです。
                  </p>
                </div>
              )}
              
              { selectedBubble === "CSS" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>CSS</h2>
                  <p>　html同様、高校でprogate、大学一年生で授業とUdemyで学びました。最近はNext.jsやreact nativeで、tailwind.css, global.cssとして使うことが多いです。Bootstrapというフレームワークを学びましたが、まだ使う機会はないです。</p>
                </div>
              )}

              { selectedBubble === "JavaScript" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>JavaScript</h2>
                  <p>　html,cssを学んだ後、同じ言語でフルスタックができるというところに魅力を感じたのでこの言語をメインに学んでいこうと決心しました。大学1年生でUdemy,公式ドキュメントなどで文法や基礎知識を軽く学び、練習としてAIを用いながら素のjavascriptでとてもシンプルなtodoリストなどを作ったりしました。その後は主に1年生の春休み中、node.jsやreactにも触れようと考え、海外のyoutubeのコーディング動画を真似してフルスタック(主にバックエンド)を軽く学びました。その時、DBとしてmongoDB,APIのテストツールとしてpostmanを触れました。最近はtypescriptに乗り換えています。</p>
                </div>
              )}

              { selectedBubble === "TypeScript" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>TypeScript</h2>
                  <p>
                   　javascriptよりも安全な言語だと知ってtypescriptを学び始めました。Next.jsやexpoを用いてwebサイトやアプリを開発しました。javascriptの文法を学んだので割と早く慣れてきました。
                  </p>
                </div>
              )}

              { selectedBubble === "Python" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>Python</h2>
                  <p>　就活の際の面接のコーディングテストでtypescriptよりやりやすいだろうと考えたため最近学び始めました。AtCoderにもっと参加したいのでバイトが被らないようにずらそうと思っています。ゆくゆくはpythonの実践的なスキルも手札として身に付けたいと考えています。</p>
                </div>
              )}

              { selectedBubble === "基本情報技術者試験" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(22px,3.5vw,50px)"}}>基本情報技術者試験</h2>
                  <p>
                    　大学1年生の夏休みに取得しました。IT全般について全然分からない状態だったので本格的にプログラミングをやっていく前に取ろうと考えていました。また、情報系の学科なので予習に丁度いいと思い取得しました。資格で言ったら、最近は極稀にAWSの資格の勉強をすることはありますが、より実践的な実力を上げることを重要視しているので、とりあえずはITの資格は基本情報だけでいいかなと考えています。
                  </p>
                </div>
              )}

              { selectedBubble === "toeic" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>TOEIC</h2>
                  <p>　大学入学前の課題として受けなければならないことを知って旅行中に初めて受験し、TOEIC IPで550点でした。入学後から少しずつTOEICの対策をして、冬休みに追い込んで1年生の1月に個人受験で735点でした。そして3月にはまたTOEIC IPですが800点でした。最近はプログラミングにより集中するため英語の勉強は個人ではしていませんが、在学中に800点後半ほど取れるようになるのが目標です。ITに限った話ではないと思いますが、話す言語が増えるほど活動範囲や情報源が広まると考えているので、今は英語で精一杯ですが、長い目で見れば他の言語を学ぶのもいい選択肢なのではないかなと考えています。
                  </p>
                </div>
              )}

              { selectedBubble === "Photoタイマー" && (
                <div className="flex flex-col ">
                  <h2 className=" text-center mb-[5%]"
                  style={{fontSize:"clamp(25px,4vw,50px)"}}>Photoタイマー</h2>
                  <p>
                    
                  </p>
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
