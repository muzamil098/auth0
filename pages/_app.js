import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      {" "}
      <Navbar />
      <Component {...pageProps} />{" "}
    </UserProvider>
  );
}
