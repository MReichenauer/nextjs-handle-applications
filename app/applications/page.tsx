import { createClient } from "@/utils/supabase/server";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function CompaniesPage() {
	const supabase = await createClient();

	const { data: applications } = await supabase.from("applications").select();

	if (!applications) {
		return <pre>No companies found</pre>;
	}
	const fakeOne = {
		company_id: 1,
		created_at: "2023-01-02",
		description: "A description",
		id: 2,
		link: "https://google.com",
		response_date: "2023-01-02",
		status: "open",
		title: "A title",
		type: "program",
	};
	const fakeTwo = {
		company_id: 2,
		created_at: "2023-01-01",
		description: "A description",
		id: 3,
		link: "https://google.com",
		response_date: "2023-01-01",
		status: "open",
		title: "A title",
		type: "program",
	};

	applications.push(fakeOne);
	applications.push(fakeTwo);

	return (
		<div className="container mx-auto py-10 px-5 w-screen max-w-7xl">
			<DataTable columns={columns} data={applications} />
		</div>
	);
}
