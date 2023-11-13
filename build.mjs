import * as esbuild from 'esbuild'
import { opendir } from 'node:fs/promises'

const dirs = [
	"client_scripts",
	"server_scripts",
	"startup_scripts"
];

const files = (await Promise.all(dirs.map(async dir => {
	const files = [];
	for await (const file of await opendir(dir)) {
		if (file.name.endsWith(".ts")) {
			files.push(file.path)
		}
	}
	return files
}))).flat()


await esbuild.build({
	entryPoints: files,
	bundle: true,
	minify: true,
	outdir: "dist",
	outbase: "."
})