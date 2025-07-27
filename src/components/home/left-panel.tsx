"use client";
import { ListFilter, Search, SortAsc, SortDesc, Clock } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import Conversation from "./conversation";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import UserListDialog from "./user-list-dialog";
import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useConversationStore } from "@/store/chat-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LeftPanel = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const conversations = useQuery(
    api.conversations.getMyConversations,
    isAuthenticated ? undefined : "skip"
  );

  const { selectedConversation, setSelectedConversation } =
    useConversationStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest"); // Options: newest, oldest, alphabetical

  useEffect(() => {
    const conversationIds = conversations?.map(
      (conversation) => conversation._id
    );
    if (
      selectedConversation &&
      conversationIds &&
      !conversationIds.includes(selectedConversation._id)
    ) {
      setSelectedConversation(null);
    }
  }, [conversations, selectedConversation, setSelectedConversation]);

  if (isLoading) return null;

  const filteredConversations = conversations?.filter((conversation) => {
    const name = conversation.groupName || conversation.name || "";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedConversations = [...(filteredConversations || [])].sort(
    (a, b) => {
      const nameA = (a.groupName || a.name || "").toLowerCase();
      const nameB = (b.groupName || b.name || "").toLowerCase();

      switch (sortOption) {
        case "alphabetical":
          return nameA.localeCompare(nameB);
        case "oldest":
          return a._creationTime - b._creationTime;
        case "newest":
        default:
          return b._creationTime - a._creationTime;
      }
    }
  );

  return (
    <div className="w-1/4 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 bg-gray-50 dark:bg-gray-900 z-10">
        {/* Header */}
        <div className="flex justify-between bg-white dark:bg-gray-800 p-4 shadow-sm items-center">
          <UserButton afterSignOutUrl="/" />

          <div className="flex items-center gap-3">
            {isAuthenticated && <UserListDialog />}
            <ThemeSwitch />
          </div>
        </div>
        <div className="p-4 flex items-center bg-gray-50 dark:bg-gray-900">
          {/* Search */}
          <div className="relative h-10 flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 z-10"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-visible:ring-green-500 dark:focus-visible:ring-blue-500 focus-visible:ring-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <ListFilter className="cursor-pointer text-gray-700 dark:text-gray-300" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => setSortOption("newest")}
                className={`flex items-center gap-2 ${sortOption === "newest" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
              >
                <Clock size={16} /> Newest First
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSortOption("oldest")}
                className={`flex items-center gap-2 ${sortOption === "oldest" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
              >
                <SortAsc size={16} /> Oldest First
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSortOption("alphabetical")}
                className={`flex items-center gap-2 ${sortOption === "alphabetical" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
              >
                <SortDesc size={16} /> Alphabetical
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex flex-col gap-0.5 max-h-[80%] overflow-auto p-2">
        {/* Conversations will go here*/}
        {sortedConversations?.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}

        {sortedConversations?.length === 0 && (
          <div className="mt-10 p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            {searchQuery ? (
              <>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  No conversations found
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Try a different search term
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  No conversations yet
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  We understand {"you're"} an introvert, but {"you've"} got to
                  start somewhere 😊
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default LeftPanel;
