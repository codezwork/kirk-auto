export interface CreditSituation {
  id: string;
  label: string;
  shortLabel: string;
  phrase: string;
  aprLo: number;
  aprHi: number;
  defaultTermMonths: number;
  description: string;
}

export const SITUATIONS: CreditSituation[] = [
  {
    id: 'newcomer',
    label: 'New to Canada',
    shortLabel: 'Newcomer',
    phrase: "if you're new to Canada",
    aprLo: 8.99,
    aprHi: 13.99,
    defaultTermMonths: 84,
    description: "Work permit, PR, or recent arrival with zero Canadian credit history. We work with lenders who accept your international background and proof of income."
  },
  {
    id: 'rebuild',
    label: 'Rebuilding credit',
    shortLabel: 'Rebuilding',
    phrase: "if you're rebuilding credit",
    aprLo: 12.99,
    aprHi: 19.99,
    defaultTermMonths: 84,
    description: "Missed payments, collections, or past credit dings. An auto loan is one of the fastest ways in Canada to push your credit score back above 700."
  },
  {
    id: 'first',
    label: 'First car or no credit',
    shortLabel: 'First car',
    phrase: 'for a first car',
    aprLo: 9.99,
    aprHi: 15.99,
    defaultTermMonths: 84,
    description: "Young driver or never had a loan or credit card before. We help you establish credit without requiring an impossible co-signer."
  },
  {
    id: 'proposal',
    label: 'Bankruptcy or consumer proposal',
    shortLabel: 'Proposal/Bankruptcy',
    phrase: 'after a proposal or bankruptcy',
    aprLo: 17.99,
    aprHi: 24.99,
    defaultTermMonths: 84,
    description: "Actively in a proposal or recently discharged. Kirk works with specialized lenders who lend based on current income, not past discharge dates."
  },
  {
    id: 'selfemp',
    label: 'Self-employed or gig work',
    shortLabel: 'Self-employed',
    phrase: "if you're self-employed",
    aprLo: 10.99,
    aprHi: 17.99,
    defaultTermMonths: 84,
    description: "Trades, Uber, contracting, or small business. Traditional banks struggle with T4-less income; we use bank statements to verify real cash flow."
  }
];

export function calculateBiWeekly(price: number, apr: number, termMonths: number = 84): number {
  const payments = (termMonths / 12) * 26;
  const r = (apr / 100) / 26;
  if (r === 0) return Math.round(price / payments);
  const payment = (price * r) / (1 - Math.pow(1 + r, -payments));
  return Math.round(payment);
}

export function formatPrice(num: number): string {
  return '$' + num.toLocaleString('en-CA');
}

export function getPaymentRange(price: number, sit: CreditSituation, termMonths: number = 84): string {
  const lo = calculateBiWeekly(price, sit.aprLo, termMonths);
  const hi = calculateBiWeekly(price, sit.aprHi, termMonths);
  return `${formatPrice(lo)}–${formatPrice(hi)}`;
}
