# skills-hr

Claude Code skill suite for HR managers and recruiters. Four skills for the full hiring lifecycle.

```bash
npm install @gonzih/skills-hr
```

Installs four slash commands into Claude Code:

| Skill | What it does |
|---|---|
| `/job-description-writer` | Inclusive, bias-checked JDs — ATS version + LinkedIn version + outreach subject lines |
| `/interview-kit` | Structured interview kit — behavioral questions, scoring rubric, debrief guide |
| `/offer-letter-generator` | Warm, complete offer letters — formal PDF version + email version |
| `/performance-review-helper` | Balanced performance reviews — manager, self-eval, or 360 |

## Quick start

```bash
# Install
npm install @gonzih/skills-hr

# Restart Claude Code, then use:
/job-description-writer Senior Product Manager, fintech, remote, $160-200K
/interview-kit Senior Software Engineer, IC4
/offer-letter-generator Sarah Chen, Engineering Manager, $175K, starts April 14
/performance-review-helper mid-level engineer, exceeded delivery, needs growth in communication
```

## Skills

### `/job-description-writer`

Transforms role requirements into polished, bias-checked job descriptions. Helps hiring managers separate true requirements from inflated wish lists (requirement inflation drives away qualified candidates, especially women and underrepresented groups).

**Outputs**:
- Full ATS job description (500-700 words) with outcomes-focused responsibilities
- LinkedIn/job-board version (250 words)
- 3 outreach subject lines for passive candidate sourcing

**Triggers**: job description, write JD, job posting, job listing, open role, job ad, hiring for

---

### `/interview-kit`

Builds a complete, ready-to-use interview kit. Structured interviewing (same questions, same rubric, every candidate) is the single highest-impact change most hiring teams can make.

**Outputs**:
- Interview plan mapped across rounds
- Behavioral questions (STAR format) with strong/weak indicators and follow-up probes
- Technical/skills scenarios calibrated to seniority level
- Illegal questions reference card
- 1-4 scoring rubric with behavioral anchors
- Debrief facilitation guide

**Triggers**: interview questions, interview kit, interview guide, candidate interview, structured interview, behavioral questions, interview prep

---

### `/offer-letter-generator`

Drafts offer letters that make candidates feel celebrated — while covering every legally necessary element. Reduces back-and-forth with legal.

**Outputs**:
- Formal letter (PDF-ready, letterhead format)
- Email version
- Legal checklist before sending

**Handles**: base salary, bonus structures, RSUs/options with vesting, sign-on bonuses with clawback, benefits highlights, contingencies.

> Always have HR/legal review before sending. Requirements vary by state.

**Triggers**: offer letter, write offer, job offer, compensation offer, employment offer, offer package

---

### `/performance-review-helper`

Transforms raw notes into polished, evidence-based performance reviews. Works for manager → direct report reviews, self-evaluations, and 360 peer feedback.

**Built-in bias check**: flags personality vs. behavior language, double standards, attribution asymmetry, and vague feedback before the review is finalized.

**Outputs**:
- Accomplishments reframed as impact statements
- Strengths narrative with specific behavioral evidence
- Growth areas framed as development, not failure
- Rating justification paragraph
- 2-3 SMART goals for next period

**Triggers**: performance review, write review, employee review, performance feedback, annual review, self review, 360 feedback

---

## How it works

After `npm install`, the postinstall script copies each `SKILL.md` file to `~/.claude/skills/[skill-name]/SKILL.md`. Claude Code loads skills from that directory and makes them available as slash commands.

## License

MIT — Copyright (c) 2026 Maksim Soltan
