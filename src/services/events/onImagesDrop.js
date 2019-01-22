import { GetImageDimensionsFromSrc } from "services/DOM";

export default e => {
    e.stopPropagation();
    e.preventDefault();
    const { files } = e.dataTransfer;
    
    const processFiles = (processed = [], i = 0) => {
        const f = files[i];
        if (i >= files.length) {
            return processed;
        };
        return processFiles([...processed,
            new Promise((resolve, reject) => {
                if (!f.type.match('image.*')){
                    reject("Le fichier " + f.name + " n'est pas considéré comme une image.")
                };
                const reader = new FileReader();
                reader.onload = async d => {    
                    const url = d.target.result;
                    const dimensions = await GetImageDimensionsFromSrc(d.target.result);
                    return resolve({
                        filename: f.name,
                        url,
                        position: {
                            X: e.clientX - dimensions.width/2,
                            Y: e.clientY - dimensions.height/2,
                        },
                        dimensions,
                    });
                }
                reader.readAsDataURL(f);
            })
        ], i + 1)
    };

    return Promise.all(processFiles())
};