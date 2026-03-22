#!/usr/bin/env node

/**
 * skills-hr installer
 *
 * Copies skill SKILL.md files into the Claude Code skills directory
 * so they are available as slash commands in Claude Code.
 *
 * Install location: ~/.claude/skills/
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILLS = [
  "job-description-writer",
  "interview-kit",
  "offer-letter-generator",
  "performance-review-helper",
];

const sourceDir = path.join(__dirname, "skills");
const targetDir = path.join(os.homedir(), ".claude", "skills");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function installSkill(skillName) {
  const src = path.join(sourceDir, skillName, "SKILL.md");
  const destDir = path.join(targetDir, skillName);
  const dest = path.join(destDir, "SKILL.md");

  if (!fs.existsSync(src)) {
    console.warn(`  ⚠ Skipping ${skillName}: SKILL.md not found at ${src}`);
    return false;
  }

  ensureDir(destDir);
  fs.copyFileSync(src, dest);
  console.log(`  ✓ /${skillName}`);
  return true;
}

function main() {
  console.log("\nskills-hr — installing HR & recruiting skills for Claude Code\n");

  ensureDir(targetDir);

  let installed = 0;
  for (const skill of SKILLS) {
    if (installSkill(skill)) installed++;
  }

  console.log(`\n${installed}/${SKILLS.length} skills installed to ${targetDir}`);
  console.log("\nAvailable slash commands:");
  console.log("  /job-description-writer   — write inclusive, compelling job descriptions");
  console.log("  /interview-kit            — generate structured interview kits with rubrics");
  console.log("  /offer-letter-generator   — draft warm, complete offer letters");
  console.log("  /performance-review-helper — write balanced, bias-checked performance reviews");
  console.log("\nRestart Claude Code to activate. Happy hiring!\n");
}

main();
