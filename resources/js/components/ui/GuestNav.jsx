import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import AnimatedLink from "@/components/ui/AnimatedLink";

export default function GuestNav() {
    return (
        <>
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
        </>
    );
}