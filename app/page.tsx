import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          <span>No 1 Dashboard</span>
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          AdminCraft
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit mb-4">
          Harmony in Administration,
        </div>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          Mastery in Action.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-5 max-w-xs md:max-w-2xl text-center",
          textFont.className
        )}
      >
        Crafting control seamlessly - AdminCraft empowers you to effortlessly
        manage users, products, and transactions with precision and ease.
      </div>
      <div className="flex gap-4">
        <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-up">Get AdminCraft for free</Link>
        </Button>
        <Button className="mt-6" size="lg" asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
