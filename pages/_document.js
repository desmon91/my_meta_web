import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="See Desmond's Metaverse Web Portofolio. Desmond Kristian is a Full Stack Web Developer and a UX Designer. He like to describe himself as the jack of all trades who can design and make an end-to-end product with a user-centric design approach."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, UX Designer, Desmond Kristian, Computer Science, Portofolio, Web Portofolio, Metaverse"
        />
        <meta name="author" content="Desmond Kristian" />
        {/* Google verification tag */}
        <meta
          name="google-site-verification"
          content="dTGyOEnAGE0-1Q-FFVcKXMHQc46YHBl9oaTt0Bsqw_8"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              'cookie_flags': 'SameSite=None;Secure',
              'cookie_domain': 'desmond-kristian.my.id'
            });
                `}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
