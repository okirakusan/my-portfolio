import { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Image from "next/image";
import { Button } from "semantic-ui-react";
import React from "react";

//処理のサンプル
// const catImages: string[] = [
//   "https://cdn2.thecatapi.com/images/bpc.jpg",
//   "https://cdn2.thecatapi.com/images/eac.jpg",
//   "https://cdn2.thecatapi.com/images/6qi.jpg",
// ];

// const randomCatImage = (): string => {
//   const index = Math.floor(Math.random() * catImages.length);
//   return catImages[index];
// };

//レスポンスのデータ構造
interface CatCategory {
  id: number;
  name: string;
}

//レスポンスに含まれる猫画像の型
interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

//1回目
// const fetchCatImage = async () => {
//   const res = await fetch("https://api.thecatapi.com/v1/images/search");
//   const result = await res.json();
//   return result[0];
// };

//2回目
const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};

// fetchCatImage().then((image) => {
//   console.log(`猫の画像: ${image.url}`);
// });

interface IndexPageProps {
  initialCatImageUrl: string;
}

const CatApi: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  //   const [catImageUrl, setCatImageUrl] = useState(
  //     "https://cdn2.thecatapi.com/images/bpc.jpg"
  //   );
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
    setIsLoading(false);
  };

  return (
    <>
      <section>
        <div className="min-h-screen flex-col justify-center text-center dark:text-white">
          <div className="pt-28 lg:pt-36 mb-7 ">
            <h1>猫画像アプリ👋</h1>
          </div>
          <div className="relative h-96 mb-5">
            {isLoading ? (
              <Loader active inline="centered" size="huge" />
            ) : (
              <Image
                src={catImageUrl}
                alt="今日の猫さん"
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
          <Button onClick={handleClick}>次の猫さんを表示</Button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default CatApi;
