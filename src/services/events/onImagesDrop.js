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
                    const {width, height} = await GetImageDimensionsFromSrc(d.target.result);
                    return resolve({
                        filename: f.name,
                        url,
                        position: {
                            X: e.clientX - width/2,
                            Y: e.clientY - height/2,
                        },
                        width,
                    });
                }
                reader.readAsDataURL(f);
            })
        ], i + 1)
    };

    return Promise.all(processFiles())
};