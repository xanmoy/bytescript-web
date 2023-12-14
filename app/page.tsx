import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import "./main.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";
import { Textarea } from "@nextui-org/react";

export default function Home() {
	const defaultContent = "$";
	return (
		<>
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				
				<h1 className="bytescript text-transparent sm:text-8xl lg:text-8xl text-7xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">ByteScript</h1>
				{/* <h1 className={title()}>Make&nbsp;</h1> */}
				
				{/* <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1> */}
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					A programming language for fun
				</h2>
			</div>

				<div className="flex flex-col md:flex-row items-center gap-4">
					{/* <div className="flex gap-3"> */}
					{/* <Link
						isExternal
						href={siteConfig.links.docs}
						
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", fullWidth: true } )}
					>
						Get Started
					</Link> */}
					<a href="https://www.google.com" className="bg-blue-500 rounded-full hover:bg-blue-700 w-60 text-white font-bold py-2 px-4 border border-blue-700">
						
							Get Started
						
					</a>
				
				{/* <Link
					isExternal
					className={buttonStyles({ color: "primary", variant: "ghost", radius: "full" })}
					href={siteConfig.links.github}
				>
					{/* <GithubIcon size={20} /> 
					Get Source
				</Link> */}
					<a href="https://www.github.com/xanmoy" className="bg-transparent hover:bg-white w-60 text-black dark:text-white font-semibold hover:text-black py-2 px-4 border border-black dark:border-white  hover:border-black rounded-full">
						
							Get Source
						
					</a>

			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
					{/* <Code color="">npm i -g bytescript</Code> */}
					npm i -g bytescript
					</span>
					
				</Snippet>
			</div>
			<div className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://x.com/xanmoy"
					title="Twitter Account"
				>
					<span className="text-default-600">Designed by</span>
					<p className="text-primary">@Xanmoy</p>
				</Link>
			</div>
			
		</section>
			
			
			
		 </>
		
	);
}
