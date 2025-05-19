import { z } from "zod";

const schema = z.object({
	title: z.string().min(2, {
		message: "Min 3 characters.",
	}),
	description: z.string().min(2, {
		message: "Min 3 characters.",
	}),
	status: z.string().min(2, {
		message: "Status must be at least 2 characters.",
	}),
	type: z.string().min(2, {
		message: "Type must be at least 2 characters.",
	}),
	link: z.string().url({
		message: "Link must be a valid URL.",
	}),
	response_date: z.string().optional(),
	company_name: z.string().min(2, {
		message: "Min 3 characters.",
	}),
});

export { schema };
