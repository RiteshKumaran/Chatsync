"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitch = () => {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='bg-transparent relative'>
				<Button variant='outline' size='icon' className="border-none hover:bg-gray-200 dark:hover:bg-gray-800">
					<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='bg-gray-primary dark:bg-gray-tertiary'>
				<DropdownMenuItem 
					onClick={() => setTheme("light")}
					className={`${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''} cursor-pointer`}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme("dark")}
					className={`${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''} cursor-pointer`}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme("system")}
					className={`${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''} cursor-pointer`}
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSwitch;
