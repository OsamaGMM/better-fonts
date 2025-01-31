// stores/useFontStore.js
import { create } from "zustand";
import {
	defaultControls,
	variableControls,
	defaultStyles,
} from "@/config/controls/styleControls";
import type { FontStyles } from "@/types/font";

const initializeStyles = () => {
	const styles: FontStyles = {} as FontStyles;

	// Add default controls values
	defaultControls.forEach((control) => {
		styles[control.id] = control.defaultValue;
	});

	// Add variable controls values
	variableControls.forEach((control) => {
		styles[control.id] = control.defaultValue;
	});

	return styles;
};

interface FontStore {
	// State
	styles: FontStyles;

	// Actions
	updateStyle: (property: keyof FontStyles, value: number) => void;
	resetStyle: (property: keyof FontStyles) => void;
	resetStyles: () => void; // Added back since it might be useful
}

const useFontStore = create<FontStore>((set) => ({
	// Font style states
	styles: initializeStyles(),

	// Actions
	updateStyle: (property: keyof FontStyles, value: number) =>
		set((state) => ({
			styles: {
				...state.styles,
				[property]: value,
			},
		})),

	// Resets individuall values
	resetStyle: (property: keyof FontStyles) =>
		set((state) => {
			// If current value is already the default, don't update
			if (state.styles[property] === defaultStyles[property]) {        
				return state;
			}      
			// Otherwise reset to default
			return {
				styles: {
					...state.styles,
					[property]: defaultStyles[property],
				},
			};
		}),

	// Resest all styles for the settings
	resetStyles: () =>
		set({
			styles: initializeStyles(),
		}),
}));

export default useFontStore;
