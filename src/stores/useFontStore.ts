// stores/useFontStore.js
import { create } from 'zustand'
import { defaultControls, variableControls } from '@/config/controls/styleControls'
import type { FontStyles } from '@/types/font';
const initializeStyles = () => {
  const styles: FontStyles = {} as FontStyles;
  
  // Add default controls values
  defaultControls.forEach(control => {
    styles[control.id] = control.defaultValue;
  });
  
  // Add variable controls values
  variableControls.forEach(control => {
    styles[control.id] = control.defaultValue;
  });
  console.log(styles);
  
  return styles;
};

interface FontStore {
  // State
  // currentFont: FontData;
  styles: FontStyles;

  // Actions
  // setCurrentFont: (fontData: FontData) => void;
  updateStyle: (property: keyof FontStyles, value: number) => void;
  // resetStyles: () => void;
}

const useFontStore = create<FontStore>((set) => ({
  // // Font info
  // currentFont: {
  //   family: '',
  //   isVariable: false,
  //   weights: [], // For non-variable fonts
  //   variableAxes: {} // For variable fonts: wght, wdth, opsz, slnt, ital
  // },
  
  // Font style states
  styles: initializeStyles(),

  
  // Actions
  // setCurrentFont: (fontData) => 
  //   set({
  //     currentFont: fontData
  //   }),
    
  updateStyle: (property: keyof FontStyles, value: number) => 
    set((state) => ({
      styles: {
        ...state.styles,
        [property]: value
      }
    })),
    
  // resetStyles: () => 
  //   set({
  //     styles: {
  //       fontSize: 16,
  //       lineHeight: 1.5,
  //       letterSpacing: 0,
  //       wordSpacing: 0,
  //       fontWeight: 400,
  //       fontWidth: 100,
  //       opticalSize: 16,
  //       fontSlant: 0,
  //       fontStyle: 0
  //     }
  //   })
}))

export default useFontStore