import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				
				<h1 className={title({ class: "text-transparent text-9xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500", color:"from-purple-500 to-cyan-500"})}><span>ByteScript</span></h1>
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

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Get Started
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					{/* <GithubIcon size={20} /> */}
					Get Source
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
					{/* <Code color="">npm i -g bytescript</Code> */}
					npm i -g bytescript
					</span>
					
				</Snippet>
			</div>
		</section>
	);
}
