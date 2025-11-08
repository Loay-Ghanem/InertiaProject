import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import AuthProfileNav from "@/components/AuthProfileNav"
import AnimatedLink from "@/components/ui/AnimatedLink"
import Logo from "@/components/logo"
import ModeToggle from "@/components/ui/ModeToggle"
import { usePage } from "@inertiajs/react"
import GuestNav from '@/components/ui/GuestNav'
import CustomerNav from '@/components/ui/CustomerNav'
import FactoryNav from '@/components/ui/FactoryNav'

export default function Navbar() {
    const auth = usePage().props.auth.user;
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
                    <AuthProfileNav />
                )}
            </NavigationMenu>
        </>
    );
}