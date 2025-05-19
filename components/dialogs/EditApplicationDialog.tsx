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
import { Pen } from "lucide-react";
import { EditApplicationForm } from "../forms/EditApplicationForm/EditApplicationForm";
import { ApplicationType } from "@/app/globalTypes/ApplicationType";

type EditApplicationDialogProps = {
	data: ApplicationType;
};

const EditApplicationDialog = ({ data }: EditApplicationDialogProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0 data-[state=open]:bg-muted">
					<Pen aria-label="Edit" size={16} />
					<span className="sr-only">Edit</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle>Edit Application</DialogTitle>
					<DialogDescription>Desc Desc</DialogDescription>
				</DialogHeader>{" "}
				<EditApplicationForm data={data} />
				<DialogFooter className="mt-4">
					<Button type="submit" form="editRowForm">
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export { EditApplicationDialog };
