'use client'
import useFontStore from "@/stores/useFontStore";

export default function Test() {
  const weight = useFontStore(state => state.styles.weight);
  

  return (
    <div className="grid grid-col-12">
      <h1>{weight}</h1>
    </div>
  );
}
