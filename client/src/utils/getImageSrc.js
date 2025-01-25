function getImageSrc(file, setImaePreview, setMessage) {
    
    // validating if it is an image
    if (file) {

        if (!String(file.type).startsWith('image/')) {
            setMessage("Please upload a valid image file. ");
            return;
        };

        const imageURL = URL.createObjectURL(file)

        setImaePreview(imageURL);
    };

};

export default getImageSrc;