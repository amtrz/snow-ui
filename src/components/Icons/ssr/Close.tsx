import type { CustomIconProps } from "@types";
import { forwardRef } from "react";
import { CloseWeights } from "../defs";
import { CustomIconBase } from "../lib";

const CloseIcon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
	<CustomIconBase ref={ref} {...props} weights={CloseWeights} />
));

CloseIcon.displayName = "CloseIcon";
export { CloseIcon };
