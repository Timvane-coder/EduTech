

reproductiveSystem: {
    title: "Human Reproductive System: Anatomy, Physiology, and Hormonal Control",

    databaseLinks: {
        misconceptions: [
            'reproductiveAnatomy',
            'gametogenesis',
            'hormonalControl',
            'fertilisationAndImplantation',
            'menstrualCycle'
        ],
        contextualScenarios: [
            'reproductiveAnatomy',
            'gametogenesis',
            'hormonalControl',
            'fertilisationAndImplantation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'reproductiveAnatomy',
            'gametogenesis',
            'hormonalControl',
            'fertilisationAndImplantation'
        ]
    },

    conceptLinks: {
        "The reproductive system produces gametes and supports fertilisation": {
            misconceptions:      ['reproductiveAnatomy', 'gametogenesis'],
            scenarios:           ['reproductiveAnatomy'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['reproductiveAnatomy']
        },
        "Gametogenesis produces haploid gametes via meiosis": {
            misconceptions:      ['gametogenesis'],
            scenarios:           ['gametogenesis'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['gametogenesis']
        },
        "Hormonal control coordinates the menstrual cycle and spermatogenesis": {
            misconceptions:      ['hormonalControl', 'menstrualCycle'],
            scenarios:           ['hormonalControl'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['hormonalControl']
        },
        "Fertilisation restores the diploid number and triggers development": {
            misconceptions:      ['fertilisationAndImplantation'],
            scenarios:           ['fertilisationAndImplantation'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['fertilisationAndImplantation']
        },
        "The menstrual cycle is driven by coordinated hormonal feedback loops": {
            misconceptions:      ['menstrualCycle', 'hormonalControl'],
            scenarios:           ['hormonalControl'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['hormonalControl']
        }
    },

    // ── Layer 2: Topic Framing ────────────────────────────────────────────────

    topicIntroduction: {
        overview: "The human reproductive system is among the most hormonally coordinated systems in biology. It integrates anatomy, cell division, endocrinology, and developmental biology to produce, transport, and unite gametes — ultimately enabling the continuation of the species. In this lesson, we explore the structure and function of male and female reproductive anatomy, the cellular process of gametogenesis, the hormonal architecture of the menstrual cycle and spermatogenesis, and the events of fertilisation and early implantation.",
        whyItMatters: "Understanding reproductive physiology underpins contraceptive technology, infertility treatment, prenatal medicine, and endocrinology. From IVF to hormonal contraceptives to the biology of puberty and menopause, every clinical application depends on understanding how gametes are made, how hormones coordinate reproduction, and how fertilisation initiates development.",
        bigPicture: "Reproduction requires that two haploid gametes — each carrying half the genetic information of a parent — fuse to restore the diploid number in a genetically unique zygote. Achieving this requires exquisitely timed hormonal signals, anatomical structures for gamete production and delivery, and molecular machinery for fertilisation and implantation. The hypothalamic-pituitary-gonadal (HPG) axis is the master regulatory system coordinating all of these events.",
        priorKnowledge: [
            "Cell division: mitosis and meiosis — especially meiosis I and II, crossing over, and independent assortment",
            "Basic endocrinology: hormones, receptors, negative and positive feedback",
            "Cell biology: cell cycle, differentiation, stem cells",
            "Basic anatomy: organ systems and body cavities",
            "Genetics: diploid vs haploid, chromosomes, alleles"
        ],
        topicRoadmap: [
            "Male reproductive anatomy: testes, epididymis, vas deferens, accessory glands, penis",
            "Female reproductive anatomy: ovaries, uterine tubes, uterus, vagina, external genitalia",
            "Spermatogenesis: stages from spermatogonia to mature spermatozoa",
            "Oogenesis: stages from oogonia to secondary oocyte, arrested stages and completion",
            "The menstrual cycle: follicular phase, ovulation, luteal phase — hormonal control",
            "Fertilisation: capacitation, acrosome reaction, cortical reaction, pronuclei formation",
            "Implantation and early pregnancy: blastocyst, decidua, hCG and corpus luteum maintenance",
            "Clinical applications: contraception, infertility, IVF, hormonal disorders"
        ]
    },

    // ── Layer 3: Core Lesson Content ─────────────────────────────────────────

    concepts: [
        "The reproductive system produces gametes and supports fertilisation",
        "Gametogenesis produces haploid gametes via meiosis",
        "Hormonal control coordinates the menstrual cycle and spermatogenesis",
        "Fertilisation restores the diploid number and triggers development",
        "The menstrual cycle is driven by coordinated hormonal feedback loops",
        "Implantation requires molecular dialogue between embryo and endometrium"
    ],

    theory: "Human reproduction depends on the coordinated production of haploid gametes through meiosis, their union at fertilisation, and the implantation of the resulting embryo. All of these processes are orchestrated by the hypothalamic-pituitary-gonadal axis through cascading hormonal signals involving GnRH, FSH, LH, oestrogen, progesterone, and testosterone.",

    keyDefinitions: {
        "Gamete":               "Haploid reproductive cell (sperm or oocyte) produced by meiosis",
        "Gametogenesis":        "The process of forming mature gametes from diploid precursor cells",
        "Spermatogenesis":      "Production of spermatozoa in the seminiferous tubules of the testes",
        "Oogenesis":            "Production of oocytes in the ovarian follicles",
        "Meiosis":              "Two successive cell divisions producing four haploid cells from one diploid cell",
        "Follicle":             "Ovarian structure containing the developing oocyte surrounded by granulosa cells",
        "Corpus Luteum":        "Post-ovulatory structure secreting progesterone to maintain the uterine lining",
        "Ovulation":            "Release of a secondary oocyte from a mature (Graafian) follicle",
        "Fertilisation":        "Fusion of sperm and oocyte nuclei to restore the diploid zygote",
        "Implantation":         "Embedding of the blastocyst into the endometrium (~6–10 days post-fertilisation)",
        "HPG Axis":             "Hypothalamic-Pituitary-Gonadal axis — master regulator of reproductive hormones",
        "GnRH":                 "Gonadotropin-releasing hormone — pulsatile hypothalamic signal driving FSH and LH release",
        "FSH":                  "Follicle-stimulating hormone — stimulates follicle development and spermatogenesis",
        "LH":                   "Luteinising hormone — triggers ovulation and luteinises the follicle",
        "Acrosome Reaction":    "Exocytosis of acrosomal enzymes enabling sperm penetration of the zona pellucida",
        "Cortical Reaction":    "Release of cortical granules after fertilisation — prevents polyspermy",
        "Capacitation":         "Physiological maturation of sperm in the female reproductive tract enabling fertilisation",
        "Zona Pellucida":       "Glycoprotein coat surrounding the oocyte; site of sperm-egg recognition",
        "Blastocyst":           "Pre-implantation embryo with inner cell mass and outer trophoblast layer",
        "hCG":                  "Human chorionic gonadotropin — embryonic signal maintaining the corpus luteum in early pregnancy"
    },

    maleReproductiveAnatomy: {
        testes: {
            location:    "Suspended in the scrotum — 2–3°C below core body temperature (required for spermatogenesis)",
            function:    "Spermatogenesis (seminiferous tubules) and testosterone production (Leydig cells)",
            structure: {
                seminiferousTubules: "Coiled tubules where spermatogenesis occurs; contain Sertoli cells and developing sperm",
                leydigCells:         "Interstitial cells producing testosterone under LH stimulation",
                sertoliCells:        "Nurse cells supporting developing sperm; produce inhibin and androgen-binding protein",
                bloodTestisBarrier:  "Tight junctions between Sertoli cells — protect developing sperm from immune attack"
            }
        },
        ductalSystem: {
            epididymis:  "Site of sperm maturation and storage (20 days transit); sperm gain motility here",
            vasDeferens: "Muscular duct transporting sperm from epididymis to ejaculatory duct during ejaculation",
            ejaculatoryDuct: "Short duct formed by union of vas deferens and seminal vesicle duct; opens into urethra",
            urethra:     "Common passage for urine and semen (not simultaneously)"
        },
        accessoryGlands: {
            seminalVesicles: "Produce ~60% of semen volume — fructose (energy for sperm), prostaglandins, fibrinogen",
            prostateGland:   "Produces alkaline fluid (~30% semen) neutralising vaginal acidity; contains PSA",
            bulbourethralGlands: "Cowper's glands — produce pre-ejaculatory fluid to neutralise urethral acidity"
        },
        semen: {
            composition: "Sperm (~5%) + seminal vesicle fluid (~60%) + prostate fluid (~30%) + bulbourethral secretions",
            volume:       "2–5 mL per ejaculate",
            spermCount:   "~15–200 million sperm/mL (WHO normal lower limit: 16 million/mL)"
        }
    },

    femaleReproductiveAnatomy: {
        ovaries: {
            function:    "Oogenesis and production of oestrogen and progesterone",
            location:    "Lateral walls of pelvic cavity, one on each side of the uterus",
            structure: {
                cortex:      "Outer layer containing follicles at all stages of development",
                medulla:     "Inner region with blood vessels and connective tissue",
                follicles:   "Primordial, primary, secondary, antral (Graafian) — each contains one developing oocyte"
            }
        },
        uterineTubes: {
            function:    "Transport oocyte from ovary to uterus; site of fertilisation (ampulla)",
            regions:     "Fimbriae (sweeps oocyte in) → Infundibulum → Ampulla (fertilisation) → Isthmus → Uterus",
            transport:   "Ciliary action and peristalsis; transit time ~3–5 days"
        },
        uterus: {
            layers: {
                perimetrium: "Outer serosal layer",
                myometrium:  "Thick smooth muscle layer — generates contractions during labour",
                endometrium: "Inner glandular lining; cycles with hormones; site of implantation"
            },
            cervix: "Lower, narrow portion of uterus — produces mucus that changes in consistency through the cycle"
        },
        vagina: {
            function:  "Receives penis during intercourse; birth canal; exit for menstrual flow",
            pH:        "Acidic (~3.8–4.5) due to lactobacilli — hostile to pathogens but also to sperm (neutralised by semen)"
        },
        externalGenitalia: {
            vulva:        "Collective term for external female genitalia",
            labiaMajora:  "Outer fatty folds — protect internal structures",
            labiaMinora:  "Inner folds flanking vaginal opening",
            clitoris:     "Erectile tissue — highly innervated; homologous to the glans penis",
            vestibule:    "Space between labia minora containing vaginal and urethral openings"
        }
    },

    gametogenesis: {
        spermatogenesis: {
            location:  "Seminiferous tubules of the testes",
            duration:  "~74 days from spermatogonium to mature spermatozoon",
            stages: {
                spermatogonium:    "Diploid (2n) stem cell at basement membrane — mitotic division maintains the stem cell pool",
                primarySpermatocyte: "Diploid (2n) — undergoes Meiosis I",
                secondarySpermatocyte: "Haploid (n) — undergoes Meiosis II rapidly",
                spermatid:         "Haploid (n) — undergoes spermiogenesis (morphological transformation)",
                spermatozoon:      "Mature haploid sperm with head (acrosome + nucleus), midpiece (mitochondria), tail (flagellum)"
            },
            spermiogenesis: "Transformation of round spermatid → mature spermatozoon: nuclear condensation, acrosome formation, flagellum development, loss of cytoplasm",
            yield:         "One spermatogonium → four spermatozoa (all equal in size)",
            continuity:    "Continuous throughout male reproductive life from puberty"
        },
        oogenesis: {
            location:  "Ovarian follicles",
            duration:  "Begins in foetal life; completed at fertilisation",
            stages: {
                oogonium:            "Diploid (2n) precursor — divides mitotically in foetal ovary; completed before birth",
                primaryOocyte:       "Diploid (2n) — arrested in Prophase I from foetal life until puberty (may persist 12–50 years)",
                secondaryOocyte:     "Haploid (n) — formed at ovulation after completion of Meiosis I; arrested at Metaphase II",
                matureOocyte:        "Haploid (n) — Meiosis II completed only if fertilisation occurs"
            },
            firstPolarBody:  "Small non-functional cell produced at Meiosis I; may divide (2 polar bodies from Meiosis II)",
            secondPolarBody: "Small non-functional cell produced at Meiosis II upon fertilisation",
            asymmetry:       "Unequal cytokinesis — one large oocyte + polar bodies (maximises cytoplasm for development)",
            yield:           "One oogonium → one functional oocyte + up to three polar bodies",
            arrest:          "Primary oocyte arrest (Prophase I): dictytene stage, maintained by oocyte maturation inhibitor (OMI)"
        },
        comparison: {
            "Product yield":        { male: "4 functional sperm per spermatocyte", female: "1 oocyte + up to 3 polar bodies" },
            "Timing":               { male: "Continuous from puberty", female: "Arrested stages; begins in foetal life" },
            "Cell size":            { male: "Small, motile spermatozoa", female: "Large oocyte (largest human cell ~120 μm)" },
            "Arrest points":        { male: "None — continuous process", female: "Two arrest points: Prophase I and Metaphase II" },
            "Cytokinesis":          { male: "Equal", female: "Unequal (maximises cytoplasm in oocyte)" }
        }
    },

    menstrualCycle: {
        overview: "A ~28-day cycle (range 21–35 days) coordinated by the HPG axis, simultaneously cycling the ovary (follicular and luteal phases) and uterus (proliferative and secretory phases).",
        phases: {
            follicularPhase: {
                days:     "1–13 (variable length)",
                ovarianEvents: "FSH stimulates growth of 5–20 primary follicles; dominant follicle selected by day 7; granulosa cells produce oestrogen",
                uterineEvents: "Endometrium regenerates and proliferates under oestrogen influence (proliferative phase)",
                hormones:  "FSH rising → oestrogen rising → LH and FSH suppressed by negative feedback → oestrogen surges near day 13"
            },
            ovulation: {
                day:       "~Day 14 (triggered by LH surge)",
                trigger:   "Positive feedback: high oestrogen (>200 pg/mL for >36 hours) switches to positive feedback → LH surge",
                event:     "Dominant follicle ruptures; secondary oocyte (arrested at Metaphase II) released into peritoneal cavity",
                signs:     "Mittelschmerz (mid-cycle pain), cervical mucus becomes clear and stretchy (Spinnbarkeit), basal body temperature rise"
            },
            lutealPhase: {
                days:      "15–28 (fixed ~14 days)",
                ovarianEvents: "Ruptured follicle luteinises → corpus luteum; secretes progesterone and oestrogen",
                uterineEvents: "Endometrium becomes secretory (glandular, vascularised) under progesterone (secretory phase)",
                ifNoFertilisation: "Corpus luteum degenerates (~day 23–24) → progesterone falls → endometrium sheds (menstruation)",
                ifFertilisation:   "hCG from trophoblast maintains corpus luteum → progesterone sustained → no menstruation"
            },
            menstruation: {
                days:      "1–5",
                cause:     "Progesterone withdrawal → spiral arteries constrict → endometrial ischaemia → shedding",
                volume:    "~30–80 mL blood loss"
            }
        },
        hormonalSummary: {
            FSH:         "Peaks early follicular phase; stimulates follicle development and oestrogen production",
            LH:          "Mid-cycle surge triggers ovulation; low in follicular and luteal phases",
            oestrogen:   "Rises through follicular phase; peaks just before LH surge; second smaller peak mid-luteal",
            progesterone:"Low in follicular phase; rises sharply after ovulation; peaks mid-luteal (~day 21)"
        }
    },

    hormonalControl: {
        HPGAxis: {
            hypothalamus: "Secretes GnRH in pulses (every 60–120 min) → anterior pituitary",
            anteriorPituitary: "Releases FSH and LH in response to GnRH",
            gonads:        "Produce sex steroids (oestrogen, progesterone, testosterone) and inhibin in response to FSH/LH",
            feedbackLoops: {
                negativeFeedback: "Sex steroids and inhibin suppress GnRH, FSH, and LH — prevents overproduction",
                positiveFeedback: "High sustained oestrogen (>200 pg/mL, >36h) triggers massive LH surge — triggers ovulation"
            }
        },
        maleSpermatogenesis: {
            GnRH_LH_pathway: "GnRH → LH → Leydig cells → testosterone → stimulates spermatogenesis in Sertoli cells",
            GnRH_FSH_pathway: "GnRH → FSH → Sertoli cells → androgen-binding protein (ABP) → concentrates testosterone in tubules",
            inhibinFeedback:  "Sertoli cells produce inhibin → selectively suppresses FSH (not LH) — fine-tunes sperm production",
            testosteroneFeedback: "Testosterone → suppresses GnRH and LH (negative feedback)"
        },
        clinicalApplications: {
            contraception: {
                combinedOCP:    "Oestrogen + progestogen → suppresses FSH and LH → no follicle development, no ovulation",
                progestogenOnly:"Thickens cervical mucus; may suppress ovulation in some cycles",
                GnRHAnalogues:  "Continuous (non-pulsatile) GnRH → downregulates pituitary receptors → blocks LH/FSH → used in IVF and prostate cancer"
            },
            infertilityTreatment: {
                clomiphene: "Oestrogen receptor antagonist in hypothalamus → removes negative feedback → increases FSH/LH → stimulates follicle development",
                exogenousFSH: "Directly stimulates follicle development (used in IVF ovarian stimulation)",
                hCG:          "Mimics LH → triggers ovulation in IVF protocols; maintains corpus luteum in early pregnancy"
            }
        }
    },

    fertilisationAndImplantation: {
        fertilisation: {
            location:    "Ampulla of the uterine tube",
            timing:      "Oocyte viable ~12–24 hours post-ovulation; sperm viable ~3–5 days in female tract",
            capacitation: "Sperm undergo physiological changes in the female tract (cholesterol removal from membrane, Ca²⁺ influx) enabling hyperactivation and acrosome reaction",
            acrosomeReaction: "ZP3 glycoprotein on zona pellucida triggers acrosomal exocytosis — releases enzymes (acrosin, hyaluronidase) to penetrate zona",
            spermEntry:   "Single sperm fuses with oocyte plasma membrane via IZUMO1-JUNO receptor pair",
            corticalReaction: "Ca²⁺ wave triggers cortical granule exocytosis → zona hardening → polyspermy block",
            meiosisII:    "Oocyte completes Meiosis II upon sperm entry → second polar body expelled",
            pronuclei:    "Male and female pronuclei form; DNA replication occurs; syngamy (pronuclei fusion) → zygote (2n)"
        },
        earlyDevelopment: {
            cleavage:    "Rapid mitotic divisions without growth; 2-cell → 4-cell → 8-cell → morula (~day 4)",
            blastocyst:  "~Day 5: inner cell mass (ICM — future embryo) + trophoblast (future placenta) + blastocoel cavity",
            hatching:    "Blastocyst hatches from zona pellucida before implantation",
            implantation: {
                timing:  "Days 6–10 post-fertilisation",
                site:    "Posterior wall of uterine body (usually)",
                process: "Trophoblast invades decidualised endometrium; syncytiotrophoblast erodes maternal spiral arteries",
                hCG:     "Syncytiotrophoblast secretes hCG from day 8 → rescues corpus luteum → sustained progesterone → no menstruation"
            }
        },
        placentaDevelopment: {
            trophoblastDifferentiation: "Cytotrophoblast → syncytiotrophoblast (invasive, hormone-secreting) + extravillous trophoblast (vascular remodelling)",
            placentalHormones:          "hCG, progesterone, oestrogen, hPL (human placental lactogen)",
            establishedBy:              "~Week 12 — takes over progesterone production from corpus luteum (luteoplacental shift)"
        }
    },

    puberty: {
        males: {
            onset:    "~Age 11–13 — GnRH pulse frequency increases",
            sequence: "Testicular enlargement → pubic hair → penile growth → voice breaking → spermarche (~13 years)",
            driver:   "Rising testosterone from Leydig cells"
        },
        females: {
            onset:    "~Age 8–13 (thelarche first — breast development)",
            sequence: "Thelarche → pubarche → growth spurt → menarche (~12–13 years)",
            driver:   "Rising oestrogen from developing follicles"
        },
        trigger:  "Increased GnRH pulse amplitude and frequency — mechanism not fully understood but involves kisspeptin neurons"
    },

    applications: [
        "Contraception: combined oral contraceptive pill suppresses FSH/LH via negative feedback",
        "Fertility treatment: clomiphene, gonadotrophin injections, IVF",
        "Pregnancy testing: hCG detection in urine (lateral flow assay)",
        "Hormonal disorders: PCOS (excess LH relative to FSH), hypogonadism, premature ovarian insufficiency",
        "Cancer biology: hormone-sensitive cancers (breast, prostate, endometrial)",
        "Assisted reproductive technology: ICSI, embryo cryopreservation, preimplantation genetic testing"
    ],

    topicSummary: {
        coreInsights: [
            "The HPG axis — hypothalamus (GnRH) → pituitary (FSH, LH) → gonads (sex steroids) — coordinates all aspects of reproduction through pulsatile hormonal signalling and feedback loops.",
            "Gametogenesis in males is continuous from puberty and yields four functional sperm per primary spermatocyte; oogenesis is discontinuous with two arrest points (Prophase I and Metaphase II) and yields one functional oocyte per primary oocyte.",
            "The secondary oocyte is released at ovulation — it is not yet a mature egg; completion of Meiosis II only occurs upon fertilisation by a sperm.",
            "The LH surge is the pivotal event of the menstrual cycle — triggered by positive feedback from sustained high oestrogen, it causes ovulation and converts the follicle into the corpus luteum.",
            "Fertilisation requires capacitation, the acrosome reaction, and the cortical reaction — each step precisely timed and dependent on molecular receptor interactions between sperm and oocyte.",
            "The blastocyst must implant and secrete hCG before the corpus luteum degenerates (~day 23–24) — hCG rescues progesterone production and prevents menstruation.",
            "Negative feedback (sex steroids suppressing GnRH/FSH/LH) maintains reproductive homeostasis; positive feedback (oestrogen driving the LH surge) is the exception — the only positive feedback loop in the HPG axis.",
            "Clinical reproductive medicine — from the combined pill to IVF — is entirely built on manipulating the HPG axis at specific nodes."
        ],
        keyHormones: {
            GnRH:         "Pulsatile hypothalamic signal — drives all downstream reproductive hormones",
            FSH:          "Follicle/Sertoli cell stimulation — oestrogen production, sperm support",
            LH:           "Ovulation trigger and corpus luteum maintenance; testosterone production in Leydig cells",
            Oestrogen:    "Follicular growth, endometrial proliferation, negative and positive feedback on HPG",
            Progesterone: "Endometrial secretory transformation; corpus luteum product; maintains pregnancy",
            Testosterone: "Spermatogenesis, secondary sexual characteristics; negative feedback on HPG",
            Inhibin:      "Selectively suppresses FSH — fine-tunes sperm production without affecting LH",
            hCG:          "Embryonic LH mimic — rescues corpus luteum and sustains early pregnancy"
        },
        gametogenesisComparison: {
            male:   { start: "Puberty", continuity: "Continuous", yield: "4 sperm per spermatocyte", arrest: "None", product: "Small, motile spermatozoon" },
            female: { start: "Foetal life", continuity: "Arrested/discontinuous", yield: "1 oocyte per oogonium", arrest: "Prophase I and Metaphase II", product: "Large, non-motile oocyte" }
        },
        commonMistakesToAvoid: [
            "The secondary oocyte — NOT a mature egg — is released at ovulation; Meiosis II is completed only at fertilisation",
            "hCG maintains the corpus luteum in early pregnancy — it is NOT the same as LH, though it acts on LH receptors",
            "The LH surge is caused by POSITIVE feedback from oestrogen — the only positive feedback event in the HPG axis; all other sex steroid effects are negative feedback",
            "Inhibin selectively suppresses FSH — it does NOT suppress LH; students frequently over-generalise inhibin's feedback target",
            "Spermatogenesis requires a temperature ~2–3°C BELOW core body temperature — the scrotal location is functionally essential, not incidental",
            "Fertilisation occurs in the AMPULLA of the uterine tube — not in the uterus, not at the ovary surface",
            "The acrosome reaction is triggered by ZP3 on the ZONA PELLUCIDA — it does not occur spontaneously before sperm reach the egg"
        ],
        connections: [
            "Genetics: meiosis during gametogenesis is the basis of Mendelian inheritance, independent assortment, and crossing over",
            "Endocrinology: the HPG axis is the model system for understanding pituitary-target organ axes (analogous to HPT and HPA axes)",
            "Developmental biology: implantation and placentation connect reproductive physiology to embryology",
            "Pharmacology: contraceptives, fertility drugs, and hormone therapies all manipulate the HPG axis",
            "Oncology: hormone-sensitive cancers (breast, prostate, endometrial) are driven by the same oestrogen and androgen signals controlling reproduction",
            "Evolutionary biology: the asymmetry of male vs female gametogenesis reflects differential parental investment"
        ],
        examReadinessChecklist: [
            "Can you draw and label the full male and female reproductive anatomy from memory?",
            "Can you sequence all stages of spermatogenesis and oogenesis, including ploidy at each stage?",
            "Can you draw the hormonal profiles of FSH, LH, oestrogen, and progesterone across the full 28-day cycle?",
            "Can you explain the molecular events of fertilisation from capacitation to syngamy in sequence?",
            "Can you explain why the LH surge is positive feedback and all other HPG feedback is negative?",
            "Can you connect the mechanism of the combined oral contraceptive pill to the HPG axis?",
            "Can you explain why oogenesis produces one functional oocyte while spermatogenesis produces four sperm?"
        ]
    }
},


skeletalSystem: {
    title: "The Skeletal System: Structure, Function, and Bone Biology",

    databaseLinks: {
        misconceptions: [
            'boneStructure',
            'boneGrowthAndRemodelling',
            'jointTypes',
            'calciumAndMineral',
            'skeletalFunction'
        ],
        contextualScenarios: [
            'boneStructure',
            'boneGrowthAndRemodelling',
            'jointTypes',
            'calciumAndMineral'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'boneStructure',
            'boneGrowthAndRemodelling',
            'jointTypes',
            'calciumAndMineral'
        ]
    },

    conceptLinks: {
        "The skeleton provides structural support, protection, and enables movement": {
            misconceptions:      ['skeletalFunction'],
            scenarios:           ['boneStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['boneStructure']
        },
        "Bone is a dynamic living tissue with compact and spongy regions": {
            misconceptions:      ['boneStructure'],
            scenarios:           ['boneStructure'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['boneStructure']
        },
        "Bone grows through ossification and is continuously remodelled": {
            misconceptions:      ['boneGrowthAndRemodelling'],
            scenarios:           ['boneGrowthAndRemodelling'],
            studyTips:           ['diagrams', 'specimens', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['boneGrowthAndRemodelling']
        },
        "Osteoblasts, osteoclasts, and osteocytes regulate bone turnover": {
            misconceptions:      ['boneGrowthAndRemodelling'],
            scenarios:           ['boneGrowthAndRemodelling', 'calciumAndMineral'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['boneGrowthAndRemodelling']
        },
        "Joints are classified by structure and range of movement": {
            misconceptions:      ['jointTypes'],
            scenarios:           ['jointTypes'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['jointTypes']
        },
        "Calcium homeostasis links the skeleton to systemic physiology": {
            misconceptions:      ['calciumAndMineral'],
            scenarios:           ['calciumAndMineral'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['calciumAndMineral']
        }
    },

    topicIntroduction: {
        overview: "The skeletal system is far more than a passive scaffold. It is a metabolically active organ system comprising 206 bones in the adult human, continuously remodelled throughout life, housing the body's largest reservoir of calcium and phosphate, and producing blood cells in its marrow. In this lesson, we explore the microstructure of bone tissue, the cellular machinery of bone turnover, the classification and mechanics of joints, and the hormonal regulation of skeletal calcium — establishing how form, function, and physiology are inseparable in the skeleton.",
        whyItMatters: "Skeletal biology underpins some of the most significant clinical conditions encountered in medicine: osteoporosis affects over 200 million people worldwide, fractures in the elderly are a leading cause of disability and death, and joint diseases such as osteoarthritis and rheumatoid arthritis are the most common causes of chronic pain. Understanding how bone is built, maintained, and lost is the foundation for understanding — and treating — all of these conditions.",
        bigPicture: "Bone is not static. Every year approximately 10% of the adult skeleton is replaced through coordinated resorption by osteoclasts and deposition by osteoblasts — a process called bone remodelling. This dynamic equilibrium is governed by mechanical loading, hormonal signals (PTH, calcitonin, oestrogen, vitamin D), and local cytokine networks. The skeleton is simultaneously a structural organ, a mineral reservoir, and an endocrine organ.",
        priorKnowledge: [
            "Basic cell biology: cell types, organelles, extracellular matrix",
            "Protein structure: collagen as a structural protein",
            "Acid-base and ion chemistry: calcium ions, phosphate, pH",
            "Basic endocrinology: hormones and target-cell signalling",
            "Histology fundamentals: epithelial, connective, muscle, and nervous tissue"
        ],
        topicRoadmap: [
            "Functions of the skeletal system (support, protection, movement, haematopoiesis, mineral storage)",
            "Divisions of the skeleton: axial vs appendicular",
            "Bone tissue: compact (cortical) vs spongy (cancellous) bone; the osteon",
            "Bone cells: osteoblasts, osteocytes, osteoclasts, and osteogenic cells",
            "Bone matrix: organic (collagen, osteocalcin) and inorganic (hydroxyapatite) components",
            "Bone development: intramembranous and endochondral ossification",
            "Bone growth: epiphyseal plate activity and longitudinal vs appositional growth",
            "Bone remodelling: the remodelling cycle and its hormonal regulation",
            "Classification of joints: fibrous, cartilaginous, and synovial",
            "Synovial joint structure and types of movement",
            "Calcium homeostasis: PTH, calcitonin, and vitamin D",
            "Bone pathologies: osteoporosis, rickets, Paget's disease, fracture repair"
        ]
    },

    concepts: [
        "The skeleton provides structural support, protection, and enables movement",
        "Bone is a dynamic living tissue with compact and spongy regions",
        "Bone matrix contains collagen fibres and hydroxyapatite mineral",
        "Bone grows through ossification and is continuously remodelled",
        "Osteoblasts, osteoclasts, and osteocytes regulate bone turnover",
        "Joints are classified by structure and range of movement",
        "Calcium homeostasis links the skeleton to systemic physiology"
    ],

    theory: "The skeletal system is a metabolically active connective tissue system providing mechanical support, protection of vital organs, locomotion via articulations with skeletal muscle, haematopoiesis in red bone marrow, and the body's primary reservoir of calcium and phosphate. Bone tissue undergoes lifelong dynamic remodelling governed by mechanical, hormonal, and paracrine signals.",

    keyDefinitions: {
        "Osteon (Haversian system)": "The structural and functional unit of compact bone — concentric lamellae surrounding a central (Haversian) canal",
        "Haversian canal": "Central canal within an osteon containing blood vessels, lymphatics, and nerves",
        "Volkmann's canal": "Transverse canal connecting adjacent Haversian canals and the periosteum",
        "Osteoblast": "Bone-forming cell that synthesises and secretes osteoid (unmineralised bone matrix)",
        "Osteocyte": "Mature bone cell derived from osteoblast, trapped in lacunae; mechanosensory function",
        "Osteoclast": "Large multinucleated cell derived from monocyte lineage that resorbs bone by acidification and proteolysis",
        "Osteoid": "Unmineralised organic bone matrix (primarily type I collagen) secreted by osteoblasts before mineralisation",
        "Hydroxyapatite": "Calcium phosphate mineral [Ca₁₀(PO₄)₆(OH)₂] that provides hardness and compressive strength to bone",
        "Periosteum": "Dense connective tissue covering outer bone surface; contains osteogenic cells and blood vessels",
        "Endosteum": "Thin cellular layer lining internal bone cavities; contains osteoblasts and osteoclasts",
        "Epiphyseal plate": "Cartilaginous growth plate between epiphysis and diaphysis; site of longitudinal bone growth",
        "Ossification": "Process of bone tissue formation — either intramembranous (directly from mesenchyme) or endochondral (replacing cartilage)",
        "Bone remodelling": "Continuous cycle of bone resorption by osteoclasts followed by bone formation by osteoblasts",
        "RANKL/OPG axis": "Signalling system regulating osteoclast activity: RANKL activates osteoclasts; OPG (osteoprotegerin) is a decoy receptor that inhibits osteoclast formation",
        "Parathyroid hormone (PTH)": "Hormone from parathyroid glands that raises blood calcium by stimulating osteoclast activity, renal calcium reabsorption, and vitamin D activation",
        "Calcitonin": "Hormone from thyroid C-cells that lowers blood calcium by inhibiting osteoclast activity",
        "Vitamin D (1,25-(OH)₂D₃)": "Active hormone promoting intestinal calcium absorption and renal calcium reabsorption; deficiency causes rickets/osteomalacia",
        "Synovial joint": "Freely movable joint enclosed in a joint capsule lined by synovial membrane producing synovial fluid",
        "Articular cartilage": "Hyaline cartilage covering the articulating bone surfaces within synovial joints; avascular, aneural"
    },

    skeletonDivisions: {
        axial: {
            boneCount: 80,
            components: ["Skull (22 bones)", "Vertebral column (26 bones)", "Thoracic cage (25 bones — 12 pairs ribs + sternum)"],
            function: "Protects brain, spinal cord, and thoracic organs; supports head and trunk"
        },
        appendicular: {
            boneCount: 126,
            components: ["Pectoral girdles (4)", "Upper limbs (60)", "Pelvic girdle (2)", "Lower limbs (60)"],
            function: "Enables locomotion and manipulation; attaches to axial skeleton via girdles"
        }
    },

    boneClassification: {
        byShape: {
            long: "Longer than wide; diaphysis + two epiphyses; e.g. femur, humerus, phalanges",
            short: "Roughly cube-shaped; mostly spongy bone; e.g. carpals, tarsals",
            flat: "Thin, flattened, often curved; e.g. sternum, parietal bone, scapula",
            irregular: "Complex shape not fitting other categories; e.g. vertebrae, os coxae",
            sesamoid: "Embedded in tendons; e.g. patella; protects tendons from compressive stress"
        },
        byTissueType: {
            compact: "Dense outer layer; osteons as structural units; withstands bending and torsion",
            spongy: "Trabecular network; marrow-filled spaces; lightweight yet resistant to compression"
        }
    },

    boneStructure: {
        macroscopic: {
            diaphysis: "Shaft of long bone; compact bone walls surrounding medullary cavity",
            epiphysis: "Expanded ends of long bone; spongy bone core covered by thin compact shell and articular cartilage",
            metaphysis: "Region between diaphysis and epiphysis; contains epiphyseal plate in growing bone",
            medullaryCavity: "Central cavity in diaphysis containing yellow bone marrow (fat) in adult",
            periosteum: "Outer fibrous + inner osteogenic layers covering all bone except articular surfaces",
            endosteum: "Single-cell layer lining medullary cavity and trabeculae"
        },
        microscopic: {
            osteon: {
                haversianCanal: "Central canal; blood vessels and nerves",
                lamellae: "Concentric rings of mineralised matrix surrounding central canal",
                lacunae: "Spaces within lamellae housing osteocytes",
                canaliculi: "Tiny channels connecting lacunae; allow osteocyte communication and nutrient exchange",
                cementLine: "Boundary of each osteon; low mineral content; resists crack propagation"
            },
            spongyBone: {
                trabeculae: "Plate- and rod-shaped struts of bone tissue aligned with stress lines",
                marrow: "Red (haematopoietic) or yellow (adipose) marrow in inter-trabecular spaces"
            }
        },
        boneMatrix: {
            organic: {
                collagen: "Type I collagen (~90% of organic matrix); provides tensile strength and flexibility",
                nonCollagenProteins: "Osteocalcin (vitamin K-dependent; binds calcium), osteopontin, fibronectin"
            },
            inorganic: {
                hydroxyapatite: "~65–70% of bone dry weight; Ca₁₀(PO₄)₆(OH)₂; provides compressive strength and hardness",
                carbonateAndFluoride: "Minor substitutions in hydroxyapatite lattice"
            }
        },
        boneCells: {
            osteogenicCells: "Stem cells in periosteum and endosteum; mitotically active; differentiate into osteoblasts",
            osteoblasts: {
                origin: "Mesenchymal stem cells",
                function: "Synthesise and secrete osteoid; direct mineralisation; become osteocytes when encased",
                markers: "Alkaline phosphatase, osteocalcin, RUNX2 transcription factor"
            },
            osteocytes: {
                origin: "Osteoblasts encased in their own matrix",
                function: "Mechanosensing via canalicular network; regulate local bone remodelling; longest-lived bone cell",
                communication: "Gap junctions through canaliculi to neighbouring osteocytes and surface osteoblasts"
            },
            osteoclasts: {
                origin: "Monocyte/macrophage lineage (haematopoietic)",
                function: "Bone resorption via ruffled border; secrete HCl (acidify) and cathepsin K (degrade collagen)",
                activation: "RANKL binds RANK on osteoclast precursors; M-CSF required for proliferation",
                inhibition: "OPG (decoy receptor) blocks RANKL; calcitonin directly inhibits osteoclasts"
            }
        }
    },

    boneGrowthAndOssification: {
        intramembranousOssification: {
            location: "Flat bones (skull, clavicle, mandible)",
            process: [
                "Mesenchymal cells condense and differentiate directly into osteoblasts",
                "Osteoblasts secrete osteoid, which mineralises to form woven bone",
                "Woven bone remodelled to lamellar bone",
                "Periosteum forms from surrounding mesenchyme"
            ]
        },
        endochondralOssification: {
            location: "Most bones of the skeleton (long bones, vertebrae, ribs)",
            process: [
                "Mesenchymal model replaced by hyaline cartilage template",
                "Primary ossification centre forms in diaphysis: chondrocytes hypertrophy, matrix calcifies, chondrocytes die",
                "Blood vessels and osteoblasts invade; woven bone replaces calcified cartilage",
                "Secondary ossification centres form in epiphyses after birth",
                "Epiphyseal plate (growth plate) persists between primary and secondary centres until closure"
            ]
        },
        longitudinalGrowth: {
            site: "Epiphyseal plate (zones of resting, proliferating, hypertrophic, calcified cartilage)",
            mechanism: "Chondrocytes in proliferating zone divide; hypertrophic zone chondrocytes enlarge; matrix calcifies and is replaced by bone",
            closure: "Rising oestrogen/testosterone at puberty accelerates plate closure; growth stops"
        },
        appositionalGrowth: {
            site: "Periosteum surface",
            mechanism: "Osteoblasts in inner periosteum add bone to outer surface; osteoclasts in endosteum resorb inner surface — maintains proportional wall thickness"
        }
    },

    boneRemodelling: {
        purpose: [
            "Repair microdamage before it progresses to stress fractures",
            "Maintain calcium and phosphate homeostasis",
            "Adapt bone architecture to changing mechanical loads (Wolff's law)"
        ],
        remodellingCycle: {
            activation: "Osteocytes detect microdamage or hormonal signal; recruit osteoclast precursors via RANKL",
            resorption: "Osteoclasts excavate resorption pit (Howship's lacuna) over ~2–4 weeks",
            reversal: "Mononuclear cells prepare resorbed surface for osteoblast attachment",
            formation: "Osteoblasts fill resorption pit with osteoid over ~4 months; osteoid mineralises",
            quiescence: "Bone surface returns to resting state; flattened bone-lining cells present"
        },
        regulation: {
            mechanical: "Wolff's law: bone adapts to mechanical load — increased load → increased bone formation; disuse → bone loss",
            hormonal: {
                PTH: "Intermittent PTH stimulates osteoblasts (anabolic); continuous PTH stimulates osteoclasts (catabolic)",
                oestrogen: "Suppresses RANKL expression; promotes osteoblast survival; deficiency at menopause causes rapid bone loss",
                testosterone: "Promotes bone formation; converted to oestrogen in adipose tissue",
                vitaminD: "Promotes calcium absorption; required for normal mineralisation",
                calcitonin: "Inhibits osteoclasts; role in humans modest compared to PTH",
                GH_IGF1: "Growth hormone and IGF-1 stimulate osteoblast proliferation and activity"
            },
            local: "Cytokines (IL-1, IL-6, TNF-α) stimulate osteoclastogenesis via RANKL upregulation"
        },
        wolffLaw: "Bone is deposited where mechanical stress is greatest and resorbed where stress is least — bone architecture reflects habitual loading patterns"
    },

    jointClassification: {
        bySctructure: {
            fibrous: {
                description: "Bones connected by fibrous connective tissue; no joint cavity",
                types: ["Sutures (skull — interlocking edges with Sharpey's fibres)", "Syndesmoses (interosseous membrane — e.g. tibiofibular joint)", "Gomphoses (teeth in alveolar sockets)"],
                movement: "Immovable (synarthrosis) to slightly movable (amphiarthrosis)"
            },
            cartilaginous: {
                description: "Bones connected by cartilage; no joint cavity",
                types: ["Synchondroses (hyaline cartilage — e.g. epiphyseal plate, first sternocostal joint)", "Symphyses (fibrocartilage — e.g. pubic symphysis, intervertebral discs)"],
                movement: "Slightly movable (amphiarthrosis)"
            },
            synovial: {
                description: "Bones separated by fluid-filled joint cavity enclosed in capsule lined by synovial membrane",
                components: ["Articular cartilage (hyaline)", "Joint capsule (fibrous outer + synovial membrane inner)", "Synovial fluid (hyaluronic acid-rich; lubricates and nourishes carticular cartilage)", "Ligaments (stabilise joint)", "Bursae (fluid-filled sacs reducing friction near joint)"],
                movement: "Freely movable (diarthrosis)"
            }
        },
        synovialJointTypes: {
            plane: "Flat surfaces; gliding movement; e.g. intercarpal joints",
            hinge: "Concave-convex surfaces; one axis (flexion/extension); e.g. elbow, interphalangeal",
            pivot: "Rounded process in ring; rotation only; e.g. atlantoaxial joint, proximal radioulnar",
            condyloid: "Oval surface in elliptical socket; two axes (flexion/extension + abduction/adduction); e.g. radiocarpal",
            saddle: "Saddle-shaped surfaces; two axes plus circumduction; e.g. carpometacarpal joint of thumb",
            ball_and_socket: "Spherical head in cup-shaped socket; multiaxial; e.g. hip, shoulder"
        },
        movementTerminology: {
            flexion: "Decreases joint angle",
            extension: "Increases joint angle",
            abduction: "Movement away from midline",
            adduction: "Movement toward midline",
            rotation: "Turning around longitudinal axis",
            circumduction: "Cone-shaped movement (combination of flex/ext/abd/add)",
            pronation: "Rotating forearm so palm faces posteriorly",
            supination: "Rotating forearm so palm faces anteriorly",
            inversion: "Sole of foot turned medially",
            eversion: "Sole of foot turned laterally",
            dorsiflexion: "Foot flexed toward shin",
            plantarflexion: "Foot extended (pointing toes)"
        }
    },

    calciumHomeostasis: {
        importance: "Calcium is essential for muscle contraction, nerve impulse transmission, blood clotting, and enzyme cofactor activity; 99% is stored in bone as hydroxyapatite",
        normalRange: "Serum calcium: 2.1–2.6 mmol/L",
        hormones: {
            PTH: {
                stimulus: "Hypocalcaemia (low serum Ca²⁺)",
                source: "Parathyroid glands (chief cells)",
                targets: {
                    bone: "Stimulates osteoclast activity (via RANKL on osteoblasts) → releases Ca²⁺ and PO₄³⁻",
                    kidney: "Increases Ca²⁺ reabsorption in distal tubule; increases phosphate excretion; activates 1α-hydroxylase",
                    intestine: "Indirectly via vitamin D activation"
                },
                netEffect: "Raises serum Ca²⁺"
            },
            vitaminD: {
                activation: "Skin: UV light → cholecalciferol (D₃) → liver: 25-OH-D₃ → kidney (1α-hydroxylase): 1,25-(OH)₂D₃ (calcitriol)",
                targets: {
                    intestine: "Upregulates TRPV6 and calbindin → dramatically increases Ca²⁺ and PO₄³⁻ absorption",
                    bone: "At physiological levels: supports mineralisation; at high levels: can stimulate resorption",
                    kidney: "Increases Ca²⁺ reabsorption"
                },
                netEffect: "Raises serum Ca²⁺ and PO₄³⁻"
            },
            calcitonin: {
                stimulus: "Hypercalcaemia (high serum Ca²⁺)",
                source: "Thyroid parafollicular (C) cells",
                targets: {
                    bone: "Directly inhibits osteoclast activity",
                    kidney: "Increases Ca²⁺ and PO₄³⁻ excretion"
                },
                netEffect: "Lowers serum Ca²⁺ (modest effect in adults)"
            }
        },
        deficiencyPathologies: {
            rickets: "Children — vitamin D deficiency → inadequate mineralisation → soft, deformable bones (bowing of legs)",
            osteomalacia: "Adults — vitamin D deficiency → unmineralised osteoid accumulates → bone pain, fractures",
            osteoporosis: "Low bone mass and microarchitectural deterioration → increased fracture risk; post-menopausal (oestrogen loss) or age-related",
            hypoparathyroidism: "Low PTH → hypocalcaemia → tetany, seizures",
            hyperparathyroidism: "High PTH → hypercalcaemia + bone resorption → 'bones, stones, groans, and moans'"
        }
    },

    fractureRepair: {
        stages: [
            "Haematoma formation: bleeding at fracture site; clot forms scaffold (hours)",
            "Fibrocartilaginous callus: fibroblasts and chondroblasts invade clot; soft callus bridges gap (days–weeks)",
            "Bony callus: osteoblasts replace fibrocartilage with woven bone (weeks)",
            "Bone remodelling: woven bone replaced by lamellar bone; original shape restored (months–years)"
        ],
        factors: {
            promotingHealing: ["Good vascularisation", "Adequate nutrition (Ca²⁺, vitamin D, protein)", "Mechanical stability (immobilisation)", "Youth"],
            impairing: ["Osteoporosis", "Diabetes", "Smoking", "Corticosteroids", "Poor blood supply", "Infection"]
        }
    },

    applications: [
        "Osteoporosis prevention and treatment (bisphosphonates, RANKL inhibitors, anabolic PTH)",
        "Fracture fixation and bone graft surgery",
        "Joint replacement arthroplasty (hip, knee, shoulder)",
        "Sports medicine: growth plate injuries in adolescents",
        "Forensic anthropology: age, sex, and stature estimation from skeletal remains",
        "Calcium and vitamin D supplementation guidelines",
        "Bone tumour diagnosis and treatment",
        "Dental implantology: osseointegration principles"
    ],

    topicSummary: {
        coreInsights: [
            "Bone is a living connective tissue — not inert mineral — continuously remodelled by osteoblasts (formation) and osteoclasts (resorption) throughout life.",
            "The osteon is the functional unit of compact bone: concentric lamellae of mineralised matrix surrounding a Haversian canal containing blood vessels, connected by canaliculi housing osteocyte processes.",
            "Bone strength derives from the composite material properties of type I collagen (tensile strength) and hydroxyapatite (compressive strength) — removing either component dramatically weakens bone in a specific direction.",
            "Bone growth occurs longitudinally at the epiphyseal plate (endochondral ossification) and appositionally at the periosteum; both processes cease at epiphyseal fusion.",
            "The RANKL/OPG axis is the master regulator of osteoclastogenesis: RANKL (expressed by osteoblasts and stromal cells) activates osteoclast differentiation; OPG is a decoy receptor that blocks RANKL — the ratio determines bone resorption rate.",
            "Calcium homeostasis is a closed-loop hormonal system: PTH raises calcium by mobilising bone, retaining calcium in the kidney, and activating vitamin D; calcitonin provides the opposing signal.",
            "Joint classification is hierarchical: structural (fibrous, cartilaginous, synovial) determines functional classification (synarthrosis, amphiarthrosis, diarthrosis); synovial joints are further classified by shape into six types.",
            "Wolff's law is mechanobiology in action: bone architecture reflects habitual mechanical loading — athletes have denser, differently-shaped bones than sedentary individuals."
        ],
        keyEquations: {
            calciumBalance: "Serum [Ca²⁺] = (intestinal absorption + bone resorption) − (renal excretion + bone deposition)",
            boneRemodelling: "Net bone change = osteoblast formation − osteoclast resorption",
            hydroxyapatiteFormula: "Ca₁₀(PO₄)₆(OH)₂ — the dominant mineral phase of bone",
            wolffLaw: "Stress → piezoelectric signal → osteocyte mechanosensing → targeted remodelling"
        },
        inhibitionComparison: {
            osteoblastActivators:  { agents: "PTH (intermittent), oestrogen, testosterone, IGF-1, mechanical load", effect: "Increase bone formation" },
            osteoclastActivators:  { agents: "PTH (continuous), RANKL, IL-1, IL-6, TNF-α, vitamin D excess", effect: "Increase bone resorption" },
            osteoclastInhibitors:  { agents: "OPG, calcitonin, oestrogen, bisphosphonates, denosumab", effect: "Decrease bone resorption" }
        },
        commonMistakesToAvoid: [
            "Bone is NOT dead mineral — osteocytes are metabolically active cells embedded in mineralised matrix with extensive communication networks",
            "Osteoblasts and osteoclasts are NOT the same lineage — osteoblasts derive from mesenchymal stem cells; osteoclasts from monocyte/macrophage (haematopoietic) precursors",
            "PTH does NOT directly stimulate osteoclasts — it acts on osteoblasts/stromal cells which then upregulate RANKL, which activates osteoclast precursors",
            "The epiphyseal plate is NOT where appositional growth occurs — appositional growth is periosteal; longitudinal growth is epiphyseal",
            "Articular cartilage is NOT replaced during normal bone remodelling — it is avascular and cannot self-repair, which is why cartilage damage is permanent",
            "Vitamin D deficiency causes osteomalacia (failure to mineralise), NOT osteoporosis (normal mineralisation but reduced total bone mass) — these are distinct pathologies"
        ],
        connections: [
            "Muscle physiology: skeletal muscle attachment via tendons to periosteum; muscle contraction drives Wolff's law remodelling",
            "Haematology: red bone marrow is the primary site of haematopoiesis — erythrocytes, leucocytes, and platelets all originate in bone",
            "Endocrinology: PTH, calcitonin, vitamin D, oestrogen, GH, IGF-1, and cortisol all directly regulate bone metabolism",
            "Immunology: RANKL/OPG axis is shared between bone biology and lymph node development — a remarkable convergence",
            "Pharmacology: bisphosphonates (adsorb to hydroxyapatite, induce osteoclast apoptosis), denosumab (anti-RANKL antibody), teriparatide (recombinant PTH fragment — anabolic)",
            "Forensics: skeletal age estimation uses epiphyseal fusion timings; sex estimation uses pelvic and skull morphology; stature from long bone lengths"
        ],
        examReadinessChecklist: [
            "Can you draw and label a cross-section of a long bone, identifying all macroscopic and microscopic features?",
            "Can you draw an osteon and label all five components including canaliculi and their function?",
            "Can you distinguish the three bone cell types by origin, location, function, and marker?",
            "Can you explain the complete bone remodelling cycle in sequence, naming the key molecular signals at each step?",
            "Can you classify any joint by structure and function and name the specific type of movement possible?",
            "Can you trace the calcium homeostasis loop — what triggers PTH, what PTH does at each target organ, and how calcitonin opposes this?"
        ]
    }

},




nervousSystem: {
    title: "The Nervous System: Structure, Signalling, and Integration",

    databaseLinks: {
        misconceptions: [
            'neuronStructure',
            'actionPotential',
            'synapticTransmission',
            'nervousSystemOrganisation',
            'reflexesAndIntegration'
        ],
        contextualScenarios: [
            'neuronStructure',
            'actionPotential',
            'synapticTransmission',
            'nervousSystemOrganisation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'neuronStructure',
            'actionPotential',
            'synapticTransmission',
            'nervousSystemOrganisation'
        ]
    },

    conceptLinks: {
        "Neurons are the structural and functional units of the nervous system": {
            misconceptions:      ['neuronStructure'],
            scenarios:           ['neuronStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['neuronStructure']
        },
        "Resting membrane potential is maintained by ion gradients and selective permeability": {
            misconceptions:      ['actionPotential'],
            scenarios:           ['actionPotential'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['actionPotential']
        },
        "Action potentials are all-or-nothing, self-propagating electrical signals": {
            misconceptions:      ['actionPotential'],
            scenarios:           ['actionPotential'],
            studyTips:           ['diagrams', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['actionPotential']
        },
        "Synaptic transmission converts electrical signals to chemical signals and back": {
            misconceptions:      ['synapticTransmission'],
            scenarios:           ['synapticTransmission'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['synapticTransmission']
        },
        "The nervous system is organised into central and peripheral divisions with distinct roles": {
            misconceptions:      ['nervousSystemOrganisation', 'reflexesAndIntegration'],
            scenarios:           ['nervousSystemOrganisation'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['nervousSystemOrganisation']
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 2 — TOPIC FRAMING
    // ─────────────────────────────────────────────────────────────────────────

    topicIntroduction: {
        overview: "The nervous system is the body's master communication and control network — a biological internet of roughly 86 billion neurons that detects, integrates, and responds to information faster than any engineered system. From the split-second withdrawal of your hand from a flame to the years-long process of forming a memory, every nervous system function depends on the same fundamental unit: the electrochemical signal propagated by neurons. In this lesson we trace that signal from its ionic origins at the cell membrane through the synapse to the organisation of circuits and divisions of the whole nervous system.",
        whyItMatters: "Understanding the nervous system is foundational to medicine, psychology, pharmacology, and neuroscience. Every anaesthetic, antidepressant, anticonvulsant, and analgesic works by modifying neuronal signalling. Conditions from Parkinson's disease to multiple sclerosis to epilepsy are fundamentally disorders of the mechanisms covered in this lesson. Brain–computer interfaces, artificial intelligence inspired by neural networks, and the treatment of spinal cord injury all rest on understanding how neurons work.",
        bigPicture: "The nervous system solves the problem of coordinating a multicellular organism in real time. It does this through a single reusable signal — the action potential — that is generated, propagated, and transmitted with extraordinary reliability. The genius of the system is not the signal itself, which is simple, but the architecture of connections that gives that simple signal meaning.",
        priorKnowledge: [
            "Cell biology: plasma membrane structure (phospholipid bilayer, proteins)",
            "Transport: diffusion, osmosis, active transport, ion channels",
            "Electrochemistry: basic concepts of charge, potential difference, and ion movement",
            "Protein structure: receptor proteins, channel proteins, enzymes",
            "Basic anatomy: organ systems and body organisation"
        ],
        topicRoadmap: [
            "Neuron structure: soma, dendrites, axon, myelin, nodes of Ranvier, synaptic terminals",
            "Types of neuron: sensory, motor, interneuron; structural classifications",
            "Resting membrane potential: ion gradients, Na⁺/K⁺ pump, selective permeability",
            "Action potential: threshold, depolarisation, repolarisation, hyperpolarisation, refractory period",
            "Propagation: continuous vs saltatory conduction; the role of myelin",
            "Synaptic transmission: vesicle release, receptor binding, EPSPs and IPSPs, summation",
            "Neurotransmitters: types, receptors, and pharmacological targets",
            "Organisation: CNS vs PNS; somatic vs autonomic; sympathetic vs parasympathetic",
            "Reflex arcs and neural integration",
            "Neurological disease and pharmacology"
        ]
    },

    concepts: [
        "Neurons are the structural and functional units of the nervous system",
        "Resting membrane potential is maintained by ion gradients and selective permeability",
        "Action potentials are all-or-nothing, self-propagating electrical signals",
        "Saltatory conduction along myelinated axons increases propagation speed",
        "Synaptic transmission converts electrical signals to chemical signals and back",
        "Neurotransmitters can be excitatory or inhibitory depending on receptor type",
        "The nervous system is organised into central and peripheral divisions with distinct roles",
        "Reflex arcs allow rapid responses without cortical processing"
    ],

    theory: "The nervous system processes information through graded and all-or-nothing electrical signals generated by ion movements across neuronal membranes, transmitted chemically across synapses, and integrated across circuits to produce coordinated behavioural and physiological responses.",

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 3 — CORE LESSON CONTENT
    // ─────────────────────────────────────────────────────────────────────────

    keyDefinitions: {
        "Neuron": "Specialised cell that generates and transmits electrical signals",
        "Soma": "Cell body of the neuron; contains nucleus and metabolic machinery",
        "Dendrite": "Branched process that receives signals from other neurons",
        "Axon": "Long process that conducts action potentials away from the soma",
        "Myelin Sheath": "Insulating lipid layer formed by Schwann cells (PNS) or oligodendrocytes (CNS)",
        "Node of Ranvier": "Gap in myelin sheath where action potentials are regenerated",
        "Synapse": "Junction between two neurons or a neuron and an effector cell",
        "Neurotransmitter": "Chemical messenger released at the synapse",
        "Resting Membrane Potential": "Electrical potential across the membrane at rest (approximately −70 mV in most neurons)",
        "Action Potential": "All-or-nothing electrical signal generated when threshold is reached",
        "Threshold": "Membrane potential at which an action potential is triggered (approximately −55 mV)",
        "Depolarisation": "Membrane potential becomes less negative (Na⁺ influx)",
        "Repolarisation": "Membrane potential returns toward resting value (K⁺ efflux)",
        "Hyperpolarisation": "Membrane potential becomes more negative than resting value",
        "Refractory Period": "Period after an action potential during which a new one cannot be (absolute) or is harder to (relative) generate",
        "EPSP": "Excitatory postsynaptic potential — depolarising graded potential",
        "IPSP": "Inhibitory postsynaptic potential — hyperpolarising graded potential",
        "Summation": "Integration of multiple EPSPs and IPSPs (temporal or spatial)",
        "Na⁺/K⁺-ATPase": "Active transport pump that maintains ion gradients (3 Na⁺ out, 2 K⁺ in per cycle)"
    },

    neuronStructure: {
        components: {
            soma: "Contains nucleus, endoplasmic reticulum, ribosomes, Golgi — metabolic centre; integrates incoming signals",
            dendrites: "Multiple branched extensions; covered in receptor proteins; increase surface area for signal reception; contain dendritic spines at synaptic contact sites",
            axonHillock: "Junction between soma and axon; site where action potentials are initiated (lowest threshold in the neuron)",
            axon: "Single long process; can be up to 1 metre in length (motor neurons to toes); conducts signals away from soma",
            myelinSheath: "Formed by Schwann cells (PNS) or oligodendrocytes (CNS); increases conduction speed; reduces metabolic cost",
            nodesOfRanvier: "Unmyelinated gaps every 1–2 mm; contain high density of voltage-gated Na⁺ channels; sites of action potential regeneration",
            synapticTerminal: "Enlarged ending (bouton) containing synaptic vesicles loaded with neurotransmitter"
        },
        neuronTypes: {
            bySensoryMotorRole: {
                sensory: "Afferent; carries signals from receptors to CNS; pseudounipolar structure",
                motor: "Efferent; carries signals from CNS to effectors (muscles, glands); multipolar structure",
                interneuron: "Located entirely within CNS; integrates and processes information; most numerous type"
            },
            byStructure: {
                multipolar: "Many dendrites, one axon — most common; motor neurons and interneurons",
                bipolar: "One dendrite, one axon — sensory (retina, olfactory epithelium)",
                pseudounipolar: "Single process dividing into peripheral and central branches — sensory neurons of dorsal root ganglia",
                unipolar: "Single process — rare in vertebrates; found in invertebrates"
            }
        },
        glialCells: {
            astrocytes: "Structural support, blood-brain barrier, neurotransmitter recycling, ion buffering",
            oligodendrocytes: "CNS myelin formation (one cell myelinates multiple axons)",
            schwannCells: "PNS myelin formation (one cell per internode); essential for peripheral nerve regeneration",
            microglia: "CNS immune cells; phagocytose debris and pathogens",
            ependymalCells: "Line ventricles; produce and circulate cerebrospinal fluid"
        }
    },

    restingMembranePotential: {
        value: "Approximately −70 mV (inside negative relative to outside)",
        ionDistribution: {
            sodium: "High outside (~145 mM), low inside (~12 mM) — chemical gradient drives Na⁺ inward; electrical gradient drives Na⁺ inward",
            potassium: "High inside (~140 mM), low outside (~4 mM) — chemical gradient drives K⁺ outward; electrical gradient drives K⁺ inward",
            chloride: "High outside (~110 mM), low inside (~4 mM)",
            largeAnions: "Proteins and organic phosphates trapped inside — contribute to negative interior"
        },
        maintenanceMechanisms: {
            selectivePermeability: "At rest, membrane is 50–75× more permeable to K⁺ than Na⁺ (leak channels); K⁺ diffuses out, leaving net negative charge inside",
            sodiumPotassiumPump: "Na⁺/K⁺-ATPase pumps 3 Na⁺ out and 2 K⁺ in per ATP; electrogenic (contributes ~−3 mV directly); primarily maintains gradients for leak channels to exploit"
        }
    },

    actionPotential: {
        phases: {
            restingState: { potential: "−70 mV", channels: "Voltage-gated Na⁺ and K⁺ channels closed; leak channels open" },
            depolarisation: { potential: "−70 mV to +30 mV", channels: "Voltage-gated Na⁺ channels open; Na⁺ rushes in down electrochemical gradient", trigger: "Stimulus reaches threshold (~−55 mV)" },
            repolarisation: { potential: "+30 mV to −70 mV", channels: "Voltage-gated Na⁺ channels inactivate; voltage-gated K⁺ channels open; K⁺ rushes out" },
            hyperpolarisation: { potential: "−70 mV to −80 mV", channels: "K⁺ channels slow to close; excess K⁺ efflux overshoots resting potential" },
            return: { potential: "−80 mV to −70 mV", channels: "K⁺ channels close; Na⁺/K⁺ pump restores gradients" }
        },
        allOrNothing: "Action potentials are all-or-nothing: either the threshold is reached and a full action potential occurs, or no action potential occurs. Stimulus strength is encoded by frequency, not amplitude, of action potentials.",
        refractoryPeriods: {
            absolute: "During depolarisation and early repolarisation — Na⁺ channels inactivated, impossible to generate another action potential regardless of stimulus strength",
            relative: "During hyperpolarisation — a stronger-than-normal stimulus can trigger another action potential; Na⁺ channels resetting, K⁺ channels still open"
        },
        propagation: {
            unmyelinated: "Continuous conduction — action potential regenerated at every point along axon; slow (0.5–2 m/s)",
            myelinated: "Saltatory conduction — action potential jumps between nodes of Ranvier; fast (70–120 m/s); energy efficient",
            directionality: "Unidirectional — refractory period behind the action potential prevents backward propagation"
        }
    },

    synapticTransmission: {
        structure: {
            presynapticTerminal: "Contains synaptic vesicles (50 nm diameter) loaded with neurotransmitter; mitochondria for ATP supply; voltage-gated Ca²⁺ channels",
            synapticCleft: "20–40 nm gap between pre- and postsynaptic membranes; filled with extracellular fluid and adhesion proteins",
            postsynapticMembrane: "Contains ligand-gated ion channels (ionotropic receptors) and G-protein coupled receptors (metabotropic receptors)"
        },
        steps: [
            "Action potential arrives at presynaptic terminal",
            "Membrane depolarisation opens voltage-gated Ca²⁺ channels",
            "Ca²⁺ influx triggers SNARE protein-mediated fusion of synaptic vesicles with membrane",
            "Neurotransmitter released into synaptic cleft by exocytosis",
            "Neurotransmitter diffuses across cleft and binds postsynaptic receptors",
            "Ion channels open or close — generating EPSP or IPSP",
            "Neurotransmitter removed: reuptake, enzymatic degradation, or diffusion"
        ],
        receptorTypes: {
            ionotropic: "Ligand-gated ion channels; fast response (milliseconds); direct ion flux; e.g. NMDA, AMPA, nicotinic ACh receptors",
            metabotropic: "G-protein coupled receptors; slow response (seconds to minutes); second messenger cascades; e.g. muscarinic ACh receptors, dopamine receptors"
        },
        neurotransmitters: {
            acetylcholine: { location: "Neuromuscular junction, autonomic ganglia, CNS", effect: "Excitatory (nicotinic) or inhibitory (muscarinic)", degradation: "Acetylcholinesterase in synaptic cleft" },
            glutamate: { location: "Most excitatory synapses in CNS", effect: "Excitatory — AMPA, NMDA, kainate receptors", role: "Learning and memory (LTP), major excitatory transmitter" },
            GABA: { location: "Major inhibitory CNS transmitter", effect: "Inhibitory — GABA-A (Cl⁻ influx), GABA-B (K⁺ efflux)", pharmacology: "Benzodiazepines and barbiturates enhance GABA-A; alcohol affects GABA-B" },
            dopamine: { location: "Substantia nigra, ventral tegmental area, prefrontal cortex", effect: "Modulates reward, movement, motivation", disease: "Deficiency in Parkinson's; excess activity implicated in schizophrenia" },
            serotonin: { location: "Raphe nuclei, widely projecting", effect: "Modulates mood, sleep, appetite", pharmacology: "SSRIs block serotonin reuptake" },
            noradrenaline: { location: "Locus coeruleus, sympathetic nervous system", effect: "Attention, arousal, fight-or-flight" }
        },
        summation: {
            temporal: "Multiple action potentials arriving at the same synapse in rapid succession summate — each EPSP adds before the previous decays",
            spatial: "Multiple synapses active simultaneously on the same postsynaptic neuron — EPSPs from different locations summate at the axon hillock"
        }
    },

    nervousSystemOrganisation: {
        CNS: {
            components: ["Brain (cerebrum, cerebellum, brainstem)", "Spinal cord"],
            functions: ["Integration and processing of information", "Decision-making", "Memory and learning", "Coordination of movement"],
            protection: "Meninges (dura, arachnoid, pia mater), cerebrospinal fluid, blood-brain barrier, cranium and vertebral column"
        },
        PNS: {
            components: ["Cranial nerves (12 pairs)", "Spinal nerves (31 pairs)", "Ganglia"],
            divisions: {
                somatic: "Voluntary control of skeletal muscle; sensory input from skin, joints, special senses",
                autonomic: {
                    sympathetic: "Fight-or-flight; thoracolumbar origin; noradrenaline at effectors; increases heart rate, dilates pupils, redirects blood to muscles",
                    parasympathetic: "Rest-and-digest; craniosacral origin; acetylcholine at effectors; decreases heart rate, stimulates digestion, constricts pupils",
                    enteric: "Intrinsic nervous system of the gut; can function independently of CNS"
                }
            }
        },
        reflexArcs: {
            components: ["Receptor (detects stimulus)", "Sensory neuron (afferent)", "Integration centre (spinal cord interneuron)", "Motor neuron (efferent)", "Effector (muscle or gland)"],
            monosynaptic: "One synapse between sensory and motor neuron — e.g. patellar (knee-jerk) reflex; fastest reflex arc",
            polysynaptic: "Multiple interneurons — e.g. withdrawal reflex; allows more complex integration and crossed extensor reflex",
            advantage: "Rapid, stereotyped responses that bypass cortical delay"
        }
    },

    neurologicalApplications: [
        "Multiple sclerosis: autoimmune demyelination slows or blocks action potential propagation",
        "Parkinson's disease: dopaminergic neuron loss in substantia nigra disrupts motor control",
        "Epilepsy: abnormal synchronous neuronal firing — treated with drugs enhancing GABA or blocking Na⁺ channels",
        "Local anaesthetics: block voltage-gated Na⁺ channels (lidocaine, novocaine)",
        "Organophosphate poisoning: inhibit acetylcholinesterase — accumulation of ACh causes continuous stimulation",
        "Myasthenia gravis: autoantibodies against nicotinic ACh receptors at neuromuscular junction",
        "SSRIs: block serotonin reuptake transporters — increase synaptic serotonin",
        "Botulinum toxin: cleaves SNARE proteins — prevents vesicle fusion and ACh release"
    ],

    topicSummary: {
        coreInsights: [
            "The neuron is polarised structurally (dendrites receive, soma integrates, axon transmits) and electrically (−70 mV resting potential maintained by ion gradients and the Na⁺/K⁺ pump).",
            "The action potential is an all-or-nothing event: once threshold is crossed, a stereotyped sequence of Na⁺ influx and K⁺ efflux produces a full action potential regardless of stimulus strength.",
            "Myelin dramatically increases conduction velocity by forcing action potentials to jump between nodes of Ranvier (saltatory conduction) — the basis of why demyelinating diseases like MS impair function so severely.",
            "The synapse is the computational unit of neural circuits: the balance of EPSPs and IPSPs, integrated spatially and temporally at the axon hillock, determines whether the postsynaptic neuron fires.",
            "Neurotransmitter identity does not determine excitation or inhibition — the receptor type on the postsynaptic membrane determines the response (ACh is excitatory at nicotinic receptors, inhibitory at muscarinic cardiac receptors).",
            "The autonomic nervous system operates antagonistically: sympathetic (noradrenaline-mediated, fight-or-flight) and parasympathetic (acetylcholine-mediated, rest-and-digest) divisions produce opposing effects on the same target organs.",
            "Reflex arcs demonstrate that the spinal cord can integrate information and generate appropriate motor responses without involving the brain — speed is achieved by minimising the neural pathway length.",
            "Most drugs that affect the nervous system do so by modifying synaptic transmission: enhancing or blocking receptors, inhibiting reuptake, or preventing neurotransmitter release or degradation."
        ],
        keyValues: {
            restingPotential: "−70 mV (typical mammalian neuron)",
            threshold: "−55 mV (approximately)",
            peakDepolarisation: "+30 to +40 mV",
            conductionSpeedUnmyelinated: "0.5–2 m/s",
            conductionSpeedMyelinated: "70–120 m/s",
            synapticCleftWidth: "20–40 nm",
            absoluteRefractoryPeriod: "~1–2 ms",
            sodiumPotassiumPump: "3 Na⁺ out : 2 K⁺ in per ATP"
        },
        inhibitionComparison: {
            sympathetic:   { origin: "Thoracolumbar", transmitter: "Noradrenaline (effectors)", effect: "Fight-or-flight", heartRate: "Increases", digestion: "Decreases" },
            parasympathetic: { origin: "Craniosacral", transmitter: "Acetylcholine (effectors)", effect: "Rest-and-digest", heartRate: "Decreases", digestion: "Increases" }
        },
        commonMistakesToAvoid: [
            "Action potentials do NOT travel faster with stronger stimuli — stimulus strength is encoded by frequency, not action potential amplitude or speed",
            "Na⁺/K⁺ pump does NOT directly generate the resting potential — ion leak channels create the potential; the pump maintains the gradients that make this possible",
            "Myelin does NOT prevent action potentials — it forces them to jump between nodes; action potentials are regenerated at every node of Ranvier",
            "The neurotransmitter identity does NOT determine excitation vs inhibition — the postsynaptic receptor type determines the effect",
            "The refractory period is NOT simply 'tiredness' — it is a specific state of voltage-gated Na⁺ channel inactivation with precise molecular basis",
            "Not all neurons in the PNS are motor neurons — the PNS includes sensory, motor, and autonomic neurons"
        ],
        connections: [
            "Pharmacology: virtually every CNS drug acts on the mechanisms in this lesson (ion channels, receptors, reuptake transporters, enzymes that degrade neurotransmitters)",
            "Pathology: MS (demyelination), Parkinson's (dopamine loss), epilepsy (excitation-inhibition imbalance), myasthenia gravis (receptor autoimmunity)",
            "Evolution: the nervous system evolved from simple diffuse nerve nets (cnidarians) to centralised brain and spinal cord — reflecting increasing complexity of behaviour",
            "Biomedical engineering: brain-computer interfaces, cochlear implants, and deep brain stimulation all exploit the electrical nature of neural signalling",
            "Muscle physiology: the neuromuscular junction is a specialised cholinergic synapse — understanding it bridges nervous system and musculoskeletal physiology"
        ],
        examReadinessChecklist: [
            "Can you draw and label a complete neuron and explain the function of each component?",
            "Can you explain how the resting membrane potential is established and maintained?",
            "Can you trace an action potential through all five phases, naming the ion movements and channel states at each?",
            "Can you explain why saltatory conduction is faster than continuous conduction?",
            "Can you list all steps of synaptic transmission in order and state what would happen if each step were blocked?",
            "Can you distinguish EPSPs from IPSPs and explain temporal and spatial summation?",
            "Can you compare sympathetic and parasympathetic divisions across five different target organs?",
            "Can you trace a reflex arc naming each component and explaining why reflexes are faster than voluntary responses?"
        ]
    }
},



cellDivision: {
    title: "Cell Division: Mitosis, Meiosis, and the Cell Cycle",

    databaseLinks: {
        misconceptions: [
            'cellCycleBasics',
            'mitosis',
            'meiosis',
            'regulation',
            'comparisonErrors'
        ],
        contextualScenarios: [
            'cellCycleBasics',
            'mitosis',
            'meiosis',
            'regulation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'cellCycleBasics',
            'mitosis',
            'meiosis',
            'regulation'
        ]
    },

    conceptLinks: {
        "The cell cycle is a regulated sequence of events leading to cell division": {
            misconceptions:      ['cellCycleBasics'],
            scenarios:           ['cellCycleBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['cellCycleBasics']
        },
        "Mitosis produces two genetically identical diploid daughter cells": {
            misconceptions:      ['mitosis'],
            scenarios:           ['mitosis'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['mitosis']
        },
        "Meiosis produces four genetically unique haploid gametes": {
            misconceptions:      ['meiosis', 'comparisonErrors'],
            scenarios:           ['meiosis'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['meiosis']
        },
        "Checkpoints regulate progression through the cell cycle": {
            misconceptions:      ['regulation'],
            scenarios:           ['regulation'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['regulation']
        },
        "Crossing over and independent assortment generate genetic variation": {
            misconceptions:      ['meiosis', 'comparisonErrors'],
            scenarios:           ['meiosis'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['meiosis']
        },
        "Dysregulation of the cell cycle underlies cancer": {
            misconceptions:      ['regulation'],
            scenarios:           ['regulation'],
            studyTips:           ['comparisonTables', 'flashcards', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['regulation']
        }
    },

    topicIntroduction: {
        overview: "Cell division is the fundamental process by which life perpetuates itself — from the growth of a single fertilised egg into a trillion-celled organism, to the daily replacement of skin, gut, and blood cells, to the formation of gametes that carry genetic information to the next generation. Two distinct division processes serve these different purposes: mitosis for growth and repair, and meiosis for sexual reproduction. Understanding how the cell cycle is controlled, how chromosomes are faithfully segregated, and how genetic variation is generated is central to biology, medicine, and genetics.",
        whyItMatters: "Cancer is fundamentally a disease of uncontrolled cell division — mutations in cell cycle regulators allow cells to divide without restraint. Fertility, genetic disease, chromosomal abnormalities such as Down syndrome, and the entire field of developmental biology depend on correct cell division. Every cancer therapy, fertility treatment, and chromosomal diagnostic test is grounded in the biology of this topic.",
        bigPicture: "The cell cycle is not merely a division event — it is a highly regulated programme with quality-control checkpoints at each transition. Mitosis ensures that every daughter cell receives an exact copy of the genome. Meiosis deliberately reshuffles the genome to generate diversity, reducing chromosome number by half so that fertilisation restores the diploid count. Both processes depend on the same fundamental machinery: spindle fibres, centromeres, and a suite of regulatory proteins whose failure leads to disease.",
        priorKnowledge: [
            "DNA structure: double helix, base pairing, nucleotides",
            "Chromosome structure: chromatin, histones, sister chromatids, homologous pairs",
            "Ploidy: haploid (n) vs diploid (2n)",
            "Basic cell organelles: nucleus, centrosome, cytoskeleton",
            "Protein structure and function: how regulatory proteins control cellular processes",
            "Mendelian genetics: alleles, homologous chromosomes, dominant and recessive"
        ],
        topicRoadmap: [
            "The cell cycle: interphase (G1, S, G2) and the mitotic phase",
            "DNA replication during S phase: semi-conservative replication and its significance",
            "Mitosis: prophase, metaphase, anaphase, telophase, and cytokinesis",
            "Meiosis I and II: the two-division process and how it halves chromosome number",
            "Sources of genetic variation: crossing over, independent assortment, random fertilisation",
            "Cell cycle checkpoints: G1, G2, and spindle assembly checkpoint",
            "Cyclins and CDKs: the molecular machinery of cell cycle regulation",
            "Cancer as a disease of cell cycle dysregulation: oncogenes and tumour suppressor genes"
        ]
    },

    concepts: [
        "The cell cycle is a regulated sequence of events leading to cell division",
        "Mitosis produces two genetically identical diploid daughter cells",
        "Meiosis produces four genetically unique haploid gametes",
        "Checkpoints regulate progression through the cell cycle",
        "Crossing over and independent assortment generate genetic variation",
        "Dysregulation of the cell cycle underlies cancer"
    ],

    theory: "Cell division encompasses two distinct processes serving different biological roles. Mitosis maintains genetic integrity during growth and repair by producing identical daughter cells. Meiosis generates haploid gametes with novel genetic combinations through two sequential divisions and recombination events. Both are orchestrated by conserved molecular machinery and governed by checkpoint systems that ensure fidelity.",

    keyDefinitions: {
        "Cell Cycle":             "The ordered sequence of events by which a cell grows and divides into two daughter cells",
        "Interphase":             "The period between divisions: G1 (growth), S (DNA synthesis), G2 (preparation for division)",
        "Mitosis":                "Nuclear division producing two genetically identical diploid nuclei",
        "Meiosis":                "Two-stage nuclear division producing four genetically unique haploid cells",
        "Chromosome":             "Condensed DNA-protein structure; each consists of two sister chromatids joined at the centromere after replication",
        "Sister Chromatids":      "Two identical DNA molecules joined at the centromere after replication; separated in mitotic anaphase",
        "Homologous Chromosomes": "Chromosome pairs carrying the same genes but potentially different alleles; one from each parent",
        "Diploid (2n)":           "Cell containing two complete sets of chromosomes (one from each parent)",
        "Haploid (n)":            "Cell containing one complete set of chromosomes; produced by meiosis",
        "Chromatid":              "One of the two identical strands of a replicated chromosome",
        "Centromere":             "The region where sister chromatids are joined and where the kinetochore forms",
        "Kinetochore":            "Protein complex at the centromere that attaches to spindle microtubules",
        "Spindle Fibres":         "Microtubule structures that separate chromosomes during division",
        "Cytokinesis":            "Division of the cytoplasm following nuclear division",
        "Crossing Over":          "Exchange of DNA segments between non-sister chromatids of homologous chromosomes during meiosis I",
        "Chiasmata":              "Points of physical contact between homologous chromosomes during crossing over",
        "Bivalent (Tetrad)":      "Structure of two homologous chromosomes, each consisting of two chromatids, held together during meiosis I",
        "Independent Assortment": "Random orientation of homologous chromosome pairs at the metaphase I plate",
        "Cyclin":                 "Regulatory protein whose concentration oscillates through the cell cycle",
        "CDK":                    "Cyclin-dependent kinase; protein kinase activated by cyclin binding to drive cell cycle transitions",
        "Checkpoint":             "Quality control mechanism that arrests cell cycle progression if conditions are not met",
        "Oncogene":               "Mutated proto-oncogene that drives uncontrolled cell proliferation",
        "Tumour Suppressor Gene": "Gene whose loss of function removes a brake on cell division (e.g. p53, Rb)"
    },

    mechanismOfAction: {
        cellCycle: {
            G1: {
                description: "First gap phase: cell grows, synthesises proteins, receives growth signals",
                checkpoint: "G1 restriction point — CDK4/6–cyclin D complex phosphorylates Rb, releasing E2F transcription factor to drive S phase entry",
                duration: "Highly variable; the principal determinant of overall cell cycle length"
            },
            S: {
                description: "Synthesis phase: semi-conservative DNA replication; each chromosome produces two sister chromatids",
                key: "Each origin of replication fires once and only once per cycle"
            },
            G2: {
                description: "Second gap phase: continued growth, DNA damage repair, synthesis of mitotic proteins",
                checkpoint: "G2/M checkpoint — CDK1–cyclin B (MPF) complex activation required for mitotic entry"
            },
            M: {
                description: "Mitotic phase: nuclear division (mitosis or meiosis) followed by cytokinesis"
            }
        },
        mitoticSpindle: {
            formation: "Centrosomes duplicate in S phase; migrate to opposite poles in prophase",
            attachment: "Kinetochore microtubules attach to kinetochores on sister chromatids; polar microtubules overlap at the cell midpoint",
            segregation: "Motor proteins on kinetochore microtubules pull chromatids poleward; polar microtubules push poles apart",
            checkpoint: "Spindle assembly checkpoint (SAC): unattached kinetochores produce wait-anaphase signal (inhibits APC/C–Cdc20)"
        }
    },

    mitosisStages: {
        prophase: {
            events: [
                "Chromatin condenses into visible chromosomes (each consisting of two sister chromatids)",
                "Mitotic spindle begins to form from centrosomes",
                "Nucleolus disappears",
                "Nuclear envelope begins to break down (late prophase / prometaphase)"
            ]
        },
        prometaphase: {
            events: [
                "Nuclear envelope completely disintegrates",
                "Spindle microtubules attach to kinetochores",
                "Chromosomes begin to migrate toward the cell equator"
            ]
        },
        metaphase: {
            events: [
                "Chromosomes align at the metaphase plate (cell equator)",
                "Each sister chromatid is attached to microtubules from opposite poles (bi-orientation)",
                "Spindle assembly checkpoint satisfied — all kinetochores attached"
            ]
        },
        anaphase: {
            events: [
                "Sister chromatids are separated simultaneously — cohesin is cleaved by separase",
                "Former sister chromatids (now called chromosomes) are pulled to opposite poles",
                "Cell elongates as polar microtubules push poles apart"
            ]
        },
        telophase: {
            events: [
                "Chromosomes arrive at poles and begin to decondense",
                "Nuclear envelopes reform around each set of chromosomes",
                "Nucleolus reappears",
                "Mitotic spindle disassembles"
            ]
        },
        cytokinesis: {
            animal: "Contractile ring of actin and myosin pinches the cell in two (cleavage furrow)",
            plant:  "Cell plate forms from Golgi vesicles fusing at the cell midline, building a new cell wall"
        }
    },

    meiosisStages: {
        meiosisI: {
            prophaseI: {
                events: [
                    "Homologous chromosomes pair (synapsis) forming bivalents (tetrads)",
                    "Crossing over occurs between non-sister chromatids at chiasmata",
                    "Chromatin condenses; nuclear envelope breaks down"
                ],
                significance: "Crossing over generates new combinations of alleles — the primary source of genetic variation in meiosis"
            },
            metaphaseI: {
                events: [
                    "Bivalents align at the metaphase plate",
                    "Each homologue is attached to microtubules from one pole (contrast with mitosis: each SISTER CHROMATID from opposite poles)",
                    "Orientation of each bivalent is random — independent assortment"
                ]
            },
            anaphaseI: {
                events: [
                    "Homologous chromosomes are separated to opposite poles",
                    "Sister chromatids remain joined at the centromere — cohesin is protected at the centromere by shugoshin",
                    "Chromosome number is halved at each pole"
                ]
            },
            telophaseI: {
                events: [
                    "Two haploid nuclei form (each nucleus contains one chromosome from each homologous pair)",
                    "Cytokinesis produces two haploid cells"
                ]
            }
        },
        meiosisII: {
            description: "Essentially a mitotic division of each haploid cell produced by meiosis I",
            prophaseII:  "Chromosomes condense; new spindle forms — no further replication",
            metaphaseII: "Chromosomes (each still two sister chromatids) align at metaphase plate; sister chromatids bi-orient",
            anaphaseII:  "Sister chromatids separate — cohesin at centromere cleaved by separase",
            telophaseII: "Four haploid nuclei form; cytokinesis produces four haploid cells",
            outcome:     "Four genetically unique haploid cells (gametes in animals; spores in plants)"
        }
    },

    sourcesOfGeneticVariation: {
        crossingOver: {
            when:          "Prophase I — between non-sister chromatids of homologous chromosomes",
            mechanism:     "Double-strand breaks repaired using the homologous chromosome as template, resulting in reciprocal exchange of DNA segments",
            result:        "Recombinant chromatids carrying new combinations of alleles",
            frequency:     "On average 1–3 crossovers per chromosome pair per meiosis in humans"
        },
        independentAssortment: {
            when:          "Metaphase I — random orientation of bivalents",
            mechanism:     "Each homologous pair orients independently; which homologue goes to which pole is random",
            combinations:  "2ⁿ possible chromosome combinations, where n = haploid number (2²³ ≈ 8 million for humans)",
            result:        "Gametes with different combinations of maternal and paternal chromosomes"
        },
        randomFertilisation: {
            mechanism:     "Any sperm (8 million possible) can fertilise any egg (8 million possible)",
            combinations:  "Approximately 64 trillion (8×10⁶ × 8×10⁶) unique zygotes possible — before crossing over is even considered"
        }
    },

    cellCycleRegulation: {
        cyclinsAndCDKs: {
            principle:    "CDKs are constitutively expressed but inactive alone; cyclin binding activates them",
            G1CDK:        "Cyclin D–CDK4/6: responds to growth signals; phosphorylates Rb to allow G1→S transition",
            SCDK:         "Cyclin E–CDK2: drives entry into S phase and initiation of DNA replication",
            G2CDK:        "Cyclin A–CDK1: promotes G2→M transition",
            MCDK:         "Cyclin B–CDK1 (MPF, Maturation Promoting Factor): drives entry into mitosis",
            degradation:  "Cyclins are degraded by the APC/C ubiquitin ligase at the end of each phase — creates the oscillatory cycle"
        },
        checkpoints: {
            G1Checkpoint: {
                monitors:  "Cell size, nutrient availability, growth factor signals, DNA integrity",
                mechanism: "If DNA is damaged, p53 accumulates → transcribes p21 → p21 inhibits CDK2–cyclin E → S phase blocked",
                outcome:   "Cell arrests in G1 to repair DNA before replication"
            },
            G2Checkpoint: {
                monitors:  "DNA replication completeness, DNA damage",
                mechanism: "ATM/ATR kinases detect damage → CHK1/CHK2 → degrade CDC25 phosphatase → CDK1 remains inactive → no mitotic entry",
                outcome:   "Cell arrests in G2 to repair DNA before chromosome segregation"
            },
            spindleAssemblyCheckpoint: {
                monitors:  "Kinetochore attachment to spindle microtubules",
                mechanism: "Unattached kinetochores produce MCC (Mitotic Checkpoint Complex) → inhibits APC/C–Cdc20 → securin and cyclin B not degraded → separase inactive → no anaphase",
                outcome:   "Anaphase blocked until every kinetochore is properly attached — prevents chromosome mis-segregation"
            }
        },
        cancerConnections: {
            oncogenes: {
                definition:   "Mutated proto-oncogenes that are constitutively active, driving uncontrolled proliferation",
                examples:     "RAS (GTPase stuck in active conformation), MYC (transcription factor amplified), HER2 (growth factor receptor amplified)",
                mechanism:    "Accelerate entry into S phase regardless of growth signals"
            },
            tumourSuppressors: {
                definition:   "Genes that normally constrain proliferation; loss of both copies (Knudson two-hit hypothesis) removes the brake",
                examples:     "p53 (guardian of the genome — induces repair, arrest, or apoptosis), Rb (blocks E2F transcription factor), BRCA1/2 (DNA repair)",
                mechanism:    "Without brakes, cells progress through checkpoints with damaged DNA — accumulating further mutations"
            }
        }
    },

    comparison: {
        mitosisMeiosisTable: {
            purpose:              { mitosis: "Growth, repair, asexual reproduction",       meiosis: "Gamete/spore production for sexual reproduction" },
            divisions:            { mitosis: "One",                                         meiosis: "Two (meiosis I and II)" },
            startingCell:         { mitosis: "Diploid (2n)",                                meiosis: "Diploid (2n)" },
            daughterCells:        { mitosis: "Two",                                         meiosis: "Four" },
            ploidy:               { mitosis: "Diploid (2n)",                                meiosis: "Haploid (n)" },
            geneticIdentity:      { mitosis: "Identical to parent cell",                    meiosis: "Genetically unique" },
            synapsis:             { mitosis: "Does not occur",                              meiosis: "Occurs in prophase I" },
            crossingOver:         { mitosis: "Does not occur",                              meiosis: "Occurs in prophase I between non-sister chromatids" },
            homologueSeparation:  { mitosis: "Homologues do not pair or separate",          meiosis: "Homologues separate in anaphase I" },
            sisterchromatidSep:   { mitosis: "Anaphase",                                    meiosis: "Anaphase II" },
            occurrence:           { mitosis: "Somatic cells throughout life",               meiosis: "Germline cells; gonads only" }
        }
    },

    chromosomalAbnormalities: {
        nondisjunction: {
            definition:  "Failure of chromosomes or chromatids to separate correctly during meiosis I or II (or mitosis)",
            meiosisI:    "Both homologues travel to same pole → one gamete with 2 copies, one with 0; affects an entire homologous pair",
            meiosisII:   "Sister chromatids fail to separate → one gamete with 2 chromatids, one with 0 (other two normal); affects only one chromatid",
            consequences: "Aneuploid gametes: trisomy (2n+1) or monosomy (2n−1) after fertilisation",
            examples:    "Trisomy 21 (Down syndrome), Trisomy 18 (Edwards), Monosomy X (Turner syndrome, 45,X), XXY (Klinefelter syndrome)"
        }
    },

    applications: [
        "Cancer biology: understanding how checkpoint failure drives tumour formation",
        "Chemotherapy: drugs targeting rapidly dividing cells (taxanes stabilise spindle; vinca alkaloids prevent polymerisation)",
        "Fertility and IVF: understanding meiosis in oocyte maturation and sperm production",
        "Prenatal diagnosis: karyotyping for chromosomal abnormalities (non-disjunction outcomes)",
        "Genetic mapping: using crossing-over frequency to determine gene distance",
        "Stem cell biology: controlling cell cycle re-entry for tissue regeneration",
        "Gene therapy: exploiting cell division to introduce corrective DNA"
    ],

    topicSummary: {
        coreInsights: [
            "The cell cycle is a tightly controlled programme with four phases — G1, S, G2, M — each gated by checkpoints that verify conditions before allowing progression.",
            "Mitosis produces two diploid daughter cells genetically identical to the parent; its purpose is growth, repair, and asexual reproduction.",
            "Meiosis involves two sequential divisions (meiosis I separating homologues; meiosis II separating sister chromatids) to produce four haploid genetically unique cells.",
            "Genetic variation in meiosis arises from three independent mechanisms: crossing over (prophase I), independent assortment (metaphase I), and random fertilisation.",
            "Cell cycle progression is driven by cyclin–CDK complexes and arrested at checkpoints by inhibitory proteins responding to DNA damage, incomplete replication, or attachment errors.",
            "Cancer results from accumulated mutations in proto-oncogenes (gain of function) and tumour suppressor genes (loss of function) that collectively disable checkpoints and promote uncontrolled division.",
            "Non-disjunction during meiosis produces aneuploid gametes; when fertilised, these cause trisomies or monosomies, most of which are lethal — a small subset (e.g. trisomy 21) are viable."
        ],
        keyEquations: {
            independentAssortment:   "Possible chromosome combinations = 2ⁿ, where n = haploid number",
            randomFertilisation:     "Possible unique zygotes ≈ (2ⁿ)² before accounting for crossing over",
            mitoticIndex:            "Mitotic Index = (number of cells in mitosis) / (total number of cells) × 100%",
            replicationTiming:       "Each origin fires once per S phase; total S phase duration ∝ genome size / number of active origins"
        },
        comparisonSummary: {
            mitosis:   "1 division | 2 diploid identical cells | no synapsis | no crossing over",
            meiosisI:  "Reductive division | homologues separate | crossing over | 2 haploid cells",
            meiosisII: "Equational division | sister chromatids separate | no new replication | 4 haploid cells"
        },
        commonMistakesToAvoid: [
            "Mitosis does NOT halve chromosome number — that is meiosis I",
            "Meiosis II is NOT the same as mitosis — meiosis II cells are haploid; mitotic cells are diploid",
            "Crossing over occurs between NON-SISTER chromatids of HOMOLOGOUS chromosomes — not between sister chromatids",
            "Sister chromatids are NOT separated in meiosis I — only homologous chromosomes are; sister chromatids stay joined until anaphase II",
            "Independent assortment concerns the ORIENTATION of bivalents — it is about whole chromosomes, not alleles within a chromosome",
            "The spindle assembly checkpoint does not directly sense DNA damage — that is the G2 checkpoint",
            "Non-disjunction in meiosis I affects the entire homologous pair; non-disjunction in meiosis II affects only one chromatid — these produce different ratios of aneuploid gametes"
        ],
        connections: [
            "Genetics: Mendelian ratios arise directly from independent assortment and segregation of homologues in meiosis",
            "Evolution: crossing over and independent assortment are the primary molecular generators of genetic diversity driving natural selection",
            "Cancer biology: oncogenes and tumour suppressors are the mutational targets that convert controlled division into neoplasia",
            "Development: precise mitotic control is essential for embryogenesis, tissue morphogenesis, and organ sizing",
            "Pharmacology: spindle poisons (taxol, vincristine) exploit the spindle assembly checkpoint as an anti-cancer strategy"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate all stages of mitosis and both divisions of meiosis with correct chromosome behaviour at each stage?",
            "Can you explain the key differences between mitosis and meiosis in a comparison table?",
            "Can you calculate the number of possible gamete combinations from independent assortment for a given haploid number?",
            "Can you explain how crossing over generates new allele combinations and where it occurs?",
            "Can you describe the molecular mechanism of the G1, G2, and spindle assembly checkpoints?",
            "Can you connect checkpoint failure to cancer using specific examples of oncogenes and tumour suppressors?",
            "Can you predict the outcomes of non-disjunction at meiosis I vs meiosis II?"
        ]
    }
},

const EndSection4 = "close"