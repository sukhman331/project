import { getPackage } from "../api/packages.js";
import { useQuery } from "@tanstack/react-query";
import PackageDisplay from "./PackageDisplay.jsx";
import { useSelectContext } from "../utils/selectContext.jsx";

function PackageList() {

    const {data} = useQuery({
        queryKey: ["packages"],
        queryFn: getPackage
    })


    return (
        <>
            <div className="flex flex-col w-full">
                <section className="grid_layout text-3xl shadow-2xl">
                    <span className="font-semibold">Name</span>
                    <span className="font-semibold">Type</span>
                    <span className="font-semibold">Duration</span>
                    <span className="font-semibold">Price</span>
                </section>
                {data?.map((packages, index) => (
                    <PackageDisplay key={index} info={packages}/>
                ))
                }
            </div>
        </>
    )
}

export default PackageList;