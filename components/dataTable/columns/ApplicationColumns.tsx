"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableHeader } from "@/components/dataTable/partials/DataTableHeader";
import LinkTargetBlank from "@/components/ui/LinkTargetBlank";
import { EditApplicationDialog } from "@/components/dialogs/EditApplicationDialog";
import { ApplicationType } from "@/app/globalTypes/ApplicationType";

const ApplicationColumns: ColumnDef<ApplicationType>[] = [
	{
		id: "applied",
		accessorKey: "created_at",
		accessorFn: (row) => (row.created_at ? row.created_at.split("T")[0] : "N/A"),
		header: ({ column }) => <DataTableHeader className="pl-1 md:pl-5" column={column} title="Applied" />,
		cell: ({ row }) => <p className="text-left font-medium md:pl-4">{row.getValue("applied")}</p>,
	},
	{
		accessorKey: "status",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Status" />,
		cell: ({ row }) => <p className="text-left font-medium ">{row.getValue("status")}</p>,
	},
	{
		accessorKey: "company.name",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Company" />,
		cell: ({ row }) => <p className="text-left font-medium">{row.getValue("company_name")} </p>,
	},
	{
		accessorKey: "title",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Title" />,
		cell: ({ row }) => <p className="text-left font-medium">{row.getValue("title")}</p>,
	},
	{
		accessorKey: "type",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Type" />,
		cell: ({ row }) => <p className="text-left font-medium">{row.getValue("type")}</p>,
	},
	{
		accessorKey: "description",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="About" />,
		cell: ({ row }) => <p className="text-left font-medium">{row.getValue("description")}</p>,
	},
	{
		accessorKey: "link",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Link" />,

		cell: ({ row }) => <LinkTargetBlank key={row.getValue("link")} href={row.getValue("link")} />,
	},
	{
		id: "responseDate",
		accessorKey: "response_date",
		header: ({ column }) => <DataTableHeader className="pl-1" column={column} title="Replied" />,
		accessorFn: (row) => (row.response_date ? row.response_date.split("T")[0] : "N/A"),
		cell: ({ row }) => <p className="text-left font-medium">{row.getValue("responseDate")}</p>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const application = row.original;
			return (
				<div className="w-full flex justify-end md:pr-3">
					<EditApplicationDialog data={application} />
				</div>
			);
		},
	},
];

export { ApplicationColumns };
