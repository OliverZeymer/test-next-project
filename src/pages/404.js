import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Test Page | 404</title>
        <meta name="keywords" content="404, nextjs" />
        <meta name="description" content="404 Page" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold">404</h1>

        <p className="text-2xl font-semibold">Page Not Found</p>
        <Link className="py-2 px-6 text-lg bg-primary rounded-lg" href="/">
          Go Back Home
        </Link>
      </div>
    </>
  );
}
