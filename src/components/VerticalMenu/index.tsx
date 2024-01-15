import { ReactNode, useState, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BsCompassFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import cs from "classnames";

interface NavbarItem {
  icon: ReactNode;
  label: string;
  to: string;
}

const items: Array<NavbarItem> = [
  {
    icon: <GoHomeFill />,
    label: "Home",
    to: "/",
  },
  {
    icon: <BsCompassFill />,
    label: "Browse",
    to: "/browse",
  },
  {
    icon: <FaMicrophone />,
    label: "Podcasts",
    to: "/podcasts",
  },
  {
    icon: <HiCollection />,
    label: "Playlists",
    to: "/playlists",
  },
  {
    icon: <FaHeart />,
    label: "Likes",
    to: "/likes",
  },
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navbarItems = useMemo(() => {
    return items.map(({ icon, label, to }) => {
      const current = location.pathname === to ? "text-white" : "text-shadow";

      console.log({ to, path: location.pathname, current });
      return (
        <li key={label} className="w-full flex justify-center relative mt-6">
          <div className="group flex flex-wrap cursor-default">
            <Link
              to={to}
              data-tooltip-target="tooltip-right"
              data-tooltip-placement="right"
              className={cs({
                "mb-3 text-xl  active:text-paragraph focus:text-paragraph line-clamp-1 max-md:text-4xl cursor-pointer":
                  true,
                [current]: true,
              })}
            >
              {icon}
            </Link>
            <div
              id="tooltip-right"
              role="tooltip"
              className="left-20 -bottom-20 absolute z-20 invisible max-w-sm inline-block px-3 py-2 text-sm font-medium text-text transition-opacity duration-300 bg-background border border-stroke rounded-lg shadow-sm opacity-0 -translate-y-20 tooltip group-hover:opacity-100 group-hover:visible max-md:text-3xl max-md:max-w-lg"
            >
              {label}
            </div>
          </div>
        </li>
      );
    });
  }, [location.pathname]);

  return (
    <div className="bg-background w-[7vw]">
      <ul className="text-paragraph w-full flex flex-col items-center justify-around">
        <li className="mt-6">
          <img src="/spotify.svg" className="h-8 w-8" />
        </li>
        {navbarItems}
      </ul>
    </div>
  );
}

export default App;
