import Link from "next/link";
import { client } from "../libs/client";
import "@notus-pro/react/tailwind.min.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Concept from "./components/Concept/Concept";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Moment from 'react-moment';
import 'moment-timezone';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"


export default function Home({ news }) {
  return (
    <>
      <Header />
      <Navbar />
        <main >
          <div className="mx-7 mb-7 mt-20 border shadow-lg pb-20">
            <div className="container mx-auto flex flex-col items-center" >
              <div className="text-4xl font-thin border border-black px-10 py-2 mt-10 mb-20">
                News
              </div>
            </div>
                {news.map((news) => (
                  <div className="pb-2 text-xl flex justify-center text-gray-600 hover:text-gray-200 border-yellow-600" key={news.id}>
                    <Link href={`/components/News/${news.id}`}>
                      <Moment format="YYYY/MM/DD">
                        {news.createdAt}
                      </Moment>
                    </Link>
                    <br />
                    <Link href={`/components/News/${news.id}`}>
                      <a>　{news.title}</a>
                    </Link>
                  </div>
                ))}
          </div>
          <Concept />
          <GoogleMap />
        </main>
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};