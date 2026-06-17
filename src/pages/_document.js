import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR" data-scroll-behavior="smooth">
      <Head>
        <meta name="description" content="Portfólio de Julia Carlini — Desenvolvedora Web e Especialista em Cibersegurança e Redes Informáticas. Projetos de pentesting, IoT seguro e desenvolvimento web com React e Next.js." />
        <meta name="keywords" content="Julia Carlini, desenvolvedora web, cibersegurança, pentesting, React, Next.js, portfólio" />
        <meta name="author" content="Julia Carlini" />

        {/* Open Graph — LinkedIn, WhatsApp, etc. */}
        <meta property="og:title" content="Julia Carlini — Desenvolvedora Web & Cibersegurança" />
        <meta property="og:description" content="Portfólio de Julia Carlini: projetos de pentesting, IoT seguro e desenvolvimento web com React e Next.js." />
        <meta property="og:image" content="/img/myImg.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Julia Carlini — Desenvolvedora Web & Cibersegurança" />
        <meta name="twitter:description" content="Portfólio de Julia Carlini: projetos de pentesting, IoT seguro e desenvolvimento web." />
        <meta name="twitter:image" content="/img/myImg.jpg" />

        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
