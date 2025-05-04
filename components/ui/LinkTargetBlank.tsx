"use client";
import clsx from "clsx";
import { useState } from "react";

type LinkTargetBlankProps = {
	href: string;
	label?: string;
	className?: string;
};

const LinkTargetBlank = ({ href, label, className }: LinkTargetBlankProps) => {
	const [visited, setVisited] = useState(false);
	return (
		<a
			target="_blank"
			href={href}
			className={clsx(
				"hover:underline text-sky-400 hover:text-sky-500 text-left font-medium",
				visited && "text-sky-600",
				className,
			)}
			title={className}
			onClick={(e) => {
				e.stopPropagation(), setVisited(true);
			}}
		>
			{label ? label : href}
		</a>
	);
};

export default LinkTargetBlank;
