import Image from "next/image";
import { Footer } from "component/layout/Footer";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/catApi",
    label: "猫画像API",
    description:
      "クリックイベントで猫画像を表示させます。ページ遷移時に最初に表示する画像はサーバーサイドレンダリングで取得します。",
    image: "/catApi.png",
  },
  {
    href: "/chatBotGpt",
    label: "chatBotGpt",
    description:
      "今話題の「ChatGpt」の簡単なクローンを作りました。チャットボットのような形でお試し頂けます。",
    image: "/chatBotGpt.png",
  },
  {
    href: "/priceRangeMenuSelector",
    label: "ランダム注文",
    description:
      "設定金額からランダムにメニューを取得し、注文するメニューの合計金額を算出します。ChatGptを使って作成してみました。",
    image: "/priceRangeMenuSelector.png",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <div className="text-center px-1 py-2 sm:px-10 sm:py-20 overscroll-auto">
          <h2 className="text-5xl mt-4  text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            原田 智浩
          </h2>
          <p className="text-xl pb-4 dark:text-white">（はらだ ともひろ）</p>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            フロントエンジニア志望
          </h3>
          <p className="text-base md:text-md py-5 md:leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            ご覧いただきありがとうございます！
            IOTやAIの拡張性に魅力を感じエンジニアを目指して独学をしております。
            <br />
            こちらのページ最下部にてお問い合わせフォームをご利用いただけます。宜しければご連絡ください。
          </p>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              src="/dev-ed-wave.png"
              layout="fill"
              objectFit="cover"
              alt="top-icon"
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Skill</h3>
          <p className="text-base md:text-md py-2 md:leading-8 text-gray-800 dark:text-gray-200">
            このサイトはNext.jsで作成しており、下記の言語や記法を使用しています。
          </p>
        </div>
        <div className="grid gap-4 lg:gap-32 grid-cols-3 ">
          <div className=" text-center  shadow-lg   my-2 sm:my-10 rounded-xl   dark:bg-white ">
            <div className="mt-5 px-5 sm:px-14 md:px-16 lg:px-20">
              <Image
                src="/tailwindcss-icon.svg"
                alt="tailwindcss-icon"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium sm:pt-8 sm:pb-2 break-words ">
              html/ <br /> css(tailWindCss)
            </h3>
          </div>
          <div className=" text-center  shadow-lg   my-2 sm:my-10 rounded-xl   dark:bg-white ">
            <div className="mt-5 px-5 sm:px-14 md:px-16 lg:px-20">
              <Image
                src="/typescript-icon.svg"
                alt="typescript-icon"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium sm:pt-8 sm:pb-2 break-words ">
              javaScript/ <br /> typeScript
            </h3>
          </div>
          <div className=" text-center  shadow-lg   my-2 sm:my-10 rounded-xl   dark:bg-white ">
            <div className="mt-5 px-5 sm:px-14 md:px-16 lg:px-20">
              <Image
                src="/git-icon.svg"
                alt="git-icon"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium sm:pt-8 sm:pb-2 break-words ">
              .tsx/.json/.env/.gitignore/.md
            </h3>
          </div>
        </div>
      </section>
      <section className="py-10 lg:mb-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-base md:text-md py-2 md:leading-8 text-gray-800 dark:text-gray-200">
            <span className=" font-bold">３つの簡単なアプリ</span>
            を掲載しております。
          </p>
          <ul>
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="hover:underline hover:opacity-80 text-teal-500 font-bold text-base md:text-md  md:leading-8  cursor-pointer  ">
                      {item.label}
                    </a>
                  </Link>
                  <p className="text-base md:text-md mb-2 md:leading-8 text-gray-800 dark:text-white">
                    　{item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          {NAV_ITEMS.map((item) => (
            <div
              className="basis-1/2 justify-between sm:px-4 my-3 lg:my-7"
              key={item.href}
            >
              <Image
                src={`${item.image}`}
                alt={`${item.label}`}
                className="rounded-lg "
                width={100}
                height={60}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
