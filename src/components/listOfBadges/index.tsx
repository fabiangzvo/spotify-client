import { useMemo, MouseEventHandler } from "react";

import BadgeItem from "./components/badgeItem";

interface ListOfBadgesProps {
  list: Array<{ label: string; value: string }>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  selectedBadge: string;
}

function ListOfBadges(props: ListOfBadgesProps) {
  const { handleClick, list, selectedBadge } = props;

  const badges = useMemo(
    () =>
      list.map((range) => (
        <BadgeItem
          key={range.value}
          value={range.value}
          isSelected={selectedBadge === range.value}
          label={range.label}
          handleClick={handleClick}
        />
      )),
    [list, handleClick, selectedBadge]
  );

  return (
    <div className="flex items-center justify-center mt-7 flex-wrap">
      {badges}
    </div>
  );
}

export default ListOfBadges;
