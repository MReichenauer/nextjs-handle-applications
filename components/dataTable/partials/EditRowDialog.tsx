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

type EditableFields = {
	title: string | null;
	description: string | null;
	status: string | null;
	type: string | null;
	link: string | null;
	response_date: string | null;
	company_name: string | null;
};

const Fields = ({ data }: { data: Partial<EditableFields> }) => {
	return (
		<div className="grid gap-4">
			{Object.entries(data).map(([key, value]) => (
				<div key={key} className="grid gap-2">
					<Label htmlFor={key} className="capitalize">
						{key.replace("_", " ")}
					</Label>
					<Input id={key} name={key} defaultValue={value ?? ""} placeholder={key.replace("_", " ")} />
				</div>
			))}
		</div>
	);
};

type EditRowDialogProps = {
	data: Application;
	onSave: (data: Partial<EditableFields>) => void;
};

const EditRowDialog = ({ data, onSave }: EditRowDialogProps) => {
	const editableData: Partial<EditableFields> = {
		title: data.title,
		description: data.description,
		status: data.status,
		type: data.type,
		link: data.link,
		response_date: data.response_date,
		company_name: data.company?.name ?? null,
	};

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
				</DialogHeader>
				<Fields data={editableData} />
				<DialogFooter className="mt-4">
					<Button type="submit">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export { EditRowDialog };
