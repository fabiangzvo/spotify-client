import { useMemo } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import SearchInput from "./components/searchInput";
import UserOptions from "../userOptions";

function Navbar() {
  const isLg = useMediaQuery("(max-width: 1024px)");

  const { dropdown, navbar } = useMemo(() => {
    const input = <SearchInput />;

    const navbar = !isLg ? <div className="w-[80%]">{input}</div> : null;
    const dropdown = isLg ? <div className="mt-5 px-2">{input}</div> : null;

    return { navbar, dropdown };
  }, [isLg]);

  return (
    <div className="w-full flex justify-between items-center mt-5 px-5 max-lg:mt-5">
      <img src="/spotify.svg" className="hidden h-8 w-8 max-lg:block" />
      {navbar}
      <UserOptions children={dropdown} />
    </div>
  );
}

export default Navbar;
