type ApplicationType = {
	company: {
		id: number;
		name: string | null;
	} | null;
	company_id: number | null;
	created_at: string;
	description: string | null;
	id: number;
	link: string | null;
	response_date: string | null;
	status: string | null;
	title: string | null;
	type: string | null;
	role?: string | null;
};

export type { ApplicationType };
