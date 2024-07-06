import CustomButton from "@/app/utils/CustomButton"
import PlaceHolder from "@/app/utils/PlaceHolder"


function Banner() {
        return (
                <div className='bg-gray-300 w-full h-[30rem] mt-4 rounded-lg'>
                        <PlaceHolder>
                                <div>
                                        <div>
                                                Testimony
                                        </div>
                                        <CustomButton btname={'Read Banner'} onClick={console.log()} />
                                </div>
                        </PlaceHolder>
                </div>
        )
}

export default Banner 
