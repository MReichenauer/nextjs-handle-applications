import { createClient } from "@/utils/supabase/server";
export default async function CompaniesPage() {
	const supabase = await createClient();
	const { data: companies } = await supabase.from("companies").select();
	return <pre>{JSON.stringify(companies, null, 2)}</pre>;
}
