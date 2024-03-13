import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  // hum kuch ir parkar bhi foodItme ko props ki tarth middle barakcet argument deke pass kar sakte hai
  return (
    <li className={`${styles["kg-bg"]} text-3xl border-t-2 py-2 px-10 `}>
      <span className={`${styles["kg-item"]}`}>{foodItem}</span>
    </li>
  );
};
export default Item;
///  css ko as a variable use kar sakte hai
