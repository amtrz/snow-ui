import { CopyWeights, CustomIconBase } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const CopyIcon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
	<CustomIconBase ref={ref} {...props} weights={CopyWeights} />
));

CopyIcon.displayName = "CopyIcon";
export { CopyIcon };
