import { ArrowsDownWeights, CustomIconBase } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const ArrowsDownIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ArrowsDownWeights} />
	),
);

ArrowsDownIcon.displayName = "ArrowsDownIcon";
export { ArrowsDownIcon };
