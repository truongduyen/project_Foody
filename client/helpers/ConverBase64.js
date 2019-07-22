function ConverBase64(files,cb) {
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    return reader.onloadend = () => {
        return cb ({
            file: file,
            base64: reader.result
        })
    };
}

export default ConverBase64;