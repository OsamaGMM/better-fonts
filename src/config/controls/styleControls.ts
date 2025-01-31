// Default controls
export type SliderControlProps = {
  id: string;
  label: string;
  unit: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
	query: string
}
import type { FontStyles } from "@/types/font";

export const defaultControls = [
	{
		id: "size",
		label: "Size",
		min: 8,
		max: 140,
		step: 1,
		unit: "px",
		defaultValue: 16,
		query: 's'
	},
	{
		id: "lineHeight",
		label: "Line Height",
		min: 0.5,
		max: 3,
		step: 0.1,
		unit: "",
		defaultValue: 1.5,
		query: 'lh'
	},
	{
		id: "letterSpacing",
		label: "Letter Spacing",
		min: -5,
		max: 10,
		step: 0.1,
		unit: "px",
		defaultValue: 0,
		query: 'ls'
	},
	{
		id: "wordSpacing",
		label: "Word Spacing",
		min: 100,
		max: 900,
		step: 100,
		unit: "",
		defaultValue: 100,
		query: 'ws'
	},
	{
		id: "fontWeight",
		label: "Weight",
		min: 100,
		max: 900,
		step: 100,
		unit: "",
		defaultValue: 400,
		query: 'fw'
	},
];

// Controls for variable fonts
export const variableControls = [
	{
		id: "weight", // wght axis
		label: "Weight",
		min: 100,
		max: 900,
		step: 5,
		unit: "",
		defaultValue: 400,
		query: 'vw'
	},
	{
		id: "width", // wdth axis
		label: "Width",
		min: 50,
		max: 200,
		step: 1,
		unit: "%",
		defaultValue: 100,
		query: 'wi'
	},
	{
		id: "opticalSize", // opsz axis
		label: "Optical Size",
		min: 6,
		max: 72,
		step: 1,
		unit: "px",
		defaultValue: 16,
		query: 'os'
	},
	{
		id: "slant", // slnt axis
		label: "Slant",
		min: -15,
		max: 15,
		step: 1,
		unit: "deg",
		defaultValue: 0,
		query: 'sl'
	},
	{
		id: "style", // ital axis
		label: "Italic",
		min: 0,
		max: 1,
		step: 1,
		unit: "",
		defaultValue: 0,
		query: 'it'
	},
];

export const defaultStyles: FontStyles ={
  size: 16,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
  fontWeight: 400,
  weight: 400,
  width: 100,
  opticalSize: 16,
  slant: 0,
  style: 0,
};