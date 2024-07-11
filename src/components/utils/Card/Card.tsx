import Image from "next/image"
import { CardProps } from "@/src/types/Card"
import { SkeletonCard } from "./CardSkeleton"


const Card: React.FC<CardProps> = ({ name, image, price }) => {

    return name ? (
        <div className="w-full h-full rounded-xl border">
            <div className="flex flex-col space-y-3  w-full p-2 shadow rounded-xl">
                <div className="w-full aspect-square rounded-xl shadow">
                    <Image src={image} alt={name} className="w-full h-full overflow-hidden object-cover" />
                </div>
                <div className="flex  w-full justify-between items-center  gap-3 h-full">
                    <div className="h-10 flex-[3] w-full ">{name}</div>
                    <div className="h-10 flex-[1] w-full ">{price}</div>
                </div>
            </div>
        </div>
    ) : <SkeletonCard />
}

export default Card
