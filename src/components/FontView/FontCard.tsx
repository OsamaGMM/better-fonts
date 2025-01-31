import { Plus } from "lucide-react";
import Link from "next/link";

// Reusable component for the font info section
function FontInfo({ font, showCategory = false }: { font: any; showCategory?: boolean }) {
	return (
		<div className="flex items-end font-geist-sans">
			<div className="flex flex-col" style={{ lineHeight: 1 }}>
				{/* Always show the font family */}
				<span>{font.family}</span>
				<span>
					{showCategory ? (
						// Hover state: Show category and Google Fonts link
						<>
							<Link
								target="_blank"
								href={`https://fonts.google.com/specimen/${font.family}`}
								className="underline underline-offset-4 hover:opacity-50"
							>
								google fonts
							</Link>
						</>
					) : (
						// Non-hover state: Show subsets, variants, and category
						`${font.subsets.length} subsets • ${font.variants.length} variants • ${font.category}`
					)}
				</span>
			</div>
			<div className="ml-auto hover:cursor-pointer">
				<Plus />
			</div>
		</div>
	);
}

export default function FontCard({ font }: { font: any }) {
	return (
		<div
			className="group p-4 h-[330px] md:h-[420px] lg:h-[470px] border w-full md:w-half lg:w-third xl:w-fourth rounded-md"
			style={{ fontFamily: font.family }}
		>
			{/* Non-hover state */}
			<div className="group-hover:hidden h-full flex flex-col justify-between">
				<div className="text-[128px]" style={{ lineHeight: 0.8 }}>
					Aa
				</div>
				<FontInfo font={font} />
			</div>

			{/* Hover state */}
			<div className="h-full hidden group-hover:flex flex-col justify-between">
				<span className="text-3xl">
					Whereas disregard and contempt for human rights have resulted
				</span>
				<FontInfo font={font} showCategory />
			</div>
		</div>
	);
}