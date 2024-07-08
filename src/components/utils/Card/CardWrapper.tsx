import Card from "@/src/components/utils/Card/Card"
import { generate_data } from "@/src/datas/forYouPage"
import { useState } from "react"

const CardWrapper = () => {


    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5">
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
        <Card name="Name" image="" price="10" />
    </div>
}

export default CardWrapper
