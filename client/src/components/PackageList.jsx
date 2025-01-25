import { useEffect, useState} from "react";
import { getPackage } from "../api/packages.js";
import PackageDisplay from "./PackageDisplay.jsx";

function PackageList() {

    const [packageList, setPackageList] = useState([]);

    useEffect(() => {
        getPackage(setPackageList);
    }, []);

    return (
        <>
            {packageList.length > 0 &&
            packageList.map((packages, index) => (
                <PackageDisplay key={index} info={packages}/>
            ))
            }
        </>
    )
}

export default PackageList;