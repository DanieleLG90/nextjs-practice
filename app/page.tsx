import Image from "next/image"
import HeroImg from "@/public/hero-image.png"

export default function Home() {
  return (
    <main className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-4 p-4 items-start">
        <h1 className="text-4xl font-bold tracking-normal leading-snug">Discover what’s possible with 3D printing</h1>
        <p className="text-lg font-normal">Join our community of creators and explore a vast library of user-submitted models.</p>
        <button className="py-1 px-2 border-2 font-semibold">BROWSER MODEL</button>
      </div>
      <Image className="p-1" src={HeroImg} alt="img with 3d printing items" />
    </main>
  );
}