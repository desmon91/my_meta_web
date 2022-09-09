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
      <Script type="text/javascript" id="tawk-to">
        {` var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/631a95d137898912e96816c4/1gcftif7c';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`}
      </Script>
      <Footer />
    </div>
  );
}
