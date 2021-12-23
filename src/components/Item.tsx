import { useContext } from "react"
import { SelectedContext } from "../pages/Top"
import styles from "./Item.module.css"

interface ItemProps {
	src: string
	name: string
	index: number
}

const Item: React.VFC<ItemProps> = ({ src, name, index }) => {
	const selectedContext = useContext(SelectedContext)
	function handleClick(e: any) {
		e.preventDefault()
		selectedContext.setSelected(src)
	}
	return (
		<div>
			<button
				onClick={handleClick}
				className={styles.item}
				style={
					selectedContext.selected === src
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
