import localFont from "next/font/local";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <section className="h-screen flex items-center justify-center">
        <div className="p-4">
          <Image src={"/logo.png"} height={500} width={500} alt="Image"  className="w-[30rem]"/>
          <h1 className="text-8xl"></h1>
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="p-4 text-center">
      <h1 className="text-8xl font-bold text-blue-700">
         Auth0
        </h1>
        <h1 className="text-8xl font-bold">
         Task TSK-000-67
        </h1>
      </div>
    </section>
  );
}
