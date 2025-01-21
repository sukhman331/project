function toDate(param) {
    const d = new Date(param);

    console.log(d.toDateString());

    return d.toDateString(); 
};

export default toDate;