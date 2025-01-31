import Sliders from "@/components/Customizations/Sliders";
import Test from "@/components/Customizations/Test";
import ResetAll from "@/components/Customizations/ResetAll";
import {
	defaultControls,
	variableControls,
} from "@/config/controls/styleControls";
import { Separator } from "@/components/ui/separator";
import FontWrapper from "@/components/FontView/FontWrapper";

export default function Home() {
	return (
		<div className="">
			{/* <Test /> */}
			<div className="grid grid-col-12 space-y-3">
				<ResetAll />
				<Sliders controls={defaultControls} />
				<Sliders controls={variableControls} />
				<Separator className="col-start-1 col-end-12" />
			</div>
			<div className="grid grid-col-5 grid-col-12 mt-8">
				<FontWrapper />
			</div>
		</div>
	);
}
