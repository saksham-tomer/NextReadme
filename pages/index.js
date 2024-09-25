import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  List,
  Code,
  Globe,
  Users,
  Puzzle,
} from "lucide-react";
import Safari from "@/components/magicui/safari";
import { useState } from "react";
import { CustomMarquee } from "@/components/Marquee";
import { CustomGlobe } from "@/components/ui/cusotomGlobe";
import TweetCard from "@/components/TweetCard";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const GlowEffect = ({ children, color = "blue" }) => {
    return (
      <div className="relative">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${color}-500 opacity-50 blur-3xl`}
          style={{ filter: "blur(100px)" }} // Fallback for browsers that don't support the blur class
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  };
  const NavItems = () => (
    <>
      <Link href={"https://github.com/saksham-tomer"}>
        <li className="flex cursor-pointer flex-row gap-1 items-center">
          Features
        </li>
      </Link>
      <Link href={"https://nextjs.org/docs"}>
        <li className="flex flex-row gap-1 items-center">
          Resources <ChevronDown width={20} />
        </li>
      </Link>

      <Link href={"https://x.com/SakshamDevDose"}>
        <li className="flex flex-row gap-1 items-center">
          Community <ChevronDown width={20} />
        </li>
      </Link>

      <Link href={"https://www.linkedin.com/in/saksham-tomar-8090b22b7/"}>
        <li className="flex flex-row gap-1 items-center">
          Business <ChevronDown width={20} />
        </li>
      </Link>
      <li>
        <Link href={"/editor"}>
          <button className="border-2 border-gray-500 rounded-3xl bg-gray-800 cursor-pointer hover:bg-gray-900 text-gray-400 px-4 text-center py-1">
            Get Started
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="p-4 flex justify-between items-center">
          <div className="logo bg-clip-text flex flex-row justify-center items-center gap-4 text-transparent bg-gradient-to-tr from-blue-500 to-teal-400 font-semibold text-3xl">
            <Image src="/go.png" alt="Readme Wizard" width={40} height={40} />
            Readme Wizard
          </div>
          <nav className="font-normal text-base text-gray-500 hidden md:block">
            <ul className="flex space-x-4 items-center justify-center">
              <NavItems />
            </ul>
          </nav>
          <button onClick={toggleSidebar} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </header>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } w-64 bg-gray-800 p-6 transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          <ul className="mt-8 space-y-4">
            <NavItems />
          </ul>
        </div>

        <main>
          <div className="relative w-full overflow-hidden">
            {/* Background with grid, gradient overlay, and glow effect */}
            <div className="absolute inset-0 bg-gray-900">
              <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900" />

              {/* Glow effect */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>

            {/* Content container with blending effect */}
            <div className="relative min-h-[50rem] flex flex-col items-center justify-start pt-20 pb-32">
              {/* Radial gradient for subtle highlight */}
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 via-blue-500/5 to-transparent" />

              {/* Hero content */}
              <GlowEffect color="blue">
                <div className="text-center px-4 mb-16 z-10 relative">
                  <div className="backdrop-blur-sm bg-gradient-to-tr from-gray-900/50 to-transparent p-8 rounded-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                      Make Modern Readme In Seconds
                    </h1>
                    <p className="text-xl mb-8 font-normal bg-clip-text text-transparent bg-gradient-to-tr from-blue-100 to-blue-300">
                      Custom made modern and beautiful readme templates for your
                      projects.
                    </p>
                    <div className="space-x-4">
                      <Link href="/editor">
                        <button className="bg-gradient-to-tr from-gray-700 to-gray-900 hover:bg-gray-950 text-gray-300 px-6 py-2 border border-gray-600 rounded-3xl transition duration-300">
                          Try It for Free
                        </button>
                      </Link>
                      <Link href="https://port-one-brown.vercel.app">
                        <button className="border border-white/50 text-white/80 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-blue-950 px-6 py-2 rounded-3xl hover:bg-white/10 transition duration-300">
                          See Examples
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowEffect>

              {/* Safari component container with fade effect */}
              <div className="relative w-full max-w-6xl mx-auto px-4">
                <div className="relative">
                  <Safari
                    url="https://port-one-brown.vercel.app/"
                    className="w-full h-[30rem] md:h-[40rem]"
                    src="/RmApp.png"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Side fade effects */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent" />

            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          </div>
          <div className="flex items-center justify-center text-lg font-medium text-slate-600">
            Trusted by many community members
          </div>
          <CustomMarquee />
          <section className="trusted-by py-10 px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                {
                  name: "GitHub",
                  logo: "/github.png",
                },
                {
                  name: "npm",
                  logo: "/npm.png",
                },
                {
                  name: "Visual Studio Code",
                  logo: "/vs.png",
                },
                {
                  name: "React",
                  logo: "/react.png",
                },
                {
                  name: "Node.js",
                  logo: "/node.png",
                },
                {
                  name: "Docker",
                  logo: "/docker.png",
                },
                {
                  name: "Kubernetes",
                  logo: "/kubernetes.png",
                },
                {
                  name: "Flutter",
                  logo: "/flutter.png",
                },
                {
                  name: "Angular",
                  logo: "/angular.png",
                },
              ].map(({ name, logo }) => (
                <div
                  key={name}
                  className="text-slate-600 font-semibold items-center justify-center mt-8 flex flex-col"
                >
                  <Image
                    className="grayscale hover:grayscale-0"
                    src={logo}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="features py-20 px-4">
            <h2 className="md:text-5xl sm:text-4xl text-gray-400  font-bold text-center mb-16 flex-wrap">
              Everything You Need To Create Stunning Readmes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <FileText />,
                  title: "Project Overview",
                  description:
                    "Craft compelling project introductions and summaries",
                },
                {
                  icon: <List />,
                  title: "Installation Guide",
                  description:
                    "Generate clear, step-by-step installation instructions",
                },
                {
                  icon: <Code />,
                  title: "Usage Examples",
                  description:
                    "Showcase practical code snippets and usage scenarios",
                },
                {
                  icon: <Globe />,
                  title: "API Documentation",
                  description:
                    "Document your API endpoints and parameters effectively",
                },
                {
                  icon: <Users />,
                  title: "Contribution Guidelines",
                  description: "Encourage and guide community contributions",
                },
                {
                  icon: <Puzzle />,
                  title: "Dependency",
                  description: "List and explain project dependencies clearly",
                },
              ].map((feature, index) => (
                <GlowEffect color="blue">
                  <div
                    key={index}
                    className="bg-gray-800 hover:translate-y-1 transition-transform animate-in duration-75 hover:scale-105 p-6 rounded-lg"
                  >
                    {feature.icon}
                    <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                    <p className="mt-2 text-gray-400">{feature.description}</p>
                  </div>
                </GlowEffect>
              ))}
            </div>
          </section>
          <CustomGlobe />

          <section className="collaboration bg-gradient-to-tr from-blue-700 to-blue-950 transition-colors duration-75 py-20 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Unlimited Possibility
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {" "}
              Unlimited Collaboration
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <li className="flex items-center justify-center gap-2 w-full">
                <Image src={"/circle.png"} alt="" width={12} height={12} />
                Drag and drop components
              </li>
              <li className="flex items-center justify-center gap-2 w-full">
                <Image src={"/circle.png"} alt="" width={12} height={12} />
                Multi Language Support
              </li>
              <li className="flex items-center justify-center gap-2 w-full">
                <Image src={"/circle.png"} alt="" width={12} height={12} />
                Quick and Free Download
              </li>
              <li className="flex items-center justify-center gap-2 w-full">
                <Image src={"/circle.png"} alt="" width={12} height={12} />
                Ready-Made components
              </li>
            </ul>
          </section>

          <section className="integrations py-20 text-center px-4">
            <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-teal-300 md:text-6xl lg:text-7xl transition-colors duration-100 font-bold mb-6">
              One Stop Shop For ALL Your Readme
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Add integration logos here */}
            </div>
          </section>

          <section className="testimonials py-20 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-tr from-gray-300 to-gray-500">
              Make And Share Your Readmes With The Community
            </h2>
            <TweetCard
              profileImage="path/to/profile.jpg"
              username="John Doe"
              handle="johndoe"
              time="2h"
              content="This is a sample tweet content."
              image="path/to/tweet-image.jpg"
              likes={120}
              retweets={45}
              comments={30}
            />
          </section>
        </main>
        <footer className=" absolute top max-h-10 max-w-full min-w-full flex items-center justify-center bg-gray-800 py-10 text-center">
          <Link href={"https://x.com/SakshamDevDose"}>
            {" "}
            <p>&copy; 2024 Saksham Tomer. All rights reserved.</p>
          </Link>
        </footer>
      </div>
    </>
  );
}
