import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("首版作品集只公开一个可交互案例", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(source, /XIUJIN/);
  assert.match(source, /住在中国/);
  assert.match(source, /AI 产品原型/);
  assert.match(source, /https:\/\/living-in-china\.vercel\.app/);
  assert.match(source, /FIRST PUBLIC CASE/);
  assert.doesNotMatch(source, /整理中|在线版本准备中/);
  assert.equal((source.match(/name: "住在中国"/g) ?? []).length, 1);
});
