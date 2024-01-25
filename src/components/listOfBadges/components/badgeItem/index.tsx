import { MouseEventHandler } from "react";
import cs from "classnames";

interface BadgeItemProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
  isSelected?: boolean;
  label: string;
}

function BadgeItem(props: BadgeItemProps) {
  const { value, handleClick, isSelected = false, label } = props;
  return (
    <button
      type="button"
      value={value}
      onClick={handleClick}
      className={cs({
        "text-title hover:bg-secondary bg-primary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3":
          true,
        "bg-selected pointer-events-none": isSelected,
      })}
    >
      {label}
    </button>
  );
}

export default BadgeItem;
