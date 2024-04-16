import { ArrowsDownUpWeights, CustomIconBase } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const ArrowsDownUpIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ArrowsDownUpWeights} />
	),
);

ArrowsDownUpIcon.displayName = "ArrowsDownUpIcon";
export { ArrowsDownUpIcon };
