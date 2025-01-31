import Sliders from "@/components/Customizations/Sliders";
import Test from "@/components/Customizations/Test";
import ResetAll from "@/components/Customizations/ResetAll";
import {
	defaultControls,
	variableControls,
} from "@/config/controls/styleControls";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="grid grid-col-12">
			<Test />
			<ResetAll />
			<Sliders controls={defaultControls} />
			<Sliders controls={variableControls} />
		</div>
	);
}
