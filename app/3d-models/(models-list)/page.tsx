import modelsData from "@/app/data/models.json"

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
        <div className="flex flex-col">
            {models.map((item: Model)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
        
    )
}