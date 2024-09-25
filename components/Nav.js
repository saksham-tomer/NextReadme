import useDeviceDetect from "@/hooks/useDeviceDetect";
import Link from "next/link";
import Close from "./icons/Close";
import Menu from "./icons/Menu";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const Nav = ({
  selectedSectionSlugs,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { isMobile } = useDeviceDetect();

  const markdown = selectedSectionSlugs?.reduce((acc, section) => {
    const template = getTemplate(section);
    if (template) {
      return `${acc}${template?.markdown}`;
    } else {
      return acc;
    }
  }, ``);

  const downloadMarkdownfile = () => {
    const a = document.createElement("a");
    const blob = new Blob([markdown]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
    if (isMobile && isDrawerOpen) {
      onMenuClick();
    }
    setShowModal(true);
  };
  const NavItems = () => (
    <>
      <a
        href="https://github.com/saksham-tomer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="flex flex-row gap-1 items-center">
          Resources <ChevronDown width={20} />
        </li>
      </a>
      <a
        href="https://github.com/saksham-tomer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="flex flex-row gap-1 items-center">
          Community <ChevronDown width={20} />
        </li>
      </a>
      <li>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-gray-500 rounded-3xl bg-gray-800 cursor-pointer hover:bg-gray-900 text-gray-400 px-4 text-center py-1">
            Home
          </button>
        </a>
      </li>
    </>
  );

  return (
    <header className="p-4 flex justify-between items-center bg-gray-900">
      <div className="logo bg-clip-text flex flex-row justify-center items-center gap-4 text-transparent bg-gradient-to-tr from-blue-500 to-teal-400 font-semibold text-3xl">
        <Image src="/go.png" alt="Readme Wizard" width={40} height={40} />
        <Link href="/">Readme Wizard</Link>
      </div>
      <nav className="font-normal text-base text-gray-500 hidden md:block">
        <ul className="flex space-x-4 items-center justify-center">
          <NavItems />
        </ul>
      </nav>
      <button onClick={toggleSidebar} className="md:hidden text-white">
        <Menu size={24} />
      </button>
      <button
        className="focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={onMenuClick}
      >
        {isDrawerOpen ? (
          <Close className="w-10 h-10 md:hidden fill-current text-green-500" />
        ) : (
          <Menu className="w-10 h-10 md:hidden fill-current text-green-500" />
        )}
      </button>
      <button
        type="button"
        className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm  bg-gradient-to-tr from-blue-200 to-teal-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
        onClick={downloadMarkdownfile}
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500">
          Download
        </p>
      </button>
    </header>
  );
};
