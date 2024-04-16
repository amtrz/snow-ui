import { CustomIconBase, DotWeights } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const DotIcon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
	<CustomIconBase ref={ref} {...props} weights={DotWeights} />
));

DotIcon.displayName = "DotIcon";
export { DotIcon };
