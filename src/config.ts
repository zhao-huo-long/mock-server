export type HttpMethod = 'get' | 'post'

export interface RouteConfig {
  path: string,
  method?: HttpMethod,
  resBody?: Record<string, unknown>,
  delay?: number,
  errRes?: Record<string, unknown>,
  regex: RegExp
}