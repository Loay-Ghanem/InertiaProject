import { Link } from "@inertiajs/react";

export default function AnimatedLink({ href = '#', children }) {
    return (
        <Link
            href={href}
            className="ml-auto relative text-primary font-medium 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-primary 
             after:transition-all after:duration-300 hover:after:w-full"
        >
            {children}
        </Link>
    );
}
