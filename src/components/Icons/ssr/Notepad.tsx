import { CustomIconBase, NotepadWeights } from "@components";
import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";

const NotepadIcon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
	<CustomIconBase ref={ref} {...props} weights={NotepadWeights} />
));

NotepadIcon.displayName = "NotepadIcon";
export { NotepadIcon };
