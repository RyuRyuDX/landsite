import { client } from "../../../libs/client";
import Header from "../Header/Header";
import Moment from 'react-moment';
import 'moment-timezone';
import Footer from "../Footer/Footer";

export default function newsId({ news }) {
  return (
    <>
      <Header />
      <main className="border m-10 shadow-lg h-full p-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 mr-auto ml-auto">
              <h1 className="text-3xl mb-5">{news.title}</h1>
              <Moment format="YYYY/MM/DD">
                <p>{news.createdAt}</p>
              </Moment>
              <div
                className="py-10"
                dangerouslySetInnerHTML={{
                  __html: `${news.body}`,
                }}
                />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/components/News/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};