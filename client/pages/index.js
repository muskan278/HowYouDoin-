import Head from "next/head";
import dynamic from "next/dynamic";

const HomepageWithNoSSR = dynamic(
  () => import("./../components/Layout/Homepage"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>HowYouDoin'?</title>
      </Head>
      <HomepageWithNoSSR />
    </>
  );
};

export default Home;
