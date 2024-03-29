import { forwardRef } from "react";
import { ArrowFallWeights, CustomIconBase, type CustomIconProps } from "..";

const ArrowFallIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ArrowFallWeights} />
	),
);

ArrowFallIcon.displayName = "ArrowFallIcon";
export { ArrowFallIcon };
