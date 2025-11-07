import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePage } from '@inertiajs/react';
import CustomForm from '@/components/CustomForm';
import ImageUploader from '@/components/ImageUploader';
import {
    CheckCircle,
    Save,
    Shield,
    User,
    XCircle,
} from 'lucide-react';

export default function Profile() {
    const { auth } = usePage().props;
    const user = auth.user;
    const storageAsset = usePage().props.storageAsset;
    const avatar = user.image
        ? `${storageAsset}/${user.image}`
        : '/images/users.png';

    const userData = {
        name: user.name ?? "",
        email: user.email ?? "",
        phone: user.phone ?? ""
    }


    const readOnlyFields = [
        {
            label: 'User Type',
            value: user.user_type,
            icon: Shield,
            color: 'text-orange-600',
        },
        {
            label: 'Status',
            value: user.is_active ? 'Active' : 'Inactive',
            icon: user.is_active ? CheckCircle : XCircle,
            color: user.is_active ? 'text-green-600' : 'text-red-600',
        },
        {
            label: 'Email Verified',
            value: user.email_verified_at ? 'Verified' : 'Not Verified',
            icon: user.email_verified_at ? CheckCircle : XCircle,
            color: user.email_verified_at ? 'text-green-600' : 'text-red-600',
        },
        {
            label: 'Two-Factor Authentication',
            value: user.two_factor_enabled ? 'Enabled' : 'Disabled',
            icon: user.two_factor_enabled ? CheckCircle : XCircle,
            color: user.two_factor_enabled ? 'text-green-600' : 'text-red-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto max-w-4xl">
                {/* Header Card */}
                <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div className="relative px-6 pb-6">
                        <div className="-mt-16 flex flex-col items-center sm:-mt-12 sm:flex-row sm:items-end">
                            <img
                                src={avatar}
                                alt="Profile"
                                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg sm:h-32 sm:w-32 dark:border-gray-800"
                            />
                            <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left">
                                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                                    Edit Profile
                                </h1>
                                <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">
                                    Update your account information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <CustomForm
                    action={'update-profile'}
                    className="space-y-6"
                    inputData={userData}
                >
                    {({ data, setData, processing, errors }) => (
                        <>
                            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h2 className="mb-6 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                                    <User className="mr-2 h-6 w-6 text-blue-600" />
                                    Personal Information
                                </h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="w-full"
                                            required
                                            autoComplete="name"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            defaultValue={user.email}
                                            className="w-full"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"
                                        />
                                        <InputError
                                            message={errors.email}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="phone"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            defaultValue={user.phone || ''}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full"
                                            autoComplete="tel"
                                        />
                                        <InputError
                                            message={errors.phone}
                                        />
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <Label
                                        htmlFor="phone"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Personal Image
                                    </Label>
                                    <ImageUploader image={user.image ?? null} onSubmit={(uploadedImage) => setData('image', uploadedImage)} />
                                    <InputError
                                        message={errors.image} />
                                </div>
                            </div>

                            {/* Read-Only Fields */}
                            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h2 className="mb-6 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                                    <Shield className="mr-2 h-6 w-6 text-orange-600" />
                                    Account Information
                                </h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {readOnlyFields.map((field, index) => {
                                        const IconComponent = field.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div
                                                        className={`rounded-full bg-gray-100 p-2 dark:bg-gray-600 ${field.color}`}
                                                    >
                                                        <IconComponent className="h-5 w-5" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                                                            {field.label}
                                                        </h3>
                                                        <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                            {field.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
                                >
                                    <Save className="mr-2 h-5 w-5" />
                                    {processing
                                        ? 'Saving...'
                                        : 'Save Changes'}
                                </Button>
                            </div>
                        </>
                    )}
                </CustomForm>
            </div>
        </div>
    );
}
