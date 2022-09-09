import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Meta Page",
  description = "Desmond's Portfolio",
  keywords = "Desmond's Portfolio",
}) {
  return (
    <div>
      <Head>
        <title>{`${title} | Desmond's Metaverse`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Full Stack Developer, UX Designer, Desmond Kristian"
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Desmond Kristian" />
      </Head>
      {children}

      <Script
        id="cid0020000323681731904"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 200px;height: 300px;"
      >{`{"handle":"desmondweb","arch":"js","styles":{"a":"ff6600","b":100,"c":"000000","d":"000000","k":"ff6600","l":"ff6600","m":"ff6600","p":"10","q":"ff6600","r":100,"pos":"br","cv":1,"cvbg":"ff6600","cvw":75,"cvh":30}}`}</Script>
      <Footer />
    </div>
  );
}
