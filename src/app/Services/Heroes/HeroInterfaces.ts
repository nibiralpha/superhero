export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}
export interface Appearance {
  gender: string;
  race: string | null;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}
export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string | null;
  alignment: string;
}
export interface Work {
  occupation: string;
  base: string;
}
export interface Connections {
  groupAffiliation: string;
  relatives: string;
}
export interface HeroImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}
export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: HeroImages;
}
export interface HeroState {
  list: Hero[];
  details: Partial<Hero>;
  loading: boolean;
  error: boolean;
  errorResponse: Record<string, unknown>;
}
