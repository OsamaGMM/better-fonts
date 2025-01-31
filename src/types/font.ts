export type FontStyles = {
  // Default controls
  size: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  fontWeight: number;

  // Variable font controls
  weight: number;
  width: number;
  opticalSize: number;
  slant: number;
  style: number;
  
  // Add any other style properties you need
  [key: string]: number; // This allows other string keys with number values
}