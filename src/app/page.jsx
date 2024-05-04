import Image from "next/image";
import Animal from "./components/ui/Animal/Animal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Animal/>
    </main>
  );
}
