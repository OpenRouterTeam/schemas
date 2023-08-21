import { existsSync } from 'fs';
import { mkdir, rmdir, writeFile } from 'fs/promises';
import { dirname } from 'path';
import { compileFromFile } from 'json-schema-to-typescript';

const version = 'v1';

const schemaFileURI = new URL(`../${version}.json`, import.meta.url);
const outputFileURI = new URL(`../dist/index.d.ts`, import.meta.url);

async function prepublish() {
  const tsCode = await compileFromFile(schemaFileURI.pathname);
  const outputDir = dirname(outputFileURI.pathname);
  if (existsSync(outputDir)) {
    await rmdir(outputDir, { recursive: true });
  }

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFileURI.pathname, tsCode);
}

prepublish();
