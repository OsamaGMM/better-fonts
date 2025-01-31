// SingleSlider.tsx
"use client";
import type { SliderControlProps } from "@/config/controls/styleControls";
import { Slider } from "../ui/slider";
import useFontStore from "@/stores/useFontStore";
import { memo, useEffect, useMemo, useState } from "react";
import { useQueryState, parseAsFloat } from "nuqs";

function Sliders({ controls }: { controls: SliderControlProps[] }) {
	return (
		<div className="col-start-6 col-end-12 flex justify-between gap-2">
			{controls.map((control) => (
				<SingleSlider key={control.id} control={control} />
			))}
		</div>
	);
}

export default memo(Sliders);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

function SingleSlider({ control }: { control: SliderControlProps }) {
	const value = useFontStore((state) => state.styles[control.id]);
	const updateStyle = useFontStore((state) => state.updateStyle);
	const resetStyle = useFontStore((state) => state.resetStyle);

	const [queryValue, setQueryValue] = useQueryState(
		control.query,
		parseAsFloat.withDefault(control.defaultValue),
	);
	const [initialized, setInitialized] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateStyle(control.id, queryValue);
		setInitialized(true);
	}, []);

	const debouncedSetQuery = useMemo(
		() => debounce((val: number) => setQueryValue(val), 300),
		[setQueryValue],
	);

	const handleValueChange = (id: string, val: number) => {
		updateStyle(id, val);
		debouncedSetQuery(val);
	};

	const handleResetStyle = (id: string) => {
		resetStyle(id);
		setQueryValue(null);
	};

	return (
		<div className="w-1/4 text-xs">
			<label className="flex justify-between">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span
					className="hover:cursor-pointer"
					onClick={() => handleResetStyle(control.id)}
				>
					{control.label}
				</span>

				<span className="w-14 text-right">
					{initialized ? value : queryValue}
					{control.unit}
				</span>
			</label>

			<Slider
				defaultValue={[queryValue]}
				min={control.min}
				max={control.max}
				step={control.step}
				value={[value]}
				onValueChange={(val) => handleValueChange(control.id, val[0])}
				className="hover:cursor-grab h-6"
			/>
		</div>
	);
}
