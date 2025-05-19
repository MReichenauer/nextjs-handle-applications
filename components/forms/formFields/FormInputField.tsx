import { replaceUnderScore } from "@/app/helpers/formatStrings/replaceUnderScore";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";

type FormInputFieldProps<T extends FieldValues> = {
	fieldName: Path<T>;
	form: UseFormReturn<T>;
	className?: string;
};

export const FormInputField = <T extends FieldValues>({ form, fieldName, className }: FormInputFieldProps<T>) => {
	return (
		<FormField
			key={fieldName}
			control={form.control}
			name={fieldName}
			render={({ field }) => (
				<FormItem className={`w-full ${className}`}>
					<FormLabel className="capitalize">{replaceUnderScore(fieldName)}</FormLabel>
					<FormControl>
						<Input
							{...field}
							placeholder={`Enter ${replaceUnderScore(fieldName)}`}
							type={fieldName === "response_date" ? "date" : "text"}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
