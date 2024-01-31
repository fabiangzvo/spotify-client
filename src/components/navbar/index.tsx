import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";

import UserOptions from "../userOptions";

function Navbar() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className="w-full flex justify-between items-center mt-10 px-5">
      <form
        className="relative w-[80%] border-2 border-card-border rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-paragraph bg-background rounded-xl text-xl"
          placeholder="Search"
          required
          {...register("search")}
        />
        <button className="absolute top-0 end-0 p-2.5 h-[90%] text-sm font-medium text-title bg-transparent rounded-xl mr-1.5">
          <IoMdSearch size="2em" />
        </button>
      </form>
      <UserOptions />
    </div>
  );
}

export default Navbar;
