import { Header } from "@/components/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Descrição da Home",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-2xl font-bold text-white">
          Esse template foi assinado pelo DOGE
        </h1>
      </main>
    </>
  );
}
