import Image from "next/image"
import HeroImgSquare from "@/public/hero-image-square.png"

export default function AboutPage() {
  return (
    <main className="p-3 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
            <Image className="rounded-md" src={HeroImgSquare} alt="img with 3d printing items" />
            <span className="text-sm uppercase">About printforge</span>
            <h1 className="text-5xl font-bold leading-tight">Empowering makers worldwide</h1>
            <p>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, 
                makers, and professional designers to share and discover amazing STL files for 3D printing.
            </p>
            <p>Our mission is to foster a vibrant community where creativity meets technology, 
                enabling anyone to bring their ideas to life through 3D printing.
            </p>

            <div className="border-y-2 border-gray-300 py-4 my-2 flex flex-col gap-5">
                <div>
                    <div className="mb-2">
                        <h3 className="text-2xl font-bold leading-tight">100K + Models</h3>
                    </div>
                    <p>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <div>
                    <div className="mb-2">
                        <h3 className="text-2xl font-bold leading-tight">Active Community</h3>
                    </div>
                    <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <div>
                    <div className="mb-2">
                        <h3 className="text-2xl font-bold leading-tight">Free to Use</h3>
                    </div>
                    <p>Most models are free to download, with optional premium features for power users.</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold leading-tight">Our Vision</h2>
                <p>At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, 
                    enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
                </p>
                <hr className="w-1/2 mx-auto bg-gray-500" />
                <p>Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, 
                    or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
                </p>
            </div>
        </div>
    </main>
  );
}