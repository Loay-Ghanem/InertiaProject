import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"
import AnimatedLink from "@/components/ui/AnimatedLink"
import Logo from "@/components/logo"
import ModeToggle from "@/components/ui/ModeToggle"
import { usePage } from "@inertiajs/react"
import TextLink from '@/components/text-link';
import GuestNav from '@/components/ui/GuestNav'
import CustomerNav from '@/components/ui/CustomerNav'
import FactoryNav from '@/components/ui/FactoryNav'

export default function Navbar() {
    const auth = usePage().props.auth.user;
    const storageAsset = usePage().props.storageAsset;
    const avatar = auth.image
        ? `${storageAsset}/${auth.image}`
        : "/images/users.png";
    return (
        <>
            <NavigationMenu className="p-3 flex items-center justify-between bg-gray-800 dark:bg-gray-200 rounded-b-lg shadow-md w-full">
                <NavigationMenuList className="flex-wrap gap-4">
                    <NavigationMenuItem>
                        <AnimatedLink href={route('home')}>
                            <Logo />
                        </AnimatedLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="hover:bg-white hover:text-black" asChild>
                            <AnimatedLink href={route('home')}>Home</AnimatedLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="hover:bg-white hover:text-black" asChild>
                            <AnimatedLink href={route('about')}>About</AnimatedLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="hover:bg-white hover:text-black" asChild>
                            <AnimatedLink href={route('contact')}>Contact</AnimatedLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {auth && (
                        auth.user_type === 'Customer'
                            ? <CustomerNav />
                            : <FactoryNav />
                    )}
                    <NavigationMenuItem className="ml-auto">
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
                {!auth ? (
                    <GuestNav />
                ) : (
                    <NavigationMenuList className="flex-wrap gap-4">
                        <NavigationMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center rounded-full border hover:bg-gray-50 transition p-1">
                                        <img
                                            src={avatar}
                                            alt="User Avatar"
                                            className="h-9 w-9 rounded-full object-cover"
                                        />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <DropdownMenuLabel className="flex items-center space-x-2 px-2 py-2">
                                        <img
                                            src={avatar}
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{auth.name}</p>
                                            <p className="text-xs text-muted-foreground">{auth.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <AnimatedLink href={route("profile")} className="cursor-pointer">
                                                Profile
                                            </AnimatedLink>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <AnimatedLink
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="w-full text-left text-red-600 hover:text-red-700 font-medium transition"
                                        >
                                            Logout
                                        </AnimatedLink>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                )}
            </NavigationMenu>
        </>
    );
}