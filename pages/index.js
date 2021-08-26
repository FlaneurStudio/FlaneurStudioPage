import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/f-icon.png" />
      </Head>
      <main>
        <h1 className="title">
          Flaneur Studio.
        </h1>
      </main>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 100px;
          line-height: 1.15;
          font-size: 6rem;
          font-family: Lora;
        }

        .title,
        .description {
          text-align: center;
        }

        @font-face {
          font-family: "Lora";
          src: url("/fonts/Lora-VariableFont_wght.ttf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
      `}</style>
    </div>
  )
}
