export type HttpMethod = 'get' | 'post'

export interface RouteConfig {
  path: string,
  method?: HttpMethod,
  resBody?: Record<string, unknown>,
  delay?: number,
  errRes?: Record<string, unknown>,
  regex: RegExp
}

// const mockConfigList:Config[]  = [
//   {
//     path: "/",
//     resBody: {
//       code: 200,
//       success: true,
//       data: "hello, world",
//     }
//   },
//   {
//     path: "/login",
//     resBody: {
//       code: 200,
//       success: true,
//       data: {
//         name: "zhao-huo-long",
//         email: "lijiuyi1995@outlook.com"
//       }
//     }
//   }
// ]

// export default mockConfigList