import styles from "./Tree.module.css"
import tree from "../assets/christmastree_nude.png"
import DecoratedItem from "./DecoratedItem"
import { useState } from "react"
import { TwitterShareButton, TwitterIcon } from "react-share"
import html2canvas from "html2canvas"

interface TreeProps {
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
}
interface ItemList {
	src: string
	x: number
	y: number
}
const Tree: React.VFC<TreeProps> = ({ selected, setSelected }) => {
	const [itemList, setItemList] = useState<ItemList[]>(new Array<ItemList>())
	function handleClick(e: any) {
		e.preventDefault()
		if (selected !== "") {
			setItemList(
				itemList.concat([{ src: selected, x: e.clientX, y: e.clientY }])
			)
			setSelected("")
		}
	}
	const listItems = itemList.map((item, index) => (
		<span
			className={styles.decoratedItem}
			key={index}
			style={{
				top: itemList[index].y - 69 + "px",
				left: itemList[index].x - 40 + "px",
			}}
		>
			<DecoratedItem
				index={index}
				itemList={itemList}
				setItemList={setItemList}
			/>
		</span>
	))
	function saveAsImage(uri: any) {
		const downloadLink = document.createElement("a")

		if (typeof downloadLink.download === "string") {
			downloadLink.href = uri

			// ファイル名
			downloadLink.download = "christmasTree.png"

			// Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
			document.body.appendChild(downloadLink)

			// ダウンロードリンクが設定された a タグをクリック
			downloadLink.click()

			// Firefox 対策で追加したリンクを削除しておく
			document.body.removeChild(downloadLink)
		} else {
			window.open(uri)
		}
	}
	function captureImage() {
		// 画像に変換する component の id を指定
		const target = document.getElementById("capture")
		html2canvas(target as HTMLCanvasElement, {
			width: 1000,
			height: 600,
		}).then((canvas) => {
			const targetImgUri = canvas.toDataURL("img/png")
			saveAsImage(targetImgUri)
		})
	}
	return (
		<div className={styles.treeTop}>
			<TwitterShareButton
				title="クリスマスツリーを飾りつけしました"
				url="https://event-app-ecru.vercel.app/"
			>
				ツイートする
				<TwitterIcon size={32} round />
			</TwitterShareButton>
			<button onClick={captureImage}>画像で保存</button>
			<div className={styles.tree} id="capture">
				<img
					src={tree}
					alt="tree"
					onClick={handleClick}
					className={styles.christmasTree}
				/>
				{listItems}
			</div>
		</div>
	)
}

export default Tree
