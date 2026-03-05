import modelsData from "@/app/data/models.json"
import Link from "next/link"

import Image from "next/image"
import HeroImgSquare from "@/public/hero-image-square.png"

type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export default async function ModelsPage3D () {

    const models: Model[] = modelsData

    return(
        <div className="p-3 flex flex-col gap-3">
            {models.map((item: Model)=>(
                  <Link href= "" key={item.id} className="flex flex-col border-2 border-gray-200 rounded-md shadow">
                    <Image className="rounded-t-sm" src={HeroImgSquare} alt="img with 3d printing items" />
                    <div className="p-2 flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="w-fit p-1 px-2 border border-gray-200 rounded-full">{item.category}</p>
                        <div>
                            <p>{item.likes}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        
    )
}