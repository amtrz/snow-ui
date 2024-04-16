import type { CustomIconProps } from "@utils";
import { forwardRef } from "react";
import { NotepadWeights } from "../defs";
import { CustomIconBase } from "../lib";

const NotepadIcon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
	<CustomIconBase ref={ref} {...props} weights={NotepadWeights} />
));

NotepadIcon.displayName = "NotepadIcon";
export { NotepadIcon };
