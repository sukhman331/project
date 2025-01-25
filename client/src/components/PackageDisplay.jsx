function PackageDisplay({info}) {
    
    console.log(info)

    return (
        <>
           <div>
                {info.name},{info.duration},{info.price},{info.type}
           </div>

        </>
    )
};

export default PackageDisplay;