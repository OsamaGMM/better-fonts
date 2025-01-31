// SingleSlider.tsx
"use client";
import type { SliderControlProps } from "@/config/controls/styleControls";
import { Slider } from "../ui/slider";
import useFontStore from "@/stores/useFontStore";
import { memo } from "react";

function SingleSlider({ control }: { control: SliderControlProps }) {
	const value = useFontStore((state) => state.styles[control.id]);
	const updateStyle = useFontStore((state) => state.updateStyle);
	const resetStyle = useFontStore((state) => state.resetStyle);

	return (
		<div className="w-1/4 text-xs">
			<label className="flex justify-between">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span
					className="hover:cursor-pointer"
					onClick={() => resetStyle(control.id)}
				>
					{control.label}
				</span>
				<span className="w-14 text-right">
					{value}
					{control.unit}
				</span>
			</label>

			<Slider
				defaultValue={[control.defaultValue]}
				min={control.min}
				max={control.max}
				step={control.step}
				value={[value]}
				onValueChange={(val) => updateStyle(control.id, val[0])}
				className="hover:cursor-grab h-6"
			/>
		</div>
	);
}

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
