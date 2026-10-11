# CareSense Content Audit

## Source priority applied

| Website content | Primary source used | Notes |
|---|---|---|
| Required navigation and section list | User-supplied implementation brief | `Website.pdf` was not present; this is the explicit fallback. |
| Component names and assignments | `R26-DS-010-PP2-Presentation- finalized.pptx` | Finalized PP2, 16 slides. |
| Literature survey | Revised research paper | Eight-page paper is the primary academic source. |
| Research gaps and problem | Revised research paper | Proposal and TAF used only as historical context. |
| Objectives | Finalized PP2 plus revised paper | Component objectives align with implemented evaluation. |
| Methodology, results, limitations | Revised research paper | Exact conditions and negative findings retained. |
| Milestone history | Proposal PDF, PP1 draft, PP2 finalized deck | Only exact dates visible in supplied sources are stated. |
| Team and supervision | Finalized PP2 and revised paper | Emails are taken from the paper. |

## Major claim ledger

| Claim | Support | Qualification shown on site |
|---|---|---|
| PULSE ROC-AUC 0.7211 | Revised paper, abstract/Table I | 27 held-out caregivers; 95% CI 0.6644–0.7699. |
| SENTRY accuracy 97.12% | Revised paper, Table III | Subject-disjoint; 1.28% false-alarm rate; cross-dataset ROC-AUC fell to 0.410. |
| SCRIBE WER 15.57% | Revised paper, Table IV | Utterance split may include the same speakers across partitions. |
| SCRIBE alert recall 82.00% | Revised paper, Table V | Independent 200-case safety set. |
| GLOSS macro-F1 0.75 | Revised paper, Table VI | n=355; signer identity was not controlled. |
| Integrated architecture | Finalized PP2 slides 7–8 | No end-to-end evaluation claim is made. |

## Proposed versus implemented

- TAF and proposal diagrams are historical/proposed evidence.
- The revised paper records implemented pipelines and evaluated outcomes.
- Website-native pipeline diagrams are labelled explanatory reconstructions.
- The shared interface is presented as an architectural integration, not a clinically validated combined product.

## Known verification limits

- The project charter is an image-based scan and did not yield machine-readable text in the available extraction pass.
- No `Website.pdf` was found.
- PP1 is explicitly a draft deck.
- Assessment marks and final/viva dates were not supplied.
