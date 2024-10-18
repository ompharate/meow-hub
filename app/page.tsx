"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Code,
  GitBranch,
  Github,
  GithubIcon,
  Globe,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/sign-in")
  }

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <GithubIcon className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Product
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Team
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Enterprise
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Explore
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Marketplace
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
              <h1 className="text-5xl font-bold text-[#EF4444]">~ MeowHub</h1>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Where the world builds software
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Millions of developers and companies build, ship, and
                    maintain their software on GitHub—the largest and most
                    advanced development platform in the world.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Button onClick={goToLogin} variant={"destructive"} type="submit">
                      Sign up for GitHub
                    </Button>
                    <Button onClick={goToLogin} type="submit">Sign up for Google</Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    By clicking "Sign up for GitHub", you agree to our Terms of
                    Service and Privacy Statement.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[450px] rounded-lg  p-4">
                  <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">bash</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-green-400">$ npm install meow-cli</p>
                      <p className="text-white">+ meow-cli@10.2.3</p>
                      <p className="text-white">
                        added 1 package, and audited 2 packages in 3s
                      </p>
                      <p className="text-green-400">$</p>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="container flex gap-5 justify-center px-4 md:px-6">
            <div className="bg-white w-[300px] rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[280px] dark:bg-gray-800 dark:text-white items-start relative group">
              <div className="m-5">
                <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                  <svg
                    width="97"
                    height="100"
                    viewBox="0 0 97 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.4938 22.4855C96.5296 22.618 96.5479 22.7546 96.5482 22.8919V44.226C96.5482 44.4998 96.4759 44.7688 96.3387 45.0057C96.2014 45.2427 96.0041 45.4392 95.7665 45.5754L77.8604 55.8847V76.3186C77.8604 76.8747 77.5649 77.388 77.0827 77.668L39.7052 99.1849C39.6196 99.2335 39.5263 99.2646 39.433 99.2977C39.398 99.3094 39.3649 99.3308 39.328 99.3405C39.0667 99.4093 38.792 99.4093 38.5308 99.3405C38.488 99.3288 38.4491 99.3055 38.4083 99.2899C38.3227 99.2588 38.2333 99.2316 38.1516 99.1849L0.781899 77.668C0.5445 77.5316 0.347246 77.3351 0.210016 77.0982C0.0727871 76.8613 0.000432242 76.5924 0.000244141 76.3186L0.000244141 12.3162C0.000244141 12.1762 0.0196883 12.0401 0.0546877 11.9078C0.0663542 11.8631 0.093576 11.8223 0.109131 11.7776C0.138298 11.6959 0.165519 11.6123 0.208296 11.5365C0.237463 11.4859 0.28024 11.4451 0.315239 11.3984C0.359961 11.3362 0.400794 11.272 0.453293 11.2176C0.498014 11.1729 0.556347 11.1398 0.606901 11.1009C0.663289 11.0542 0.713844 11.0037 0.77801 10.9667H0.779954L19.4658 0.20829C19.7024 0.0721435 19.9706 0.000488281 20.2435 0.000488281C20.5165 0.000488281 20.7847 0.0721435 21.0213 0.20829L39.7071 10.9667H39.711C39.7732 11.0056 39.8257 11.0542 39.8821 11.099C39.9327 11.1379 39.9891 11.1729 40.0338 11.2156C40.0882 11.272 40.1271 11.3362 40.1738 11.3984C40.2068 11.4451 40.2516 11.4859 40.2788 11.5365C40.3235 11.6142 40.3488 11.6959 40.3799 11.7776C40.3955 11.8223 40.4227 11.8631 40.4343 11.9098C40.4701 12.0423 40.4884 12.1789 40.4888 12.3162V52.2914L56.0597 43.3257V22.8899C56.0597 22.7538 56.0791 22.6157 56.1141 22.4855C56.1277 22.4388 56.153 22.398 56.1685 22.3533C56.1997 22.2716 56.2269 22.188 56.2697 22.1121C56.2988 22.0616 56.3416 22.0208 56.3747 21.9741C56.4213 21.9119 56.4602 21.8477 56.5147 21.7933C56.5594 21.7485 56.6158 21.7155 56.6663 21.6766C56.7246 21.6299 56.7752 21.5794 56.8374 21.5424H56.8394L75.5271 10.784C75.7637 10.6476 76.0319 10.5759 76.3049 10.5759C76.5779 10.5759 76.8461 10.6476 77.0827 10.784L95.7685 21.5424C95.8346 21.5813 95.8852 21.6299 95.9435 21.6747C95.9921 21.7135 96.0485 21.7485 96.0932 21.7913C96.1477 21.8477 96.1865 21.9119 96.2332 21.9741C96.2682 22.0208 96.311 22.0616 96.3382 22.1121C96.3829 22.188 96.4082 22.2716 96.4393 22.3533C96.4568 22.398 96.4821 22.4388 96.4938 22.4855ZM93.4332 43.3257V25.5849L86.8942 29.3493L77.8604 34.5506V52.2914L93.4352 43.3257H93.4332ZM74.7474 75.4183V57.6658L65.8615 62.7407L40.4868 77.2227V95.1425L74.7474 75.4183ZM3.1152 15.0092V75.4183L37.3719 95.1405V77.2247L19.4755 67.0962L19.4697 67.0923L19.4619 67.0884C19.4016 67.0534 19.3511 67.0029 19.2947 66.9601C19.2461 66.9212 19.1897 66.8901 19.1469 66.8473L19.143 66.8415C19.0925 66.7929 19.0575 66.7326 19.0147 66.6782C18.9758 66.6257 18.9291 66.581 18.898 66.5265L18.8961 66.5207C18.8611 66.4623 18.8397 66.3923 18.8144 66.3262C18.7891 66.2679 18.7561 66.2135 18.7405 66.1512V66.1493C18.7211 66.0754 18.7172 65.9976 18.7094 65.9218C18.7016 65.8635 18.6861 65.8051 18.6861 65.7468V23.9749L9.65426 18.7716L3.1152 15.0111V15.0092ZM20.2455 3.35436L4.67656 12.3162L20.2416 21.278L35.8086 12.3142L20.2416 3.35436H20.2455ZM28.342 59.2836L37.3738 54.0842V15.0092L30.8348 18.7736L21.801 23.9749V63.0499L28.342 59.2836ZM76.3049 13.93L60.7379 22.8919L76.3049 31.8537L91.8699 22.8899L76.3049 13.93ZM74.7474 34.5506L65.7137 29.3493L59.1746 25.5849V43.3257L68.2064 48.5251L74.7474 52.2914V34.5506ZM38.9274 74.5297L61.7607 61.4944L73.1744 54.9806L57.6191 46.0246L39.7091 56.3358L23.3857 65.7332L38.9274 74.5297Z"
                      fill="#FF2D20"
                    ></path>
                  </svg>
                </div>

                <div className="mt-4 text-left w-full mb-3">
                  <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white font-bold">
                    Meow Cli
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Push your projects in single command
                  </p>
                </div>
                <a href="#">
                  <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
                    <svg
                      id="Arrow.7"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 18.256 18.256"
                    >
                      <g
                        id="Group_7"
                        data-name="Group 7"
                        transform="translate(5.363 5.325)"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M14.581,7.05,7.05,14.581"
                          transform="translate(-7.05 -7.012)"
                          fill="none"
                          stroke="#0D1117"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M10,7l5.287.037.038,5.287"
                          transform="translate(-7.756 -7)"
                          fill="none"
                          stroke="#0D1117"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </g>
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        d="M0,0H18.256V18.256H0Z"
                        fill="none"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white w-[300px] rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[280px] dark:bg-gray-800 dark:text-white items-start relative group">
              <div className="m-5">
                <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                  <svg
                    width="97"
                    height="100"
                    viewBox="0 0 97 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.4938 22.4855C96.5296 22.618 96.5479 22.7546 96.5482 22.8919V44.226C96.5482 44.4998 96.4759 44.7688 96.3387 45.0057C96.2014 45.2427 96.0041 45.4392 95.7665 45.5754L77.8604 55.8847V76.3186C77.8604 76.8747 77.5649 77.388 77.0827 77.668L39.7052 99.1849C39.6196 99.2335 39.5263 99.2646 39.433 99.2977C39.398 99.3094 39.3649 99.3308 39.328 99.3405C39.0667 99.4093 38.792 99.4093 38.5308 99.3405C38.488 99.3288 38.4491 99.3055 38.4083 99.2899C38.3227 99.2588 38.2333 99.2316 38.1516 99.1849L0.781899 77.668C0.5445 77.5316 0.347246 77.3351 0.210016 77.0982C0.0727871 76.8613 0.000432242 76.5924 0.000244141 76.3186L0.000244141 12.3162C0.000244141 12.1762 0.0196883 12.0401 0.0546877 11.9078C0.0663542 11.8631 0.093576 11.8223 0.109131 11.7776C0.138298 11.6959 0.165519 11.6123 0.208296 11.5365C0.237463 11.4859 0.28024 11.4451 0.315239 11.3984C0.359961 11.3362 0.400794 11.272 0.453293 11.2176C0.498014 11.1729 0.556347 11.1398 0.606901 11.1009C0.663289 11.0542 0.713844 11.0037 0.77801 10.9667H0.779954L19.4658 0.20829C19.7024 0.0721435 19.9706 0.000488281 20.2435 0.000488281C20.5165 0.000488281 20.7847 0.0721435 21.0213 0.20829L39.7071 10.9667H39.711C39.7732 11.0056 39.8257 11.0542 39.8821 11.099C39.9327 11.1379 39.9891 11.1729 40.0338 11.2156C40.0882 11.272 40.1271 11.3362 40.1738 11.3984C40.2068 11.4451 40.2516 11.4859 40.2788 11.5365C40.3235 11.6142 40.3488 11.6959 40.3799 11.7776C40.3955 11.8223 40.4227 11.8631 40.4343 11.9098C40.4701 12.0423 40.4884 12.1789 40.4888 12.3162V52.2914L56.0597 43.3257V22.8899C56.0597 22.7538 56.0791 22.6157 56.1141 22.4855C56.1277 22.4388 56.153 22.398 56.1685 22.3533C56.1997 22.2716 56.2269 22.188 56.2697 22.1121C56.2988 22.0616 56.3416 22.0208 56.3747 21.9741C56.4213 21.9119 56.4602 21.8477 56.5147 21.7933C56.5594 21.7485 56.6158 21.7155 56.6663 21.6766C56.7246 21.6299 56.7752 21.5794 56.8374 21.5424H56.8394L75.5271 10.784C75.7637 10.6476 76.0319 10.5759 76.3049 10.5759C76.5779 10.5759 76.8461 10.6476 77.0827 10.784L95.7685 21.5424C95.8346 21.5813 95.8852 21.6299 95.9435 21.6747C95.9921 21.7135 96.0485 21.7485 96.0932 21.7913C96.1477 21.8477 96.1865 21.9119 96.2332 21.9741C96.2682 22.0208 96.311 22.0616 96.3382 22.1121C96.3829 22.188 96.4082 22.2716 96.4393 22.3533C96.4568 22.398 96.4821 22.4388 96.4938 22.4855ZM93.4332 43.3257V25.5849L86.8942 29.3493L77.8604 34.5506V52.2914L93.4352 43.3257H93.4332ZM74.7474 75.4183V57.6658L65.8615 62.7407L40.4868 77.2227V95.1425L74.7474 75.4183ZM3.1152 15.0092V75.4183L37.3719 95.1405V77.2247L19.4755 67.0962L19.4697 67.0923L19.4619 67.0884C19.4016 67.0534 19.3511 67.0029 19.2947 66.9601C19.2461 66.9212 19.1897 66.8901 19.1469 66.8473L19.143 66.8415C19.0925 66.7929 19.0575 66.7326 19.0147 66.6782C18.9758 66.6257 18.9291 66.581 18.898 66.5265L18.8961 66.5207C18.8611 66.4623 18.8397 66.3923 18.8144 66.3262C18.7891 66.2679 18.7561 66.2135 18.7405 66.1512V66.1493C18.7211 66.0754 18.7172 65.9976 18.7094 65.9218C18.7016 65.8635 18.6861 65.8051 18.6861 65.7468V23.9749L9.65426 18.7716L3.1152 15.0111V15.0092ZM20.2455 3.35436L4.67656 12.3162L20.2416 21.278L35.8086 12.3142L20.2416 3.35436H20.2455ZM28.342 59.2836L37.3738 54.0842V15.0092L30.8348 18.7736L21.801 23.9749V63.0499L28.342 59.2836ZM76.3049 13.93L60.7379 22.8919L76.3049 31.8537L91.8699 22.8899L76.3049 13.93ZM74.7474 34.5506L65.7137 29.3493L59.1746 25.5849V43.3257L68.2064 48.5251L74.7474 52.2914V34.5506ZM38.9274 74.5297L61.7607 61.4944L73.1744 54.9806L57.6191 46.0246L39.7091 56.3358L23.3857 65.7332L38.9274 74.5297Z"
                      fill="#FF2D20"
                    ></path>
                  </svg>
                </div>

                <div className="mt-4 text-left w-full mb-3">
                  <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white font-bold">
                    Meow-hub
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    View you packages on platform
                  </p>
                </div>
                <a href="#">
                  <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
                    <svg
                      id="Arrow.7"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 18.256 18.256"
                    >
                      <g
                        id="Group_7"
                        data-name="Group 7"
                        transform="translate(5.363 5.325)"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M14.581,7.05,7.05,14.581"
                          transform="translate(-7.05 -7.012)"
                          fill="none"
                          stroke="#0D1117"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M10,7l5.287.037.038,5.287"
                          transform="translate(-7.756 -7)"
                          fill="none"
                          stroke="#0D1117"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </g>
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        d="M0,0H18.256V18.256H0Z"
                        fill="none"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Features that help you work smarter
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
              <div className="space-y-2">
                <Code className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Collaborative Coding</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Work together on code, manage projects, and build software
                  alongside millions of developers.
                </p>
              </div>
              <div className="space-y-2">
                <GitBranch className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Version Control</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Host and manage your code with advanced version control tools
                  for seamless collaboration.
                </p>
              </div>
              <div className="space-y-2">
                <Globe className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Open Source</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Contribute to open source projects and be part of a global
                  community of developers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start your free trial today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join millions of developers and organizations building amazing
                  things with GitHub.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 GitHub, Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Docs
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            API
          </Link>
        </nav>
      </footer>
    </div>
  );
}
