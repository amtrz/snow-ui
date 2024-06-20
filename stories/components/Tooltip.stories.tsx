import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import { Button, ROLES, Tooltip } from "../../src";
import { testKeyBindings } from "../mocks";

const testSeparator = "+";
const testLabel = "Tooltip";
const testButtonLabel = "Hover me";

const meta = {
	title: "Base Components/Tooltip",
	component: Tooltip,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		controls: {
			exclude: ["children"],
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		position: {
			control: "radio",
			options: ["top", "bottom", "left", "right"],
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		visible: true,
		position: "bottom",
		label: testLabel,
		kbd: undefined,
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTooltip: Story = {
	args: {},
	render: (args) => <Tooltip visible {...args} />,
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const tooltip = canvas.getByRole(ROLES.tooltip);

		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent(testLabel);
	},
};

export const TooltipWithKeyBindings: Story = {
	args: {
		kbd: {
			keyBindings: testKeyBindings,
			separator: testSeparator,
		},
	},
	play: (context) => {
		const { canvasElement, step } = context;
		const canvas = within(canvasElement);
		const keyBindings = canvas.getByRole(ROLES.kbd);

		if (BasicTooltip.play) BasicTooltip.play(context);

		step("Key bindings are visible", () => {
			expect(keyBindings).toBeInTheDocument();
			expect(keyBindings).toHaveTextContent(testKeyBindings.join(testSeparator));
		});
	},
};

export const ButtonWithTooltip: Story = {
	args: {
		children: <Button label={testButtonLabel} />,
		kbd: {
			keyBindings: testKeyBindings,
		},
		visible: false,
	},
	render: (args) => {
		const [showTooltip, setShowTooltip] = useState(args.visible);

		return (
			<Tooltip {...args} visible={showTooltip}>
				<Button
					label="Hover me"
					variant="filled"
					onMouseEnter={() => setShowTooltip(true)}
					onMouseLeave={() => {
						setShowTooltip(false);
					}}
				/>
			</Tooltip>
		);
	},
	play: async (context) => {
		const { canvasElement } = context;
		const canvas = within(canvasElement);
		const button = canvas.getByRole(ROLES.button);

		expect(button).toBeInTheDocument();

		await userEvent.hover(button);

		await waitFor(async () => {
			const tooltip = canvas.getByRole(ROLES.tooltip);
			if (BasicTooltip.play) BasicTooltip.play(context);
			const kbd = canvas.getByRole(ROLES.kbd);

			expect(kbd).toBeInTheDocument();
			expect(kbd).toHaveTextContent(testKeyBindings.join(""));

			await userEvent.unhover(button);

			await waitFor(() => {
				expect(tooltip).not.toBeInTheDocument();
			});
		});
	},
};