import { ArrowRiseWeights, CustomIconBase } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const ArrowRiseIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ArrowRiseWeights} />
	),
);

ArrowRiseIcon.displayName = "ArrowRiseIcon";
export { ArrowRiseIcon };
