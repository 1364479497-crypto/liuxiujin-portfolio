import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("新版首页呈现完整履历与六个真实案例方向", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(source, /XIUJIN/);
  assert.match(source, /把产品讲清楚/);
  assert.match(source, /猿力科技/);
  assert.match(source, /飞象星球/);
  assert.match(source, /住在中国/);
  assert.match(source, /飞象老师 3\.0 发布传播/);
  assert.match(source, /LINYUE AI 内容生产工作流/);
  assert.match(source, /微观生命结构馆/);
  assert.match(source, /https:\/\/living-in-china\.vercel\.app/);
  assert.match(source, /href="#experience"/);
  assert.match(source, /href="#work"/);
  assert.match(source, /href="#method"/);
  assert.match(source, /href="#contact"/);
  assert.doesNotMatch(source, /FIRST PUBLIC CASE|PROJECT 01|FIRST PUBLIC WORK/);
  assert.doesNotMatch(source, /hello@liuxiujin\.com/);
  assert.equal((source.match(/id: "project-/g) ?? []).length, 5);
});
