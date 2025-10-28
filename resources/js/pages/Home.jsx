import { usePage, Link } from "@inertiajs/react";
export default function Home({ mainCategories = null }) {
    const props = usePage().props;
    const assetStorage = props.storageAsset;

    return (
        <div className="flex flex-col">
            <h1 className="text-center p-9 font-bold text-2xl">Categories</h1>
            < div className="flex justify-center flex-wrap items-start flex-1 gap-3">
                {mainCategories != null
                    ? (mainCategories.map(category => (
                        <Link href={route("main-category", { id: category.id})}>
                            <div key={category.id}
                                className="max-w-sm my-3  mb-20 bg-white flex flex-col items-center border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg h-50" height="50" src={`${assetStorage + "/" + category.image}`} alt="category img" />
                                <div className="p-1">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {category.name}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    ))
                    ) : (
                        <div className="flex justify-center items-center flex-1">
                            <h1 className="text-center text-lg text-gray-600">No Categories Found</h1>
                        </div>
                    )
                }
            </div >
        </div >
    );
}
