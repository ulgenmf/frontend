import React from "react";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
function Header() {
	const myArray = [
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
	];

	const scaleVariants = {
		whileInView: {
			scale: [0.1, 0.7],
			opacity: [0.5, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<div className="app__header  rounded-md shadow-sm flex-col h-full w-full flex-1 md:flex-row mobile:flex-col  mobile:pt-24 mobile:pr-4 mobile:pb-8 pc:pt-32 app__flex">
			<motion.div
				className="app__header-info   flex flex-col justify-start items-center h-full tablet:w-full tablet:mr-0 "
				transition={{ duration: 1.2 }}
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			>
				<div className="app__header-badge  w-full flex justify-center items-center flex-col ">
					<div className="badge-cmp app__flex">
						<span className="text-4xl pc:text-8xl"> 👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hey, I am</p>
							<h1 className="head-text">Furkan</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text uppercase">FullStack Developer</p>

						<p className="p-text uppercase">xxxxx</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				className="app__hader-img  "
				transition={{ duration: 1.2, delayChildren: 0.5 }}
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			>
				{" "}
				<div>
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, delayChildren: 0.5 }}
						className="app__header-img"
					>
						<img
							src={images.profile}
							alt="profile_bg"
							className="rounded-full rounded-tr-none "
						/>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src={images.circle}
							alt="profile_circle"
							className="overlay_circle"
						/>
					</motion.div>
				</div>
			</motion.div>
			<div className="app__header-circles  flex-grow-0 flex-wrap flex-row h-full items-start  flex  justify- ml-4 backdrop-blur-sm">
				{myArray.map((circle, index) => (
					<motion.div
						variant={scaleVariants}
						whileInView={scaleVariants.whileInView}
					>
						<div
							key={`circle-${index}`}
							className="circle-cmp app__flex hover:scale-105 duration-200 shadow-md  shadow-slate-400  w-24 h-24 rounded-[50%] bg-white"
						>
							<img src={circle} alt="circle" />
						</div>{" "}
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default AppWrap(Header, "home");
