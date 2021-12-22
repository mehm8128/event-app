import React from "react"
import styles from "./Item.module.css"

interface ItemProps {
	src: string
	name: string
	index: number
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
}
const Item: React.VFC<ItemProps> = ({
	src,
	name,
	index,
	selected,
	setSelected,
}) => {
	function handleClick(e: any) {
		e.preventDefault()
		setSelected(src)
	}
	return (
		<div>
			<button
				onClick={handleClick}
				className={styles.item}
				style={
					selected === src
						? { border: "solid blue" }
						: { border: "solid black" }
				}
			>
				<img src={src} alt={index + "image"} />
			</button>
		</div>
	)
}

export default Item
