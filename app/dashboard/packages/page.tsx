import AllPackages from "@/components/packages";
import { Button } from "@/components/ui/button";

export default function Packages() {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-white ">Your Packages</h1>
          <AllPackages />
         
        </div>
      </main>
    </div>
  );
}
