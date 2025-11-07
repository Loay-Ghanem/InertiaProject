import addImg from '@/images/add.png'
import { useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';

export default function ImageUploader({ image = null, onSubmit }) {
    const storageAsset = usePage().props.storageAsset;
    const previewImg = image == null ? addImg : `${storageAsset}/${image}`
    const [img, setImg] = useState(previewImg);
    const imageUploader = useRef();

    const handleImageUploader = (e) => {
        const file = e.target.files[0];
        setImg(URL.createObjectURL(file));
        if (onSubmit) onSubmit(file);
    };

    return (
        <>
            <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={imageUploader}
                onChange={handleImageUploader}
            />

            <div className="rounded-lg border-2 flex items-center justify-center border-dashed border-gray-300 p-4 text-center">
                <img
                    src={img}
                    alt="Uploaded"
                    className="mt-4 max-w-full h-[100px] object-contain cursor-pointer"
                    onClick={() => imageUploader.current.click()}
                />
            </div>
        </>
    );
}
