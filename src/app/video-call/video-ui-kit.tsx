import { randomID } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";  // Changed from useClerk to useUser
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useState, useEffect, useRef } from "react";

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function VideoUIKit() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const { user, isLoaded } = useUser();  // This is the correct hook with proper types
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;
    
    if (!user) {
      setError("Please sign in to join the video call");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  }, [user, isLoaded]);

  useEffect(() => {
    const initMeeting = async () => {
      if (!user?.id || !containerRef.current) return;

      try {
        const res = await fetch(`/api/zegocloud?userID=${user.id}`);
        if (!res.ok) {
          throw new Error(`Failed to get token: ${res.statusText}`);
        }

        const { token, appID } = await res.json();
        
        const username = user?.fullName || user?.emailAddresses[0].emailAddress.split("@")[0];

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          appID,
          token,
          roomID,
          user.id,
          username
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            {
              name: "Personal link",
              url: window.location.protocol + "//" + window.location.host + window.location.pathname + "?roomID=" + roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
      } catch (error) {
        console.error("Failed to initialize meeting:", error);
        setError(error instanceof Error ? error.message : "Unknown error occurred");
      }
    };

    if (!isLoading && user) {
      initMeeting();
    }
  }, [isLoading, user, roomID]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="myCallContainer"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
