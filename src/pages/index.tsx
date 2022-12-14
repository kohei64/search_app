import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [searchWard, setSearchWard] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [amazon, setAmazon] = useState<string>("https://www.amazon.co.jp/s?k=");
  const [rakuten, setRakuten] = useState<string>(
    "https://search.rakuten.co.jp/search/mall/"
  );
  const [merukari, setMerukari] = useState<string>(
    "https://jp.mercari.com/search?keyword="
  );
  const [door, setDoor] = useState<string>(
    "https://doors.doshisha.ac.jp/opac/opac_search/?lang=0&amode=2&appname=Netscape&version=5&cmode=0&smode=0&kywd"
  );
  const [google, setGoogle] = useState<string>("https://www.google.com/search?q=");
  const [youtube, setYoutube] = useState<string>("https://www.youtube.com/");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleOpen=()=>{
    setVisible(!visible)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchWard(value);
    setAmazon(`https://www.amazon.co.jp/s?k=${value}`);
    setRakuten(`https://search.rakuten.co.jp/search/mall/${value}`);
    setMerukari(`https://jp.mercari.com/search?keyword=${value}`);
    setDoor(
      `https://doors.doshisha.ac.jp/opac/opac_search/?lang=0&amode=2&appname=Netscape&version=5&cmode=0&smode=0&kywd=${value}&index_amazon_s=Books&node_s=`
    );
    setGoogle(`https://www.google.com/search?q=${value}`);
    setYoutube(`https://www.youtube.com/results?search_query=${value}`);
  };
  return (
    <div>
      <Head>
        <title>Search App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-10">
        <div className="flex">
          <h1 className="text-2xl">同時検索アプリ</h1>
          <h2 className="ml-2 p-1 px-2 border rounded-full border-gray-400" onClick={handleOpen}>
            ？
          </h2>
        </div>
          <ul className={visible ? "mt-3 list-disc border-2 rounded-xl p-2 pl-6 border-gray-600 w-3/4":"hidden"}>
            <li className="">検索キーワードを入力することで複数のwebサイトで同時に検索することができます。</li>
            <li className="">同じ商品を何度も他のサイトで検索する必要がなくなります。</li>
            <li className="">技術的にはとても単純ですが、便利です。</li>
          </ul>

        <div className="mt-5">
          <form className="flex" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="border-2 border-gray-700 rounded w-2/4 focus:outline-none p-2"
              type="text"
              onChange={handleInput}
              placeholder="検索キーワードを入力"
              value={value}
            />
            <button
              type="submit"
              className="border-2 border-gray-700 rounded p-2 bg-slate-700 text-gray-50"
            >
              set
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border-2 border-red-400 rounded p-2 bg-red-400 text-gray-50 ml-1 hover:bg-red-500 hover:border-red-500"
            >
              reset
            </button>
          </form>
          <p className="text-2xl mt-7 p-2 border-b-2 border-gray-700 inline-block">
            検索キーワード「{searchWard}」
          </p>
        </div>

        <div>
          <ul className="mt-5">
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={amazon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazonで検索
              </a>
            </li>
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={merukari}
                target="_blank"
                rel="noopener noreferrer"
              >
                メルカリで検索
              </a>
            </li>
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={door}
                target="_blank"
                rel="noopener noreferrer"
              >
                図書館で検索
              </a>
            </li>
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={google}
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleで検索
              </a>
            </li>
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTubeで検索
              </a>
            </li>
            <li className="flex my-1">
              <a
                className="border-2 border-gray-400 w-1/4 rounded p-2"
                href={rakuten}
                target="_blank"
                rel="noopener noreferrer"
              >
                楽天で検索
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
