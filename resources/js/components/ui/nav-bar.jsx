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
import AnimatedLink from "@/components/ui/AnimatedLink"
import Logo from "@/components/logo"
import ModeToggle from "@/components/ui/ModeToggle"
import { usePage } from "@inertiajs/react"
import TextLink from '@/components/text-link';

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
                    <NavigationMenuItem className="ml-auto">
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
                {!auth ? (
                    <NavigationMenuList className="flex-wrap gap-4">
                        <NavigationMenuItem>
                            <AnimatedLink
                                href={route('login')}
                                className="ml-auto text-primary font-medium transition-all duration-300 
                            hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                            >
                                Login
                            </AnimatedLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <AnimatedLink
                                href={route('register')}
                                className="ml-auto text-primary font-medium transition-all duration-300 
                            hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                            >
                                Register
                            </AnimatedLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                ) : (
                    <NavigationMenuList className="flex-wrap gap-4">
                        <NavigationMenuItem>
                            <TextLink
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="ml-auto relative text-primary font-medium 
                                    bg-transparent border-none cursor-pointer no-underline
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                    after:w-0 after:h-[2px] after:bg-primary 
                                    after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Logout
                            </TextLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                )}
            </NavigationMenu>
        </>
    );
}