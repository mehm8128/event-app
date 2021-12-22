import styles from "./SideBar.module.css"
import { imageList } from "../utils/images"
import Item from "./Item"

interface SideBarProps {
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
}
const SideBar: React.VFC<SideBarProps> = ({ selected, setSelected }) => {
	const listItems = imageList.map((item, index) => (
		<li key={index}>
			<Item
				src={item.image}
				name={item.name}
				index={index}
				selected={selected}
				setSelected={setSelected}
			/>
		</li>
	))
	return (
		<div className={styles.sideBar}>
			<ul className={styles.ul}>{listItems}</ul>
		</div>
	)
}

export default SideBar
