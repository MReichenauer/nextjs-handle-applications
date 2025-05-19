"use client";

import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormInputField } from "../formFields/FormInputField";
import { FormSelectField } from "../formFields/FormSelectField";
import { typeOptions } from "./selectOptions/typeOptions";
import { statusOptions } from "./selectOptions/statusOptions";
import { methods } from "./helpers/methods";
import { ApplicationType } from "@/app/globalTypes/ApplicationType";
import { schema } from "./helpers/schema";

type EditApplicationFormProps = {
	data: ApplicationType;
};

const EditApplicationForm = ({ data }: EditApplicationFormProps) => {
	const formMethods = methods(data);

	const onSubmit = (values: z.infer<typeof schema>) => {
		console.log("submited form", values);
	};

	return (
		<Form {...formMethods}>
			<form onSubmit={formMethods.handleSubmit(onSubmit)} id="editRowForm">
				<div className="grid grid-cols-2 gap-y-3 gap-x-6">
					<FormInputField fieldName="title" form={formMethods} />
					<FormInputField fieldName="company_name" form={formMethods} />
					<FormSelectField form={formMethods} fieldName="type" options={typeOptions} />
					<FormInputField fieldName="link" form={formMethods} />
					<FormSelectField form={formMethods} fieldName="status" options={statusOptions} />
					<FormInputField fieldName="response_date" form={formMethods} />
				</div>
				<FormInputField fieldName="description" form={formMethods} className="mt-3" />
			</form>
		</Form>
	);
};
export { EditApplicationForm };
