import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";

export default function Home() {
	return (
		<main className='p-5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900'>
			<div className='flex overflow-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto rounded-xl shadow-xl'>
				{/* Accent color decorator */}
				<div className='fixed top-0 left-0 w-full h-24 bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-600 dark:to-blue-700 -z-30' />
				<LeftPanel />
				<RightPanel />
			</div>
		</main>
	);
}
