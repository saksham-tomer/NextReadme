import React from "react";
import { VerifiedIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

const tweetsData = [
  {
    name: "Sarah Developer",
    handle: "@sarah_dev",
    isVerified: true,
    twt: "/1.jpeg",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Just tried the new ReadmeWizard site - it's a game-changer! Created a professional README for my project in minutes. Loving the templates and customization options. #ReadmeWizard #DevProductivity",
  },
  {
    name: "Mike Coder",
    handle: "@mike_codes",
    isVerified: false,
    twt: "/2.jpeg",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "ReadmeWizard is a lifesaver for open source projects. Generated a comprehensive README with all the essential sections. The markdown preview feature is super helpful! #OpenSource #GitHubReadme",
  },
  {
    name: "Emma TechGuru",
    handle: "@emma_tech",
    twt: "/3.jpeg",
    isVerified: true,
    avatar:
      "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Impressed with ReadmeWizard's AI suggestions for my project description. It helped me articulate my project's value proposition clearly. Great for non-native English speakers too! #AIWriting #DeveloperTools",
  },
  {
    name: "Alex GitMaster",
    handle: "@alex_git",
    twt: "/4.jpeg",
    isVerified: false,
    avatar:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "ReadmeWizard's integration with GitHub is seamless. One-click update of my repo's README, and it even suggests badges based on my project structure. Huge time-saver! #GitHubIntegration #ProductivityHack",
  },
];

const TwitterCard = ({ tweet }) => (
  <div className="max-w-xl mx-auto grayscale hover:grayscale-0 transition-all animate-in duration-700 bg-white border border-gray-200 rounded-2xl overflow-hidden mb-4">
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Image
            src={tweet.avatar}
            height={1920}
            width={1080}
            alt={tweet.name}
            className="w-12 h-12 object-cover rounded-full mr-3"
          />
          <div>
            <div className="flex items-center">
              <span className="font-bold text-black mr-1">{tweet.name}</span>
              {tweet.isVerified && (
                <VerifiedIcon className="w-4 h-4 text-blue-400" />
              )}
            </div>
            <span className="text-gray-500">{tweet.handle}</span>
          </div>
        </div>
        <TwitterIcon className="w-6 h-6 text-blue-400" />
      </div>
      <p className="text-black mb-3 whitespace-pre-wrap">{tweet.content}</p>
      <Image
        src={tweet.twt}
        alt="Tweet image"
        width={1920}
        height={1080}
        className="rounded-2xl  w-full h-full object-cover"
      />
    </div>
  </div>
);

const App = () => (
  <div className="bg-gray-900  px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {tweetsData.map((tweet, index) => (
      <TwitterCard key={index} tweet={tweet} />
    ))}
  </div>
);

export default App;
