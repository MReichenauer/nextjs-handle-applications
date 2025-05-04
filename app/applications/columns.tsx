"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DataTableHeader } from "@/components/dataTable/partials/DataTableHeader";
import LinkTargetBlank from "@/components/ui/LinkTargetBlank";

export type Application = {
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
};

export const columns: ColumnDef<Application>[] = [
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
		cell: () => {
			return (
				<div className="w-full flex justify-end md:pr-3">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<span className="sr-only">Open menu</span>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem className="p-0">
								<Button variant="ghost" className="w-full">
									<span className="sr-only">Edit</span>
									Edit
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem className="p-0">
								<Button
									variant="ghost"
									className="w-full text-destructive focus:bg-destructive focus:text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground"
								>
									<span className="sr-only">Delete</span>
									Delete
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];
