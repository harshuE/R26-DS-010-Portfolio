window.CARE = {
  project: {
    id: "R26-DS-010",
    title: "Multimodal Computational Intelligence for Enhancing Caregiver Performance and Care Delivery",
    institution: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    specialization: "Data Science",
    group: "Centre of Excellence for AI",
    github: "https://github.com/dayanakumar-IT/R26-DS-010-Intelligent-Care-Support",
    onedrive: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22057488_my_sliit_lk/IgBBEZGWU-hFRqaZQMJRtAeFATjoF0l09aoPqsNo_5RYvpE?e=4auMJD",
    supervisors: [
      {role:"Supervisor", name:"Prof. Samantha Thelijjagoda", title:"Senior Professor, Computer Systems Engineering · Computing (FOC)", email:"samantha.t@sliit.lk", photo:"supervisor-samantha.jpg"},
      {role:"Co-Supervisor", name:"Mr. Samadhi Rathnayake", title:"Lecturer, Computer Science · Computing (FOC)", email:"samadhi.r@sliit.lk", photo:"supervisor-samadhi.jpg"},
      {role:"External Supervisor", name:"Mr. Velu Sivakumar", title:"Senior Carer (UK)", email:"", photo:"supervisor-velu.jpg"}
    ]
  },
  components: {
    pulse: {
      n: "01", name: "PULSE", accent: "#0c8fa3", icon: "⌁", metric: "0.7211", metricLabel: "test ROC-AUC",
      researcher: "Dayana Priyadharshani Kumar", id: "IT22178640", email: "it22178640@my.sliit.lk", photo: "researcher-dayana.jpg", linkedin: "https://www.linkedin.com/in/dayanakumar",
      title: "AI-Assisted Caregiver Workforce Deterioration Detection and Adaptive Workload Redistribution",
      intro: "Predicts caregiver stress risk from pre-survey wearable, workload, sleep and prior-report data, while testing whether measured proximity to colleagues adds useful signal.",
      problem: "Stress develops through workload, physiology and recovery, yet deployed prediction must use information available before a report. Many systems use same-day features or static personal means and rarely test the added value of relational proximity.",
      gap: "Pre-outcome, participant-separated stress prediction and a direct proximity-centrality ablation are rarely combined. PULSE also replaces a flat personal heart-rate mean with a learned baseline.",
      objective: "Model personalized, causally ordered stress risk and quantify whether wearable proximity adds value beyond physiological and workload features.",
      method: ["TILES-2018: 11,350 rated prompts from 212 caregivers", "Participant split: 140 train · 30 validation · 27 test · 15 demo", "Stage 1 LightGBM heart-rate baseline", "Stage 2 LightGBM on 16 pre-survey features", "SHAP explanations and 2,000 caregiver-level bootstrap resamples"],
      experiments: [
        {name:"Held-Out Participant Test", setup:"27 caregivers and 1,407 prompts; no caregiver overlap with training or validation.", outcome:"ROC-AUC 0.7211 (95% CI 0.6644 to 0.7699); accuracy 0.7930."},
        {name:"Repeated Grouped Cross-Validation", setup:"Five repeats of five participant-grouped folds across 170 training and validation caregivers.", outcome:"Mean ROC-AUC 0.6991 +/- 0.0294; accuracy 0.7489 +/- 0.0387."},
        {name:"Lag-1 Baseline Comparison", setup:"Previous stress response alone compared with the full pre-survey feature model.", outcome:"Lag-1 ROC-AUC 0.7026 versus 0.7273; gain +0.0247 with CI reaching zero."},
        {name:"Proximity Centrality Ablation", setup:"Random Forest, XGBoost and LightGBM tested with and without proximity features.", outcome:"All change confidence intervals included zero; no detectable proximity benefit."}
      ],
      result: "Test ROC-AUC 0.7211 (95% CI 0.6644–0.7699); repeated participant-grouped CV 0.6991 ± 0.0294. Lag-1 stress contributed most of the signal. Proximity centrality showed no detectable benefit.",
      limits: "One cohort only; the wearable-feature gain over lag-1 stress is small; centrality was sparse; external generalization remains untested.",
      future: "Evaluate larger and independent caregiver cohorts, strengthen causal temporal features, and validate fair redistribution recommendations before deployment.",
      tech: ["LightGBM", "SHAP", "TILES-2018", "Grouped CV", "Bootstrap CIs"]
    },
    sentry: {
      n: "02", name: "SENTRY", accent: "#0f9483", icon: "◇", metric: "97.12%", metricLabel: "unseen-subject accuracy",
      researcher: "Harishalinee Elangovan", id: "IT22057488", email: "it22057488@my.sliit.lk", photo: "researcher-harishalinee.jpg", linkedin: "https://www.linkedin.com/in/harishalinee-elangovan-a45677215",
      title: "Edge-Enabled Skeletal Movement Analysis System for Real-Time Patient Observable Fall Risk Detection and Prediction",
      intro: "Detects fall risk from an ordinary RGB webcam by fusing learned skeletal motion with explicit biomechanical features on a CPU-capable edge pipeline.",
      problem: "Binary post-event fall alarms provide little warning, while lab-trained skeleton systems can fail when the camera, room or pose-extraction pipeline changes.",
      gap: "Cross-dataset loss and site-specific recovery are often not reported. SENTRY explicitly measures domain shift between Kinect-derived and MediaPipe-derived skeletons.",
      objective: "Detect fall risk at the edge under subject-disjoint and cross-dataset evaluation while preserving privacy through skeleton-only analysis.",
      method: ["NTU RGB+D and UR Fall Detection; 578 labelled clips", "14-joint, hip-centred skeletons in 90-frame windows", "ST-GCN: 32/64/128 channels + 18 biomechanical features", "146-input late-fusion MLP", "Webcam adaptation: 35 clips; second-subject test: 58 clips"],
      experiments: [
        {name:"Subject-Disjoint Evaluation", setup:"312 test windows from unseen subjects; late fusion of ST-GCN and biomechanical features.", outcome:"97.12% accuracy, 92.31% sensitivity, 1.28% false-alarm rate and ROC-AUC 0.9836."},
        {name:"Random Clip Split", setup:"80/10/10 clip-level split allowing subject overlap as an upper-bound comparison.", outcome:"98.27% accuracy and 0.70% false-alarm rate."},
        {name:"Branch Ablation", setup:"Random Forest biomechanical branch and ST-GCN branch evaluated separately.", outcome:"RF accuracy 94.56%; ST-GCN accuracy 96.02%; fusion accuracy 97.12%."},
        {name:"Cross-Dataset Transfer", setup:"Model trained on NTU RGB+D and tested on UR Fall Detection.", outcome:"ROC-AUC dropped to 0.410, exposing severe domain shift."},
        {name:"Webcam Adaptation", setup:"35 clips from one person for fine-tuning; 58 clips from a second person for testing.", outcome:"Macro-F1 0.8851, accuracy 91.38%, sensitivity 80.00%, false-alarm rate 4.65%."},
        {name:"CPU Latency", setup:"90-frame inference window on AMD Ryzen 7 8845HS CPU.", outcome:"4.515 ms per window, or 221.5 windows per second."}
      ],
      result: "Subject-disjoint accuracy 97.12%, sensitivity 92.31%, false-alarm rate 1.28%, ROC-AUC 0.9836. Cross-dataset ROC-AUC fell to 0.410; webcam adaptation recovered macro-F1 0.8851.",
      limits: "The webcam evaluation used one test subject and one setup; sensitivity there was 80%. Performance cannot be assumed across new cameras, rooms or patient populations.",
      future: "Collect multi-site webcam data, expand patient diversity and camera conditions, and validate prospective warning thresholds in real care settings.",
      tech: ["MediaPipe Pose", "ST-GCN", "PyTorch", "Biomechanics", "Edge CPU"]
    },
    scribe: {
      n: "03", name: "SCRIBE", accent: "#6c54d6", icon: "≋", metric: "15.57%", metricLabel: "word error rate",
      researcher: "Vidursha Prabagaran", id: "IT22294098", email: "it22294098@my.sliit.lk", photo: "researcher-vidursha.jpg", linkedin: "http://www.linkedin.com/in/vidursha21",
      title: "Context-Aware Intelligent System for Automated ADL Extraction and Real-Time Documentation from Caregiver Voice Logs",
      intro: "Transforms free caregiver narration into structured Activities of Daily Living records and safety alerts, with models selected for safety-critical recall as well as transcription quality.",
      problem: "Manual documentation consumes care time. Transcription alone does not create structured ADL fields, resolve disfluencies, or reliably surface safety alerts.",
      gap: "Existing nursing ASR often stops at plain text or uses larger systems without explicit safety-alert evaluation for Indian-accented caregiver speech.",
      objective: "Build a GPU-conscious pipeline for natural caregiver narration, structured ADL extraction, and independently tested safety alerts.",
      method: ["Svarah: 6,653 train · 739 validation · 666 test utterances", "Whisper-small with LoRA adaptation", "BART-base disfluency cleanup", "T5-small structured extraction and alerts", "Independent 200-case safety set"],
      experiments: [
        {name:"Zero-Shot ASR Baseline", setup:"Whisper-small evaluated on 666 test utterances before adaptation.", outcome:"WER 26.13% and CER 12.85%."},
        {name:"Training-Data Ablation", setup:"LoRA rank 8 trained with 10%, 25%, 50% and 100% of available data.", outcome:"WER improved from 19.51% at 10% data to 15.57% at 100%."},
        {name:"LoRA Rank Ablation", setup:"Ranks 4, 8, 16 and 32 compared on the complete training data.", outcome:"Rank 32 reached 14.86% WER; rank 16 was selected for efficiency and retrained to 15.57%."},
        {name:"Disfluency Model Comparison", setup:"T5-small and BART-base compared using BLEU, ROUGE-L and safety-critical qualitative behavior.", outcome:"T5 scored slightly higher overall; BART was retained because it handled a corrected medication dose better."},
        {name:"Independent Safety Test", setup:"200 cases: 150 alert-positive and 50 alert-negative records.", outcome:"Alert recall 82.00%, precision 96.09%, F1 88.49% and accuracy 84.00%."}
      ],
      result: "Final ASR WER 15.57% and CER 5.32%, a 40.4% relative WER reduction from zero-shot. On the independent safety set, alert recall was 82.00%, precision 96.09%, and F1 88.49%.",
      limits: "ASR splitting was by utterance, not speaker. Most ADL records are synthetic expansions from one facility. Symptom alerts were hardest and some safety categories were absent.",
      future: "Evaluate unseen speakers and real caregiver narratives, expand symptom coverage, and independently validate the complete reporting workflow.",
      tech: ["Whisper-small", "LoRA", "BART-base", "T5-small", "Structured ADL"]
    },
    gloss: {
      n: "04", name: "GLOSS", accent: "#c96a2e", icon: "✦", metric: "0.75", metricLabel: "test macro-F1",
      researcher: "Kaushalya Nagenthraraja", id: "IT22289384", email: "it22289384@my.sliit.lk", photo: "researcher-kaushalya.jpg", linkedin: "https://www.linkedin.com/in/kaushalya-nagenthraraja",
      title: "Personalized Sign Language Tutoring System for Caregivers",
      intro: "Recognizes caregiver-relevant signs and compares a learner’s movement with a reference to deliver speed-tolerant, landmark-level corrective feedback.",
      problem: "Recognition-only systems return a label but rarely explain which body or hand movement needs correction, limiting their value as tutors.",
      gap: "Useful tutoring needs execution assessment after recognition, localized feedback, and evidence that natural-language rephrasing preserves the underlying rule-based correction.",
      objective: "Evaluate signing execution quality with speed-tolerant landmark comparison and adapt feedback to the learner’s errors.",
      method: ["WLASL + ASL Citizen; 59-class evaluated vocabulary", "49 MediaPipe Holistic landmarks", "BiLSTM, SPOTER-style and TCN comparison", "Dynamic Time Warping after sign recognition", "Rule-based feedback with LLM phrasing check"],
      experiments: [
        {name:"Recognition Evaluation", setup:"TCN evaluated on 355 test samples across a 59-class vocabulary.", outcome:"Macro-F1 0.75, accuracy 0.76, macro-precision 0.77 and macro-recall 0.75."},
        {name:"Repeated TCN Training", setup:"Four independent runs used to avoid reporting only the best model.", outcome:"Mean macro-F1 0.735 +/- 0.044."},
        {name:"Architecture Comparison", setup:"SPOTER-style transformer and TCN compared under the same augmented kinematic configuration.", outcome:"Single-run test macro-F1: SPOTER 0.74 versus TCN 0.66; no accuracy advantage was claimed for TCN."},
        {name:"DTW Separation Test", setup:"295 intra-class and 59 inter-class comparisons on the deployed raw distance scale.", outcome:"69.49% of wrong-class comparisons still fell inside the expected correct-sign range, so recognition must precede DTW scoring."},
        {name:"Speed Tolerance", setup:"15 recordings stretched or compressed from 0.7x to 1.3x duration.", outcome:"Normalized distance swing 0.337, showing gradual rather than abrupt tempo penalties."},
        {name:"Feedback Faithfulness", setup:"59 LLM-rephrased feedback outputs tested across strong, moderate and weak quality tiers.", outcome:"91.5% passed automatically; manual review found the five flags were keyword-matching false alarms."}
      ],
      result: "TCN test macro-F1 0.75 (n=355); four-run mean 0.735 ± 0.044. DTW changes gradually across 0.7×–1.3× speed. 91.5% of 59 rephrased outputs passed the automated faithfulness check.",
      limits: "Signer identity was not controlled across splits; DTW thresholds use few samples; feedback review was internal; improvement in real learner performance has not been measured.",
      future: "Run signer-independent evaluation, seek expert review, calibrate per-class thresholds on larger samples, and conduct a learner-effectiveness study.",
      tech: ["MediaPipe Holistic", "TCN", "SPOTER", "DTW", "Landmark feedback"]
    }
  },
  documents: [
    {title:"Revised Research Paper", type:"paper", stage:"Evaluation", file:"Multimodal-AI-Framework-Revised.pdf", status:"available", note:"Primary source for literature, implemented methods, results and limitations."},
    {title:"Topic Assessment Form V2", type:"assessment", stage:"Topic assessment", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQDXTuMcoEJFRrI3XU7puD0mAdxz7hWQX9kEbwQfJlz8ZZo?e=s0U6ai", note:"Historical framing and proposed architecture — superseded by the revised research paper."},
    {title:"Project Charter", type:"charter", stage:"Initiation", file:"Project-Charter-R26-DS-010.pdf", status:"available", note:"Submitted 23 February 2026; scan retained as supplied."},
    {title:"Proposal Presentation", type:"presentation", stage:"Proposal", status:"source-only", link:"https://mysliit-my.sharepoint.com/:p:/g/personal/it22057488_my_sliit_lk/IQBHJY25sDZoQZbAgN_O1xgOATuEMge7_Id9akmdEhRxZog?e=IaGsqL", note:"Proposal-stage slides dated 15 March 2026."},
    {title:"PP1 Presentation", type:"presentation", stage:"Progress 1", status:"source-only", link:"https://mysliit-my.sharepoint.com/:p:/g/personal/it22057488_my_sliit_lk/IQCT_VJyxEffQZNVxnSLSHEfAewymywKM4PBkugfnMRsnB4?e=AmwUag", note:"Progress Presentation 1 slide deck — superseded by the finalized PP2 deck."},
    {title:"PP2 Presentation", type:"presentation", stage:"Progress 2", file:"../presentations-assets/R26-DS-010-PP2-Presentation.pdf", status:"available", note:"Finalized presentation slides and authoritative source for component titles; supplied as a package-optimized PDF."},
    {title:"Final Presentation", type:"presentation", stage:"Final", status:"missing", note:"Scheduled for the final research project presentation on 21 October 2026; not yet produced."},
    {title:"Common Thesis Report", type:"thesis", stage:"Final", status:"missing", note:"The combined CareSense thesis PDF has not yet been added to the workspace."},
    {title:"PULSE — Individual Thesis Draft", type:"thesis", component:"pulse", stage:"Final thesis", file:"theses/IT22178640-PULSE-Thesis-Draft.pdf", status:"available", note:"Dayana Priyadharshani Kumar · IT22178640 · 114-page October 2026 draft."},
    {title:"PULSE — Individual Proposal", type:"proposal", component:"pulse", stage:"Proposal", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQChSJr4tE8DQ5lpBHtAXWOyAXUq8vfe3srAb__4dkF24nw?e=ztt2wz", note:"Dayana's individual proposal document"},
    {title:"PULSE — Data Analysis Report", type:"report", component:"pulse", stage:"Analysis", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQBX1WwQTCTSQI2qSQUS5uw6ARH96ajJ9dQgLBpEYXJ6ELE?e=Q9lWkh", note:"Dayana's Checklist 2 data-analysis report"},
    {title:"PULSE — Literature Master Sheet", type:"literature", component:"pulse", stage:"Literature survey", file:"supporting/pulse/IT22178640-Literature-Master-Sheet.xlsx", status:"available", note:"Dayana's Checklist 1 literature-review spreadsheet."},
    {title:"SENTRY — Individual Thesis Draft", type:"thesis", component:"sentry", stage:"Final thesis", file:"theses/IT22057488-SENTRY-Thesis-Draft.pdf", status:"available", note:"Harishalinee Elangovan · IT22057488 · 92-page October 2026 draft."},
    {title:"SENTRY — Individual Proposal", type:"proposal", component:"sentry", stage:"Proposal", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQBzsCPpkBXiQaEHg04AZVxwAXYzgjPQIdTYPI27nYjHn2k?e=uDl703", note:"Harishalinee's individual proposal document"},
    {title:"SENTRY — Data Analysis Report", type:"report", component:"sentry", stage:"Analysis", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQCJhMflTOvqRLlYOQrEhAevASc3QWRPQlJ6gfaXSM290k8?e=yl70jZ", note:"Harishalinee's Checklist 2 data-analysis report"},
    {title:"SENTRY — Literature Master Sheet", type:"literature", component:"sentry", stage:"Literature survey", file:"supporting/sentry/IT22057488-Literature-Master-Sheet.xlsx", status:"available", note:"Harishalinee's Checklist 1 literature-review spreadsheet."},
    {title:"SCRIBE — Individual Thesis Draft", type:"thesis", component:"scribe", stage:"Final thesis", file:"theses/IT22294098-SCRIBE-Thesis-Draft.pdf", status:"available", note:"Vithursha Prabagaran · IT22294098 · 82-page October 2026 draft."},
    {title:"SCRIBE — Individual Proposal", type:"proposal", component:"scribe", stage:"Proposal", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQBFu7rIKSUAR4SZf19_l5_-AaTbrE0hmp7oiMH6VLD50c8?e=13xQX5", note:"Vithursha's individual proposal document"},
    {title:"SCRIBE — Data Analysis Report", type:"report", component:"scribe", stage:"Analysis", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQAC_Pieu2NAR5r_Afe4Crv8AbgWhX1DchWEiRJD7u5fD2c?e=ctPzup", note:"Vithursha's Checklist 2 data-analysis report"},
    {title:"SCRIBE — Literature Master Sheet", type:"literature", component:"scribe", stage:"Literature survey", file:"supporting/scribe/IT22294098-Literature-Master-Sheet.xlsx", status:"available", note:"Vithursha's Checklist 1 literature-review spreadsheet."},
    {title:"GLOSS — Individual Thesis Draft", type:"thesis", component:"gloss", stage:"Final thesis", file:"theses/IT22289384-GLOSS-Thesis-Draft.pdf", status:"available", note:"Kaushalya Nagenthraraja · IT22289384 · 96-page October 2026 draft."}
    ,{title:"GLOSS — Individual Proposal", type:"proposal", component:"gloss", stage:"Proposal", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQB0c0e9lTxDR7aGGcMV3f75AbLts6SEIOzl8XosmnaIXRY?e=Lm8A3i", note:"Kaushalya's individual proposal document"}
    ,{title:"GLOSS — Data Analysis Report", type:"report", component:"gloss", stage:"Analysis", status:"source-only", link:"https://mysliit-my.sharepoint.com/:b:/g/personal/it22057488_my_sliit_lk/IQDJQkCGMWiXRr0K_bCHZGZYAYx30QlJN_wJxpMOurvGDjM?e=Lbxf6z", note:"Kaushalya's Checklist 2 data-analysis report"}
    ,{title:"GLOSS — Literature Master Sheet", type:"literature", component:"gloss", stage:"Literature survey", file:"supporting/gloss/IT22289384-Literature-Master-Sheet.xlsx", status:"available", note:"Kaushalya's Checklist 1 literature-review spreadsheet."}
  ],
  milestones: [
    {id:"proposal", date:"15 Mar 2026", title:"Project Proposal", detail:"Initial problem framing, four research components and proposed solution architecture.", evidence:"Proposal Presentation", state:"complete"},
    {id:"pp1", date:"12 May 2026", title:"Progress Presentation 1", detail:"Draft evidence of component progress and responses to proposal feedback.", evidence:"PP1 draft deck", state:"complete"},
    {id:"pp2", date:"01 Sep 2026", title:"Progress Presentation 2", detail:"Finalized component identities, architecture, integration status and measured evaluation evidence.", evidence:"Finalized PP2 deck", state:"complete"},
    {id:"paper", date:"01 Sep 2026", title:"Revised Research Paper", detail:"Consolidated methodology, held-out evaluation, negative findings and limitations for all modules.", evidence:"8-page revised paper", state:"complete"},
    {id:"final", date:"21 Oct 2026", title:"Final Assessment", detail:"Final research project presentation and website viva, conducted on the same day.", evidence:"Scheduled; mark allocation not yet supplied", state:"pending"},
    {id:"viva", date:"21 Oct 2026", title:"Viva", detail:"Final project viva scheduled for 21 October 2026, on the same day as the final assessment.", evidence:"Scheduled alongside the final assessment; mark allocation not yet supplied", state:"pending"}
  ],
  gallery: [
    {src:"blurred-care-facility.jpg", title:"Care-facility context", caption:"Privacy-preserving field image with resident faces blurred."},
    {src:"blurred-ward-room.jpg", title:"Care-facility ward (blurred)", caption:"A second care-facility ward, with resident faces blurred for privacy."},
    {src:"field-visit-team.jpg", title:"Research field visit", caption:"CareSense researchers during an institutional visit; publication consent should be reconfirmed."},
    {src:"supervisor-meeting.jpg", title:"Supervisor progress review", caption:"The research team meeting with the academic supervision panel to review progress."},
    {src:"supervisor-team.jpg", title:"Team and academic guidance", caption:"Research group photograph with an academic representative; identities beyond the named team require confirmation."},
    {src:"site-visit-discussion.jpg", title:"Care-site field discussion", caption:"A researcher discussing ward layout and equipment with facility staff during a site visit; publication consent should be reconfirmed."},
    {src:"team-briefing-session.jpg", title:"Site visit briefing", caption:"Researchers reviewing documentation with facility staff beside a simulation bed; publication consent should be reconfirmed."},
    {src:"simulation-lab.jpg", title:"Simulation environment", caption:"Clinical simulation beds used during a research visit; no patient is pictured."},
    {src:"clinical-simulation-ward.jpg", title:"Clinical simulation ward", caption:"A wider view of the clinical training environment, including simulation beds, mannequins and emergency-transfer equipment; no patient is pictured."},
    {src:"journal-submission-session.jpg", title:"Journal paper writing session", caption:"The research team and supervisor reviewing the journal submission process for the revised paper."},
    {src:"site-visit-briefing-2.jpg", title:"Site visit briefing (continued)", caption:"A further moment from the same facility site-visit briefing; publication consent should be reconfirmed."}
  ]
};
