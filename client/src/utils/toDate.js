function toDate(param) {
    const d = new Date(param);
    return d.toDateString(); 
};

export default toDate;