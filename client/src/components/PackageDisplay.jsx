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

        <div className="h-12 grid grid-cols-4 gap-4 text-center p-4">
            <span>{info.name}</span>
            <span>{info.type}</span>
            <span>{getDuration()}</span>
            <span>{info.price}</span>
        </div>
        
    )
};

export default PackageDisplay;