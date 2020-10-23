export interface Url {
  slug: string;
  url: string;
}

export interface Error {
  name: string;
  message: string;
  stack?: string;
  status?: number;
}
