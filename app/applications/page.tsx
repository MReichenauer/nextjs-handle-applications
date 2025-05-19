import { createClient } from "@/utils/supabase/server";
import { DataTable } from "../../components/dataTable/DataTable";
import { ApplicationColumns } from "../../components/dataTable/columns/ApplicationColumns";

export default async function CompaniesPage() {
	const supabase = await createClient();
	const { data: applications, error } = await supabase.from("applications").select(`
      *,
      company: companies (
        id,
        name
      )
    `);
	console.log({ error, applications });
	if (!applications) {
		return <pre>No companies found</pre>;
	}

	return (
		<div className="container mx-auto py-10 px-5 w-screen max-w-7xl">
			<DataTable columns={ApplicationColumns} data={applications} />
		</div>
	);
}
