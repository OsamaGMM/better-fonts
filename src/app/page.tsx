import Sliders from "@/components/Customizations/Sliders";
import Test from "@/components/Customizations/Test";
import {
	defaultControls,
	variableControls,
} from "@/config/controls/styleControls";

export default function Home() {

	return (
		<div className="grid grid-col-12">
      {/* <Test/> */}
			<Sliders controls={defaultControls}/>
			<Sliders controls={variableControls}/>
		</div>
	);
}
