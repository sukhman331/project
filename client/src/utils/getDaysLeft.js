import dayjs from "dayjs"

function getDaysLeft(end, start = dayjs()) {
    const endDate = dayjs(end);
    if (start) {
        start = dayjs(start);   
    };

    return endDate.diff(start, "day")
};

export default getDaysLeft;