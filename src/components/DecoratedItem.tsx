import React from "react"
import styles from "./DecoratedItem.module.css"

interface Coodinate {
	x: number
	y: number
}
interface ItemProps {
	src: string
	index: number
	x: number
	y: number
	itemList: string[]
	setItemList: React.Dispatch<React.SetStateAction<string[]>>
	coodinate: Coodinate[]
	setCoodinate: React.Dispatch<React.SetStateAction<Coodinate[]>>
}
const DecoratedItem: React.VFC<ItemProps> = ({
	src,
	index,
	x,
	y,
	itemList,
	setItemList,
	coodinate,
	setCoodinate,
}) => {
	function handleClick(e: any) {
		e.preventDefault()
		console.log(x, y)
		if (itemList.length === 1) {
			setItemList([])
			setCoodinate([])
		} else {
			setItemList(itemList.splice(index))
			setCoodinate(coodinate.splice(index))
		}
	}
	return (
		<button onClick={handleClick} className={styles.decoratedItem}>
			<img
				src={src}
				alt={index + "image"}
				className={styles.itemImg}
				style={{ top: y - 69 + "px", left: x - 581 + "px" }}
			/>
		</button>
	)
}

export default DecoratedItem
