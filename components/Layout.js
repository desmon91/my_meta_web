import Head from "next/head";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Meta Page",
  description = "Desmond's Portfolio",
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
        <meta name="author" content="Desmond Kristian" />
      </Head>
      {children}
      <Footer />
    </div>
  );
}
