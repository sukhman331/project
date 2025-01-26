import { getPackage } from "../api/packages.js";
import { useQuery } from "@tanstack/react-query";
import PackageDisplay from "./PackageDisplay.jsx";

function PackageList() {

    const {data} = useQuery({
        queryKey: ["packages"],
        queryFn: getPackage
    })

    return (
        <>
            <div className="flex flex-col p-3.5">
                <section className="grid grid-cols-4 gap-4 text-center p-4">
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