import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = "https://portifolio-juliacarlini.vercel.app";
const TITLE = "Julia Carlini — Desenvolvimento Web e Segurança";
const DESCRIPTION = "Sites profissionais para negócios, construídos com segurança desde o primeiro dia. Desenvolvimento web, revisões de segurança e manutenção.";

export default function Document() {
  return (
    <Html lang="pt-PT" data-scroll-behavior="smooth">
      <Head>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content="Julia Carlini" />
        <meta name="theme-color" content="#101111" />

        {/* Open Graph — LinkedIn, WhatsApp, etc. */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/img/myImg.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/img/myImg.png`} />

        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
