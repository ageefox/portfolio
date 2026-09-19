export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  result: string;
  repository: string;
  externalLink?: string;
  image?: string;
  imageAlt?: string;
  metrics: Array<{ value: string; label: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "effr",
    number: "01",
    title: "Forecasting the Effective Federal Funds Rate",
    shortTitle: "EFFR forecasting",
    category: "Time series · Economics · Machine learning",
    summary:
      "A one-month-ahead forecasting study built around chronological evaluation, past-only features, and a genuinely later test period.",
    result:
      "Ridge reduced external-period RMSE from 0.1922 to 0.1606 percentage points relative to persistence. Its smaller MAE advantage remained inconclusive.",
    repository: "https://github.com/ageefox/effr-forecasting-ml",
    image: "/images/effr-external-forecast.png",
    imageAlt:
      "Actual effective federal funds rate and forecasts from persistence, Ridge, and Random Forest from 2017 through 2026, with trailing twelve-month errors.",
    metrics: [
      { value: "114", label: "external test months" },
      { value: "0.1606", label: "Ridge external RMSE" },
      { value: "0.0317", label: "RMSE improvement vs. persistence" },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "Can lagged rate history improve on simply repeating the previous month's effective federal funds rate? The persistence forecast is difficult to beat because the Federal Reserve guides EFFR toward a target rate or range and changes generally arrive in steps.",
        ],
      },
      {
        title: "Method",
        paragraphs: [
          "The development study uses monthly Federal Reserve H.15 data through February 2017. Every feature ends at the previous month: rate lags, trailing means and standard deviations, and the preceding monthly change.",
          "Five expanding folds select the Ridge and Random Forest settings. Those choices are then frozen, the models are refitted through February 2017, and the next 114 official monthly observations are evaluated without further tuning.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "Ridge achieved the lowest external RMSE, while persistence remained competitive on MAE. A paired moving-block bootstrap placed Ridge's RMSE improvement between 0.0070 and 0.0568 percentage points at the 95% level; the MAE interval crossed zero.",
          "Random Forest remained worse. The result favors a modest linear correction to persistence, not a claim that a complex model can anticipate monetary-policy decisions.",
        ],
      },
      {
        title: "Limits",
        paragraphs: [
          "This is a rolling one-step study of the realized monthly rate. It does not forecast FOMC decisions. A policy model would require meeting dates, the prevailing target range, market expectations, and real-time macroeconomic vintages.",
        ],
      },
    ],
    tools: ["Python", "pandas", "scikit-learn", "pytest", "GitHub Actions"],
  },
  {
    slug: "craft-forum-nlp",
    number: "02",
    title: "Craft Forum NLP",
    shortTitle: "Craft Forum NLP",
    category: "NLP · Evaluation · Small data",
    summary:
      "A four-class text benchmark that keeps entire forum conversations out of training and asks whether larger language models actually generalize better.",
    result:
      "TF–IDF with logistic regression reached 0.310 macro F1 on unseen threads. Both DistilBERT variants remained close to the majority baseline.",
    repository: "https://github.com/ageefox/craft-forum-nlp",
    image: "/images/craft-forum-model-comparison.png",
    imageAlt:
      "Horizontal bar chart showing TF-IDF with logistic regression leading the unseen-thread test set at 0.310 macro F1.",
    metrics: [
      { value: "212", label: "manually labeled posts" },
      { value: "28", label: "source threads" },
      { value: "0.310", label: "best test macro F1" },
    ],
    sections: [
      {
        title: "Question",
        paragraphs: [
          "The dataset distinguishes technical help, showcase reactions, critique, and broader opinion in art and craft forums. The central question is whether a model trained on a small dataset can generalize to conversations it has never seen.",
        ],
      },
      {
        title: "Method",
        paragraphs: [
          "All posts from the same forum thread stay in one split. Nineteen threads form the training set, five form validation, and four remain for the final test. This prevents the models from benefiting from repeated vocabulary and context inside the same discussion.",
          "The benchmark compares a majority baseline, class-balanced TF–IDF logistic regression, DistilBERT, and DistilBERT with class weights. Macro F1 is primary because the four labels are imbalanced.",
        ],
      },
      {
        title: "Result",
        paragraphs: [
          "The simpler TF–IDF model produced all four labels and had the strongest macro F1. Unweighted DistilBERT predicted the majority class for every test example; class weighting changed its predictions without producing stable generalization.",
          "The result is useful precisely because it is not a model-size success story. With 175 development examples, split design mattered more than model complexity.",
        ],
      },
      {
        title: "Limits",
        paragraphs: [
          "Four held-out threads expose the leakage risk but cannot represent every art and craft community. More independent discussions and reply context would be needed before treating the classifier as a deployable system.",
        ],
      },
    ],
    tools: ["Python", "scikit-learn", "PyTorch", "Transformers", "pytest"],
  },
  {
    slug: "pathreview",
    number: "03",
    title: "PathReview contribution",
    shortTitle: "PathReview",
    category: "Open source · Testing · RAG",
    summary:
      "A contained contribution to an unfamiliar Python codebase: diagnose an ineffective snapshot test and replace it with real regression protection.",
    result:
      "The revised test protects every prompt template and version, catches inventory changes, and passed all 42 focused tests plus a deliberate mutation check.",
    repository: "https://github.com/ageefox/pathreview",
    externalLink: "https://github.com/ascherj/pathreview/pull/769",
    metrics: [
      { value: "42", label: "focused tests passed" },
      { value: "SHA-256", label: "per-version snapshots" },
      { value: "1", label: "contained test contribution" },
    ],
    sections: [
      {
        title: "Problem",
        paragraphs: [
          "The existing test computed a digest for each versioned prompt template but only asserted that the result had the expected string length. Any prompt could change and the test would continue to pass.",
        ],
      },
      {
        title: "Change",
        paragraphs: [
          "The replacement stores a reviewed SHA-256 snapshot for every template and version. It also checks that the snapshot inventory matches the production template inventory, so additions, removals, and renames require an explicit review.",
          "A deliberate prompt mutation confirmed that the new assertion failed on the affected version. The original text was restored and all 42 focused tests passed.",
        ],
      },
      {
        title: "Scope",
        paragraphs: [
          "This was a test-only contribution, not authorship of PathReview's application or RAG architecture. The upstream course contribution period ended before the change was merged, so the finished commit and checks are preserved in the fork and linked pull request.",
        ],
      },
    ],
    tools: ["Python", "pytest", "SHA-256", "Git", "GitHub Actions"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
