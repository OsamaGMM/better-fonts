"use client";
import useFontStore from "@/stores/useFontStore";
import { RefreshCcw } from "lucide-react";
export default function ResetAll() {
	// Resets all styles
	const resetStyles = useFontStore((state) => state.resetStyles);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() => resetStyles()}
			className="hover:cursor-pointer mx-4 col-start-5 col-end-6 row-end-2 row-span-2 content-center justify-items-end"
		>
			<RefreshCcw />
		</div>
	);
}
