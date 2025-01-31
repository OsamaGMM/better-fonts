import FontCard from "./FontCard";

export default async function FontWrapper() {
	const res = await fetch(
		`https://webfonts.googleapis.com/v1/webfonts?family=Inter&family=Geist&family=Montserrat&key=${process.env.GOOGLE_FONTS_API_KEY}`,
		// `https://webfonts.googleapis.com/v1/webfonts?key=${process.env.GOOGLE_FONTS_API_KEY}`,
	);
	const data = await res.json();
	const items = data.items;

	const moreItems = [...items, ...items, ...items];

	const fontFamilies = items
		.map((font) => font.family.replace(/ /g, "+"))
		.join("&family=");
	const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`;

	return (
		<>
			<link href={fontUrl} rel="stylesheet" />
			<div className="flex flex-wrap justify-between gap-y-8 gap-x-4">
				{moreItems.map((font, index) => (
					<FontCard key={index} font={font} />
				))}
			</div>
		</>
	);
}
