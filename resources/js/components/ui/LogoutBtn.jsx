import { useForm } from "@inertiajs/react";
import { logout } from '@/routes';

export default function LogoutBtn() {
    const { post } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <form
            method="POST"
            action={route('logout')}
            onSubmit={handleSubmit}
            className="bg-transparent"
        >
            <button
                type="submit"
                className="ml-auto relative text-primary font-medium 
                bg-transparent border-none cursor-pointer
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:w-0 after:h-[2px] after:bg-primary 
                after:transition-all after:duration-300 hover:after:w-full"
            >
                Logout
            </button>
        </form>
    );
}
