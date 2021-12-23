import React from "react"
import styles from "./DecoratedItem.module.css"

interface ItemList {
	src: string
	x: number
	y: number
}
interface ItemProps {
	index: number
	itemList: ItemList[]
	setItemList: React.Dispatch<React.SetStateAction<ItemList[]>>
}
const DecoratedItem: React.VFC<ItemProps> = ({
	index,
	itemList,
	setItemList,
}) => {
	function handleClick(e: any) {
		e.preventDefault()
		if (itemList.length === 1) {
			setItemList([])
		} else {
			setItemList(itemList.splice(index))
		}
	}
	return (
		<button onClick={handleClick} className={styles.decoratedItem}>
			<img
				src={itemList[index].src}
				alt={index + "image"}
				className={styles.itemImg}
				style={{
					top: itemList[index].y - 69 + "px",
					left: itemList[index].x - 581 + "px",
				}}
			/>
		</button>
	)
}

export default DecoratedItem
