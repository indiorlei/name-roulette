import { Footer } from "@/components/Footer";
import { ListNames } from "@/components/ListNames";
import { NameSorter } from "@/components/NameSorter";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="gap-4 flex flex-col min-h-screen p-4 pb-10 sm:p-10 font-[family-name:var(--font-geist-sans)] items-center">
      <main
        className="flex flex-col gap-16 items-center w-full max-w-4xl flex-grow"
        aria-label="Seção principal"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NameSorter />
          <ListNames />
        </Suspense>
      </main>
      <Footer aria-label="Rodapé" />
    </div>
  );
}
