  <h1 align="center">ChatSync - An AI Powered Chat Application</h1>

<p align="center">
 Make your chats a little bit more exiciting by integrating AI of your choice.
</p>

<p align="center">
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a>
</p>
<img alt="AI-powered chat application." src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%204.59.32%E2%80%AFPM.png?updatedAt=1753623553865">
<br/>

## Tech Stack

- [Convex](https://convex.dev/) for the database, real-time events and cloud functions
- Next.js [App Router](https://nextjs.org/docs/app) for the framework
- [ShadCN](https://ui.shadcn.com/) for UI components
- [Convex File Storage](https://docs.convex.dev/file-storage) for storing images and videos
- [ZegoCloud](https://www.zegocloud.com) for video calls
- [Clerk](https://clerk.dev/) for user authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) just to feel cool

## Deploy Your Own

You can deploy this app by setting up the following services and adding their environment variables:

1. Run `npm install` to install dependencies.
2. Run `npm run dev`. It will prompt you to log into [Convex](https://convex.dev) and create a project.
3. It will then ask you to supply the `CLERK_ISSUER_URL`. To do this:
   1. Make a [Clerk](https://clerk.dev) account.
   2. Copy both the `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` [API keys](https://dashboard.clerk.com/last-active?path=api-keys) into `.env.local`.
   3. Do steps 1-3 [here](https://docs.convex.dev/auth/clerk) and copy the Issuer URL.
      It should look something like `https://some-animal-123.clerk.accounts.dev`.
   4. Add `CLERK_ISSUER_URL` to your [Convex Environment Variables](https://dashboard.convex.dev/deployment/settings/environment-variables?var=CLERK_ISSUER_URL)
      Paste the Issuer URL as the value and click "Save".
4. Add `CLERK_HOST_NAME` to your [Convex Environment Variables](https://dashboard.convex.dev/deployment/settings/environment-variables?var=CLERK_ISSUER_URL) as for the value paste the `CLERK_ISSUER_URL's` value
5. From your [CLERK](https://clerk.dev) account, under the WebHooks, add an endpoint which should look like this: `https://your-convex-url.convex.site/clerk` and select `user.created` `user.updated` `session.created` `session.ended` events. Copy the webhook secret and in your Convex Dashboard add this env variable `CLERK_WEBHOOK_SECRET` and paste the value
6. Now your frontend and backend should be running and you should be able to log in but not support OpenAI features.
7. Get an [Gemini](https://aistudio.google.com/apikey) api key, then add it to `GEMINI_API_KEY` in the .env.local file and add it to Convex Dashboard
8. To enable video calling, create a [ZEGOCLOUD](https://www.zegocloud.com) account, create a project and select voice && video calls. Paste `ZEGO_APP_ID` and `ZEGO_SERVER_SECRET` to .env.local and save

## Chat Interface

A modern chat interface for seamless messaging between users.

<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%205.02.36%E2%80%AFPM.png?updatedAt=1753623553828" alt="Chat Interface Screenshot" width="600"/>

## Chat and Group Chat Creation Interface

Easily create new chats or group chats with a user-friendly interface.

<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%205.10.56%E2%80%AFPM.png?updatedAt=1753623553970" alt="Chat and Group Chat Creation Screenshot" width="600"/>
<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%205.12.06%E2%80%AFPM.png?updatedAt=1753623553186" alt="Chat and Group Chat Creation Screenshot" width="600"/>

## Peer to Peer Chat Interface

Direct messaging between two users with real-time updates.

<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%205.03.05%E2%80%AFPM.png?updatedAt=1753623553914" alt="Peer to Peer Chat Interface Screenshot" width="600"/>

## Group Chat Interface

Collaborate and communicate with multiple users in a group chat setting.

<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202025-07-27%20at%207.41.15%E2%80%AFPM.png?updatedAt=1753625511647" alt="Group Chat Interface Screenshot" width="600"/>

## Videocall Waiting Room Interface

A waiting room for users before joining a video call session.

<img src="https://ik.imagekit.io/ritesh0805/cdn/pre-video-interface?updatedAt=1753623785681" alt="Videocall Waiting Room Screenshot" width="600"/>

## Videocall Interface

High-quality video calling experience for individuals and groups.

<img src="https://ik.imagekit.io/ritesh0805/cdn/Screenshot%202024-09-25%20at%209.07.24%E2%80%AFAM.png?updatedAt=1753624829642" alt="Videocall Interface Screenshot" width="600"/>
