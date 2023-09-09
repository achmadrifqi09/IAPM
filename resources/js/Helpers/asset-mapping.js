const AssetMapping = (assets) => {
    return new Promise((resolve) => {
        let imageMappingResult = [];
        let videoMappingResult = [];
        assets.map((asset) => {
            if (asset.asset_type === "Image") {
                imageMappingResult = [
                    ...imageMappingResult,
                    { value: asset.id, label: asset.asset_name },
                ];
            } else if (asset.asset_type === "Video") {
                videoMappingResult = [
                    ...videoMappingResult,
                    { value: asset.id, label: asset.asset_name },
                ];
            }
        });
        resolve({
            image: imageMappingResult,
            video: videoMappingResult,
        });
    });
};

export default AssetMapping;
