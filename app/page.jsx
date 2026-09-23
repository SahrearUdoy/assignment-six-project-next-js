import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/LIBRARY";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Library></Library>
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          ></link>
        </>
      </Head>
    </>
  );
}
