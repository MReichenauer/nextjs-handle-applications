"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableHeader } from "@/components/dataTable/partials/DataTableHeader";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Application = {
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
		accessorKey: "company_id",
		header: ({ column }) => <DataTableHeader column={column} title="Company ID" />,
		cell: ({ row }) => <div className="text-left  font-medium">{row.getValue("company_id")}</div>,
	},
	{
		accessorKey: "created_at",
		header: ({ column }) => <DataTableHeader column={column} title="Created At" />,

		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("created_at")}</div>,
	},
	{
		accessorKey: "description",
		header: ({ column }) => <DataTableHeader column={column} title="Description" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("description")}</div>,
	},

	{
		accessorKey: "link",
		header: ({ column }) => <DataTableHeader column={column} title="Link" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("link")}</div>,
	},
	{
		accessorKey: "response_date",
		header: ({ column }) => <DataTableHeader column={column} title="Response Date" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("response_date")}</div>,
	},
	{
		accessorKey: "status",
		header: ({ column }) => <DataTableHeader column={column} title="Status" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("status")}</div>,
	},
	{
		accessorKey: "title",
		header: ({ column }) => <DataTableHeader column={column} title="Title" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("title")}</div>,
	},
	{
		accessorKey: "type",
		header: ({ column }) => <DataTableHeader column={column} title="Type" />,
		cell: ({ row }) => <div className="text-left font-medium">{row.getValue("type")}</div>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const application = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(application.id))}>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
