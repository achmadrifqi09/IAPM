const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;

const GetterAsset = (id, assets) => {
    const asset = findImage(id, assets);

    if (!asset) {
        return "";
    }

    return `${baseUrlAsset}/${asset?.file}`;
};

const findImage = (id, assets) => {
    const asset = assets.find((asset) => {
        return asset.id === id;
    });
    return asset;
};

export default GetterAsset;
