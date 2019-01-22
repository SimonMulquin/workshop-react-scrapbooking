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
                reader.onload = d => resolve({
                    filename: f.name,
                    url: d.target.result,
                    position: {
                        X: e.clientX,
                        Y: e.clientY,
                    },
                });
                reader.readAsDataURL(f);
            })
        ], i + 1)
    };

    return Promise.all(processFiles())
};