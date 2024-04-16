import { ClipboardWeights, CustomIconBase } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const ClipboardIcon = forwardRef<SVGSVGElement, CustomIconProps>(
	(props, ref) => (
		<CustomIconBase ref={ref} {...props} weights={ClipboardWeights} />
	),
);

ClipboardIcon.displayName = "ClipboardIcon";
export { ClipboardIcon };
