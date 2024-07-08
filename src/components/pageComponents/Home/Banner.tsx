import Image from "next/image"
import BannerImage from "@/assets/banner2.jpg"



function Banner() {
        return (
                <div className='flex w-full pt-32'>
                        <div className="flex gap-5 justify-center items-center w-full h-96 ">
                                <div className="w-full relative h-full">
                                        <Image src={BannerImage} alt="Books piled on top of one another" className="w-full h-full object-cover scale-100" fill={true} />
                                </div>
                                <div className="h-full w-full flex flex-col justify-center items-center">
                                        <div className="text-7xl font-bold">
                                                GET BOOKS FOR REAAAALY CHEAP!
                                        </div>
                                        <div className="pl-40 pt-10">
                                                <div className="text-3xl font-semibold pt-4">
                                                        Sell and and buy second hand books.
                                                </div>
                                                <div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Banner 
