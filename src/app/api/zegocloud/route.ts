import { generateToken04 } from "./zegoServerAssistant";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const userID = url.searchParams.get("userID");

  // Add validation for userID
  if (!userID) {
    return Response.json(
      { error: "userID is required" },
      { status: 400 }
    );
  }

  const appID = +process.env.NEXT_ZEGO_APP_ID!;
  const serverSecret = process.env.NEXT_ZEGO_SERVER_SECRET!;

  // Validate required environment variables
  if (!appID || !serverSecret) {
    return Response.json(
      { error: "Missing required environment variables" },
      { status: 500 }
    );
  }

  const effectiveTimeInSeconds = 3600;
  const payload = "";

  const token = generateToken04(
    appID,
    userID,
    serverSecret,
    effectiveTimeInSeconds,
    payload
  );

  return Response.json({ token, appID });
}
