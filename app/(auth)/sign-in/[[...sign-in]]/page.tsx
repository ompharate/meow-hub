import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex justify-center w-full items-center h-screen">
    <SignIn />;
  </div>
}