import {
  MouseEventHandler,
  useState,
  useContext,
  useCallback,
  PropsWithChildren,
  useMemo,
} from "react";
import cs from "classnames";
import Flag from "react-world-flags";

import { AuthContext } from "../../context/authContext";
import { UserContext } from "../../context/userInfoContext";

interface UserDropdown extends PropsWithChildren {}

function UserDropdown(props: UserDropdown) {
  const { children } = props;

  const [showOptions, setShowOptions] = useState(false);
  const { logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const handleClick = useCallback<MouseEventHandler<HTMLElement>>(
    () => setShowOptions(!showOptions),
    [showOptions]
  );

  const child = useMemo(
    () =>
      children ? <div className=" pb-3 text-center">{children}</div> : null,
    [children]
  );

  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative z-[2000]">
      <button
        type="button"
        className="flex items-center text-lg rounded-full text-title font-bold"
        onClick={handleClick}
      >
        {user?.display_name}&emsp;
        <img
          className="w-12 h-12 rounded-full"
          src={user?.images[0].url}
          alt="user photo"
        />
      </button>
      <div
        className={cs({
          "z-50 text-base list-none lg:border border-card-border bg-background divide-y divide-card-border rounded-lg shadow absolute top-10 right-0 max-lg:w-screen max-lg:top-14 max-lg:-right-5":
            true,
          hidden: !showOptions,
        })}
        id="user-dropdown"
      >
        {child}
        <div
          className={cs({ "px-4 pb-3 text-center": true, "pt-5": !!children })}
        >
          <span className="text-lg text-paragraph truncate my-4">
            {user?.email}
          </span>
          <div className="flex justify-around items-center text-lg text-title">
            <div className="flex flex-col items-center">
              <span className="font-bold">Country</span>
              <Flag
                code={user?.country}
                className="w-8 h-8 rounded-full"
                alt={user?.country}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">Followers</span>
              <span>{user?.followers.total}</span>
            </div>
          </div>
        </div>
        <ul aria-labelledby="user-menu-button">
          <li className="w-full text-center hover:bg-card-border py-2">
            <button className="text-paragraph w-full text-lg" onClick={logout}>
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
