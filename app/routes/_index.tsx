import { title } from "@/config.shared";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: title() },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<main className="container prose py-8">
			<h1 className="text-lg">Single Fech Demo ✨</h1>

			<h2 className="text-lg">Where to go ⛖</h2>
			<ul>
				<li>
					<Link
						className="text-lg"
						to="location/brazil/regions"
						rel="noreferrer"
					>
						Brazil 🇧🇷
					</Link>
				</li>
				<li>
					<Link
						className="text-lg"
						to="location/denmark/regions"
						rel="noreferrer"
					>
						Denmark 🇩🇰
					</Link>
				</li>
			</ul>
		</main>
	);
}
