
import AccountNameBox from "./AccountNameBox";
import BalanceBox from "./BalanceBox";
import NameBox from "./NameBox";

const InfoBoxes = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 p-4">
      <NameBox />
      <AccountNameBox />
      <BalanceBox/>
    </div>
  );
};

export default InfoBoxes;
