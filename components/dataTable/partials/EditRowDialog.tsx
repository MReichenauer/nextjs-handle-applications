import { Application } from "@/app/applications/columns";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";
import { ShadForm } from "./ShadForm";

export type EditableFields = {
	created_at: string;
	title: string | null;
	description: string | null;
	status: string | null;
	type: string | null;
	link: string | null;
	response_date: string | null;
	company_name: string | null;
};

type EditRowDialogProps = {
	data: Application;
	onSave: (data: Partial<EditableFields>) => void;
};

const EditRowDialog = ({ data, onSave }: EditRowDialogProps) => {
	const editableData: EditableFields = {
		created_at: data.created_at,
		title: data.title,
		description: data.description,
		status: data.status,
		type: data.type,
		link: data.link,
		response_date: data.response_date,
		company_name: data.company?.name ?? null,
	};
	console.log({ editableData });
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0 data-[state=open]:bg-muted">
					<Pen aria-label="Edit" size={16} />
					<span className="sr-only">Edit</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Application</DialogTitle>
					<DialogDescription>Desc Desc</DialogDescription>
				</DialogHeader>{" "}
				<ShadForm data={editableData} />
				<DialogFooter className="mt-4">
					<Button type="submit" form="editRowForm">
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export { EditRowDialog };
