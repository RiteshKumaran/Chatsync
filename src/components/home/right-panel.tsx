"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, X } from "lucide-react";
import MessageInput from "./message-input";
import MessageContainer from "./message-container";
import ChatPlaceHolder from "@/components/home/chat-placeholder";
import GroupMembersDialog from "./group-members-dialog";
import { useConversationStore } from "@/store/chat-store";
import { useConvexAuth } from "convex/react";

const RightPanel = () => {
	const { selectedConversation, setSelectedConversation } = useConversationStore();
	const { isLoading } = useConvexAuth();

	if (isLoading) return null;
	if (!selectedConversation) return <ChatPlaceHolder />;

	const conversationName = selectedConversation.groupName || selectedConversation.name;
	const conversationImage = selectedConversation.groupImage || selectedConversation.image;

	return (
		<div className='w-3/4 flex flex-col bg-white dark:bg-gray-900'>
			<div className='w-full sticky top-0 z-50'>
				{/* Header */}
				<div className='flex justify-between bg-white dark:bg-gray-800 p-4 shadow-sm border-b border-gray-100 dark:border-gray-700'>
					<div className='flex gap-3 items-center'>
						<Avatar className="h-10 w-10 border-2 border-green-500 dark:border-blue-500">
							<AvatarImage src={conversationImage || "/placeholder.png"} className='object-cover' />
							<AvatarFallback>
								<div className='animate-pulse bg-gradient-to-r from-green-500 to-blue-600 w-full h-full rounded-full' />
							</AvatarFallback>
						</Avatar>
						<div className='flex flex-col'>
							<p className="font-medium text-gray-900 dark:text-white">{conversationName}</p>
							{selectedConversation.isGroup && (
								<GroupMembersDialog selectedConversation={selectedConversation} />
							)}
						</div>
					</div>

					<div className='flex items-center gap-7 mr-5'>
						<a href='/video-call' target='_blank' className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
							<Video size={23} className="text-gray-700 dark:text-gray-300" />
						</a>
						<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
							<X size={16} className='cursor-pointer text-gray-700 dark:text-gray-300' onClick={() => setSelectedConversation(null)} />
						</button>
					</div>
				</div>
			</div>
			{/* CHAT MESSAGES */}
			<MessageContainer />

			{/* INPUT */}
			<MessageInput />
		</div>
	);
};
export default RightPanel;
