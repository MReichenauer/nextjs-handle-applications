"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditableFields } from "./EditRowDialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const formSchema = z.object({
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

type ShadFormProps = {
	data: EditableFields;
};

export const ShadForm = ({ data }: ShadFormProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: data.title ?? "",
			description: data.description ?? "",
			status: data.status ?? "",
			type: data.type ?? "",
			link: data.link ?? "",
			response_date: data.response_date?.split("T")[0] ?? "",
			company_name: data.company_name ?? "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("submited form", values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{Object.keys(formSchema.shape).map((fieldName) => (
					<FormField
						key={fieldName}
						control={form.control}
						name={fieldName as keyof z.infer<typeof formSchema>}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="capitalize">{fieldName.replace("_", " ")}</FormLabel>
								<FormControl>
									{fieldName === "status" ? (
										<Select defaultValue={field.value} onValueChange={field.onChange}>
											<SelectTrigger>
												<SelectValue>{field.value}</SelectValue>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="applied">Applied</SelectItem>
												<SelectItem value="interview">Interview</SelectItem>
												<SelectItem value="offer">Offer</SelectItem>
												<SelectItem value="rejected">Rejected</SelectItem>
											</SelectContent>
										</Select>
									) : (
										<Input
											{...field}
											placeholder={`Enter ${fieldName.replace("_", " ")}`}
											type={fieldName === "response_date" ? "date" : "text"}
										/>
									)}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};
