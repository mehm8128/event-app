import { useState, createContext } from "react"
import styles from "./Top.module.css"
import Tree from "../components/Tree"
import SideBar from "../components/SideBar"

interface SelectedContextInterface {
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
}
export const SelectedContext = createContext<SelectedContextInterface>(
	{} as SelectedContextInterface
)

const Top: React.VFC = () => {
	const [selected, setSelected] = useState("")
	return (
		<div className={styles.top}>
			<div className={styles.flex}>
				<SelectedContext.Provider
					value={{ selected: selected, setSelected: setSelected }}
				>
					<Tree selected={selected} setSelected={setSelected} />
					<SideBar />
				</SelectedContext.Provider>
			</div>
		</div>
	)
}

export default Top
