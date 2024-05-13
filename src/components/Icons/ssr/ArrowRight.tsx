import type { CustomIconProps } from "@types";
import { forwardRef } from "react";
import { ArrowRightWeights } from "../defs";
import { CustomIconBase } from "../lib";

const ArrowRightIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ArrowRightWeights} />
	),
);

ArrowRightIcon.displayName = "ArrowRightIcon";
export { ArrowRightIcon };
