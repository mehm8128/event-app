import styles from "./SideBar.module.css"
import { imageList } from "../utils/images"
import Item from "./Item"

const SideBar: React.VFC = () => {
	const listItems = imageList.map((item, index) => (
		<li key={index}>
			<Item src={item.image} name={item.name} index={index} />
		</li>
	))
	return (
		<div className={styles.sideBar}>
			<ul className={styles.ul}>{listItems}</ul>
		</div>
	)
}

export default SideBar
