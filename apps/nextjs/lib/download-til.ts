import * as fs from "fs";
import * as path from "path";

import { getAllTILsNode } from "./github-api";

const yellow = "\x1b[33m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

export const downloadTil = async () => {
	console.log(yellow, "🫠: downloading til...");
	const tils = await getAllTILsNode();

	tils.forEach(
		(til: {
			id: string;
			title: string;
			body: string;
			createdAt: string;
			labels: {
				nodes: {
					name: string;
					id: string;
				}[];
			};
		}) => {
			const data = {
				id: til.id,
				title: til.title,
				content: til.body,
				createdAt: til.createdAt,
				labels: til.labels.nodes.map((label) => label.name),
			};
			const tilJson = JSON.stringify(data);
			const tilPath = path.join(
				process.cwd(),
				"content",
				"til",
				`${til.id}.json`,
			);
			fs.writeFile(tilPath, tilJson, (err) => {
				if (err) {
					console.error(err);
				}
			});
		},
	);
};

downloadTil().then(() =>
	console.log(green, "🫠: til successfully downloaded!\n"),
);

export {};
