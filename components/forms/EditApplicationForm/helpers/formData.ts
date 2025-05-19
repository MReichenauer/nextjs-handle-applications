import { ApplicationType } from "@/app/globalTypes/ApplicationType";

const formData = (data: ApplicationType) => {
	return {
		created_at: data.created_at,
		title: data.title,
		description: data.description,
		status: data.status,
		type: data.type,
		link: data.link,
		response_date: data.response_date,
		company_name: data.company?.name ?? null,
	};
};

export { formData };
