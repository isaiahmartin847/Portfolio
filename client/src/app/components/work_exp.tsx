
import { useEffect, useState } from "react";
import { ConstantMovementBar } from "./test_animate";



export default function () {


    return (
        <div className="flex-col border-t-2 border-b-2 border-black mt-16 text-center pt-[2%]">
            <div className="font-bold text-2xl p-1">
                <h1>Full Stack Engineer</h1>
            </div>
            <div className="pl-[10%] pr-[10%]">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellat architecto nihil numquam consectetur placeat doloribus, repudiandae pariatur facere consequuntur iste voluptatem fugiat cupiditate modi blanditiis perspiciatis expedita quaerat dolorum. Quidem hic inventore mollitia doloribus temporibus asperiores. Nobis, nihil numquam ducimus qui doloribus vel nulla est! Veritatis, obcaecati voluptatem nostrum odio adipisci nemo earum perspiciatis quaerat odit ea molestias, nam magnam totam itaque possimus facilis quos, assumenda vitae rerum soluta quibusdam? Sit illo dolores odit praesentium delectus sed ut quo quis atque culpa nostrum nesciunt, unde nisi debitis iure? Quo voluptatibus laborum quae rem tempore. Amet alias repudiandae fugiat hic.</p>
            </div>
            <div className=" mt-8">
                <h1 className="text-blue-400 font-bold ">Technology Used </h1>
                <div className="border-t-2 border-b-2 border-blue-300 h-14 mb-10">
                    <ConstantMovementBar />
                </div>
            </div>
        </div>
    );
}