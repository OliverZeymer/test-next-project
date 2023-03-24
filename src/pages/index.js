import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Page | Home</title>
        <meta name="keywords" content="test, nextjs" />
        <meta name="description" content="Home Page" />
      </Head>
      <div>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique soluta ipsum aliquam, libero, beatae consectetur cumque amet asperiores molestiae ratione dolore
          magnam repudiandae deleniti temporibus expedita aperiam quis veniam dolores. Architecto, dignissimos ipsa et iure iusto aut corporis similique?
        </p>
        <Link className="py-2 px-6 text-lg bg-primary rounded-lg" href="/people">
          See People Listing
        </Link>
      </div>
    </>
  );
}
