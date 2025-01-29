import { useState } from "react";

function Contents({action}) {

    const [current, setCurrent] = useState("IdAsc")

    function clickId() {

        console.log("id clicked")

        if (current === "IdAsc") {
            action("IdDec")
            setCurrent("IdDec")
        } else {
            action("IdAsc")
            setCurrent("IdAsc")
        }
    }

    function clickName() {
        if (current === "NameAsc") {
            action("NameDec")
            setCurrent("NameDec")
        } else {
            action("NameAsc")
            setCurrent("NameAsc")
        }
    }

    function clickDaysLeft() {
        if (current === "DaysLeftAsc") {
            action("DaysLeftDec")
            setCurrent("DaysLeftDec")
        } else {
            action("DaysLeftAsc")
            setCurrent("DaysLeftAsc")
        }
    }

    return (
        <section className="grid_layout text-3xl shadow-2xl">
            <span className="font-black" onClick={clickId}>ID</span>
            <span className="font-black" onClick={clickName}>Name</span>
            <span className="font-black" onClick={clickDaysLeft}>Expiring On</span>
            <span className="font-black" onClick={clickDaysLeft}>Days Left</span>
        </section>
)
}

export default Contents;