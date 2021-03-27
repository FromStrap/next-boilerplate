import Head from "next/head";
import tw from "twin.macro";

const Container = tw.div`flex flex-col items-center justify-center w-screen h-screen`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS FS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <span tw="text-center text-5xl">
            <h1 tw="bg-red-600 text-white font-semibold">FromStrap</h1>
            <h1 tw="text-gray-800">NextJS Boilerplate</h1>
          </span>
          <p tw="mt-4">
            This boilerplate use <a href="https://tailwindcss.com/" tw="text-blue-500">Tailwind</a>{" "}
            with{" "}
            <a href="https://github.com/ben-rogerson/twin.macro" tw="text-gray-700">twin.macro</a>,{" "}
            <a href="https://redux.js.org/" tw="text-purple-800">Redux</a> with{" "}
            <a href="https://redux-toolkit.js.org/" tw="text-purple-700">Redux Toolkit</a> and{" "}
            <a href="https://storybook.js.org/" tw="text-pink-600">Storybook</a>.
          </p>
        </Container>
      </main>
    </div>
  );
}
