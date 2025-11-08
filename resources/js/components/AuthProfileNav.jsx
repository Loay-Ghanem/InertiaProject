import {
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import AnimatedLink from "@/components/ui/AnimatedLink"
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { usePage } from "@inertiajs/react"
import CustomForm from "@/components/CustomForm"

export default function AuthProfileNav() {

    const auth = usePage().props.auth.user;
    const storageAsset = usePage().props.storageAsset;
    const avatar = auth.image
        ? `${storageAsset}/${auth.image}`
        : "/images/users.png";
    return (
        <>
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
                                <CustomForm action={'logout'}>
                                    <div className="flex justify-end">
                                        <Button
                                            type="submit"
                                            className="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700"
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </CustomForm>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
            </NavigationMenuList>
        </>
    )
}