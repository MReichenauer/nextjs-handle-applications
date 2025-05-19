import { ApplicationType } from "@/app/globalTypes/ApplicationType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./schema";

const methods = (data: ApplicationType) => {
	return useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: data.title ?? "",
			description: data.description ?? "",
			status: data.status ?? "",
			type: data.type ?? "",
			link: data.link ?? "",
			response_date: data.response_date?.split("T")[0] ?? "",
			company_name: data.company?.name ?? "",
		},
	});
};

export { methods };
