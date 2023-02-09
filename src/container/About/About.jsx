import React, { useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { useState } from "react";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
	const [abouts, setAbouts] = useState([]);
	console.log(abouts);
	useEffect(() => {
		const query = '*[_type=="abouts"]';
		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<div className="head-text ">
				I Know That
				<span className="ml-2">Good Design</span>
				<br />
				means
				<span className="ml-2">Good Business</span>
			</div>
			<div className="app__profiles flex  justify-center flex-row-reverse items-start flex-wrap mt-8">
				{abouts.map((abouts, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.09 }}
						transition={{ duration: 0.3, type: "tween" }}
						className="app__profile-item  w-48 flex pc:mt-4 pc:mr-8  pc:w-[320px]  items-center flex-col m-8 "
						key={abouts.title + index}
					>
						<img
							className="w-full h-44 rounded-3xl pc:mt-4 pc:mr-8 pc:w-[300px] object-center  "
							src={urlFor(abouts.imgUrl)}
							alt="about"
						/>
						<p className="bold-text  mt-5">{abouts.title}</p>
						<p className="p-text  mt-2" style={{ textAlign: "center" }}>
							{abouts.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
