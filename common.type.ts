export enum CountryTypes {
  US = "US",
  KR = "KR",
}

export enum CurrencyTypes {
  KRW = "KRW",
  USD = "USD",
}

export enum LanguageTypes {
  KO = "KO",
  EN = "EN",
}

export type CountryType = keyof typeof CountryTypes;
export type CurrencyType = keyof typeof CurrencyTypes;
export type LanguageType = keyof typeof LanguageTypes;
