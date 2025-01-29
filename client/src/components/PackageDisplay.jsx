function PackageDisplay({info}) {
    
    console.log(info)

    function getDuration() {

        switch (info.type) {
            case 'week':
                return (info.duration / 7);
            case 'month':
                return (info.duration / 31);
            default:
                return info.duration;
        }
    }
        
    return (

        <div className="grid_layout hover:shadow-2xl hover:bg-input_bg cursor-pointer">
            <span>{info.name}</span>
            <span>{info.type}</span>
            <span>{getDuration()}</span>
            <span>{info.price}</span>
        </div>
        
    )
};

export default PackageDisplay;