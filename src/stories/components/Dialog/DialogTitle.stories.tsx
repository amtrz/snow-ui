import { AddIcon, DialogTitle } from "@components";
import { ROLES } from "@constants";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { iconControl } from "../mocks";

const testTitle = "Title";
const testCloseFn = fn();
const altIconText = `Icon for dialog ${testTitle}`;

const meta = {
	title: "Base Components/Dialog/Dialog Title",
	component: DialogTitle,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		titleIcon: iconControl,
		onClose: {
			control: undefined,
			description: "Function to close the dialog",
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		titleIcon: undefined,
		title: testTitle,
	},
	decorators: [
		(Story) => (
			<div className="min-w-80">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDialogTitle: Story = {
	args: {},
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const DialogTitle = canvas.getByRole(ROLES.dialogTitle);

		expect(DialogTitle).toHaveTextContent(testTitle);
	},
};

export const DialogWithIcon: Story = {
	args: {
		titleIcon: AddIcon,
	},
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const Icon = canvas.getByTitle(altIconText);

		expect(Icon).toBeInTheDocument();
	},
};

export const DialogTitleWithCloseButton: Story = {
	args: {
		onClose: testCloseFn,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const CloseButton = canvas.getByRole(ROLES.button);

		await userEvent.click(CloseButton);

		expect(testCloseFn).toHaveBeenCalled();
	},
};