import CustomButton from '@/app/utils/CustomButton'
import PlaceHolder from '@/app/utils/PlaceHolder'
import React from 'react'

type Props = {}

const Testimony = (props: Props) => {
  return (
    <div className='h-24'>
        <PlaceHolder>
            <div>
                <div>
                    Testimony
                </div>
                    <CustomButton btname={12} onClick={ console.log()} />
                    <button></button>
            </div>
        </PlaceHolder>
    </div>
  )
}

export default Testimony