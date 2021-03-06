import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Desmond Kristian Website Portfolio" />
        <meta
          name="keywords"
          content="Full Stack Developer, UX Designer, Desmond Kristian"
        />
        <meta name="author" content="Desmond Kristian" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
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
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
