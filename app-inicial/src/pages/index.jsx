import Image from "next/image";
import { Header } from "@/components/Header/header";
import { Search } from "@/components/Search/search";
import { Cards } from "@/components/Cards/Cards";


export default function Home() {
  return (
    <main>
      <Header/>
      <Search/>
      <Cards/>
    </main>
  );
}
