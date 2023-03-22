import { SIDEBAR_ITEM_SIZE } from "./constants";
import { IoBookOutline } from "react-icons/io5";
import SelectableSidebarItem from "./SelectableSidebarItem";
import { useNavigate } from "react-router-dom";

const MainArticleTab = ({ itemId }) => {
  const navigate = useNavigate();

  const handleMainArticleTabClicked = () => {
    console.log("main article tab clicked");
    navigate("feed");
  };

  return (
    <SelectableSidebarItem
      itemId={itemId}
      className={`${SIDEBAR_ITEM_SIZE.sm} hover:bg-stone-300`}
      onClick={handleMainArticleTabClicked}
    >
      <div className="block w-7" />
      <IoBookOutline className="p-2" size={35} style={{ color: "837F79" }} />
      <p className="text-sm text-center">추천 기사</p>
    </SelectableSidebarItem>
  );
};

export default MainArticleTab;