import { useForm } from "react-hook-form";

function Navbar() {
  const { register: _ } = useForm();

  return (
    <form>
      <div className="relative w-[90%] mt-10 border-2 border-card-border rounded-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-paragraph bg-background rounded-full text-xl"
          placeholder="Search"
          required
        />
        <button className="absolute top-0 end-0 p-2.5 h-[90%] text-sm font-medium text-title bg-background rounded-full mr-1.5">
          <svg
            className="w-4 h-4 text-paragraph"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Navbar;
