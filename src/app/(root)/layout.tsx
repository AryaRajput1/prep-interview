import SignOutButton from "@/components/signOutButton";
import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import { trackAllowedDynamicAccess } from "next/dist/server/app-render/dynamic-rendering";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/sign-in");
  }
  
  return (
    <div className="root-layout">
      <nav className="flex justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepInterview</h2>
        </Link>
        <SignOutButton/>
      </nav>
      {children}
    </div>
  );
}
export default RootLayout;
