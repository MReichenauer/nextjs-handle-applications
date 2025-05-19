import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { SelectOptionType } from "../EditApplicationForm/selectOptions/types";
import { replaceUnderScore } from "@/app/helpers/formatStrings/replaceUnderScore";

type FormSelectFieldProps<T extends FieldValues> = {
	fieldName: Path<T>;
	form: UseFormReturn<T>;
	options: SelectOptionType[];
	className?: string;
};

const FormSelectField = <T extends FieldValues>({ form, fieldName, options, className }: FormSelectFieldProps<T>) => {
	return (
		<FormField
			key={fieldName}
			control={form.control}
			name={fieldName}
			render={({ field }) => (
				<FormItem className={`w-full ${className}`}>
					<FormLabel className="capitalize">{replaceUnderScore(fieldName)}</FormLabel>
					<FormControl>
						<Select defaultValue={field.value} onValueChange={field.onChange}>
							<SelectTrigger>
								<SelectValue> {field.value} </SelectValue>
							</SelectTrigger>
							<SelectContent>
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
export { FormSelectField };
