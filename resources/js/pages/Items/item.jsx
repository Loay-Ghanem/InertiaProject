import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Item({ item }) {
    const { props } = usePage();
    const assetStorage = props.storageAsset;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!item) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold text-foreground">
                        Item Not Found
                    </h1>
                    <p className="text-muted-foreground">
                        The item you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl p-6">
                <div className="overflow-hidden rounded-xl bg-card shadow-lg">
                    <div className="md:flex">
                        {/* Left Side - Main Image */}
                        <div className="md:w-1/2">
                            <div className="aspect-square overflow-hidden md:aspect-auto md:h-full">
                                <img
                                    src={`${assetStorage}/${item.images[currentImageIndex]}`}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="p-6 md:w-1/2">
                            <div className="mb-4">
                                <h1 className="mb-2 text-3xl font-bold text-card-foreground">
                                    {item.name}
                                </h1>
                                <div className="text-2xl font-bold text-primary">
                                    ${item.price}
                                </div>
                            </div>

                            {/* Category and Factory Info */}
                            <div className="text-muted-foreground mb-6 flex flex-wrap gap-4 text-sm">
                                {item.category && (
                                    <span>Category: {item.category.name}</span>
                                )}
                                {item.factory && (
                                    <span>Factory: {item.factory.name}</span>
                                )}
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="mb-3 text-xl font-semibold text-card-foreground">
                                    Description
                                </h2>
                                <p className="leading-relaxed text-card-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional Images - Below on small screens */}
                    {item.images && item.images.length > 1 && (
                        <div className="border-t border-border p-6">
                            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
                                Gallery
                            </h2>
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {item.images.slice(1).map((image, index) => (
                                    <img
                                        key={index}
                                        src={`${assetStorage}/${image}`}
                                        alt={`${item.name} ${index + 2}`}
                                        className="h-24 w-24 flex-shrink-0 cursor-pointer rounded-lg border border-border object-cover"
                                        onClick={() =>
                                            setCurrentImageIndex(index + 1)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
