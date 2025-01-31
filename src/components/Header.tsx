"use client";

import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/config/routes";
import { memo } from "react";

const Header = () => {
	const pathname = usePathname();
	const segments = pathname.split("/").filter((segment) => segment);

	// Filter out the current path from navigation items
	const visibleNavItems = NAVIGATION_ITEMS.filter(
		(item) => item.path !== pathname,
	);

	return (
		<header>
			<div className="flex justify-between items-center">
				<div className="flex min-h-full items-center space-x-4 text-sm">
					<Link href="/">
						<h1 className="text-3xl">BetterFonts</h1>
					</Link>
					<div className="h-32">
						<Separator orientation="vertical" />
					</div>
					{segments.length > 0 && (
						<h1 className="text-3xl first-letter:capitalize">
							{segments.join(" ")}
						</h1>
					)}
				</div>
				<nav>
					<ul className="flex items-center space-x-4">
						{visibleNavItems.map((item) => (
							<li key={item.path}>
								<Link
									href={item.path}
									className="hover:text-gray-600 transition-colors"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<Separator />
		</header>
	);
};

export default memo(Header);
