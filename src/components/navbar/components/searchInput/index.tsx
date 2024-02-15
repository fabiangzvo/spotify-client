import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";

function SearchInput() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault();

    const { search } = data;

    navigate(`/browse?search=${search}`);
  };
  return (
    <form
      className="relative w-full border-2 border-card-border rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        id="search-dropdown"
        className="block p-2.5 w-full z-20 text-paragraph bg-background rounded-xl text-xl"
        placeholder="Search"
        required
        {...register("search")}
      />
      <button
        type="submit"
        className="absolute top-0 end-0 p-2.5 h-full text-title bg-transparent border-l-2 border-card-border"
      >
        <IoMdSearch size="2em" />
      </button>
    </form>
  );
}

export default SearchInput;
