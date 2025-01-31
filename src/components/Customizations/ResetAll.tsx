"use client";
import useFontStore from "@/stores/useFontStore";
import { RefreshCcw } from "lucide-react";
import { useQueryState } from "nuqs";
import { defaultControls, variableControls } from "@/config/controls/styleControls";

export default function ResetAll() {
	const resetStyles = useFontStore((state) => state.resetStyles);
	const allControls = [...defaultControls, ...variableControls];
	
	// Get setters for all query params
	const querySetters = allControls.map(
		(control) => useQueryState(control.query)[1],
	);	

	const handleReset = () => {
		resetStyles();
		querySetters.forEach((setQuery) => setQuery(null));
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleReset}
			className="hover:cursor-pointer mx-4 col-start-5 col-end-6 row-end-2 row-span-2 content-center justify-items-end"
		>
			<RefreshCcw />
		</div>
	);
}
