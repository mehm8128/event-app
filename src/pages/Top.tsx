import { useState } from "react"
import styles from "./Top.module.css"
import Tree from "../components/Tree"
import SideBar from "../components/SideBar"

function Top() {
	const [selected, setSelected] = useState("")
	return (
		<div className={styles.top}>
			<div className={styles.flex}>
				<Tree selected={selected} setSelected={setSelected} />
				<SideBar selected={selected} setSelected={setSelected} />
			</div>
		</div>
	)
}

export default Top
