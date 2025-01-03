import React from "react";
import { ImImages } from "react-icons/im";

/**
 *
 * @param {{images:Map,setImages(file:Map|(prev:Map)=>void):void}}} param0
 * @returns
 */
export default function MultipleUpload({ images, setImages }) {
	function addItem(item) {
		if (images.size >= 10) return;
		setImages((prev) => {
			const newMap = new Map(prev);
			newMap.set("image" + images.size + Math.round(Math.random() * 10), item);
			console.log("setted");
			return newMap;
		});
	}
	function removeItem(index) {
		setImages((prev) => {
			const newMap = new Map(prev);
			newMap.delete(index);
			console.log("deleted");
			return newMap;
		});
	}

	// console.log(images);

	function handleFileRead(ev) {
		const file = ev.currentTarget.files?.[0];
	}

	return (
		<>
			<div className="p-3 mb-4 bg-neutral-100 flex flex-wrap rounded-lg gap-3 border border-neutral-500">
				<label
					// onClick={() => addItem("ima")}
					htmlFor="files"
					className="size-28 bg-neutral-300 text-4xl grid place-items-center rounded-lg cursor-pointer gap-0"
				>
					+{" "}
					{/* <span className="text-xs text-center">
					click to add multiple images
				</span> */}
				</label>
				<input
					type="file"
					id="files"
					className="hidden"
					onChange={(ev) => addItem(ev.currentTarget.files?.[0])}
				/>
				{[...images.entries()].map(([key, img], i) => (
					<div className="relative rounded-lg bg-white p-3">
						<span
							onClick={() => removeItem(key)}
							className="rotate-45 text-xl absolute font-bold -top-1 right-1 cursor-pointer rounded-full grid place-items-center p-0"
						>
							+
						</span>
						<img
							src={URL.createObjectURL(img)}
							className="size-20 object-contain "
						/>
					</div>
				))}
			</div>
			<p className="text-xs bottom-0 mb-10">
				Please include pictures of the item in multiple angles eg (top, left,
				right & bottom)
			</p>
		</>
	);
}
