import express from 'express'
import {RouteConfig} from './config'
import { pathToRegexp } from 'path-to-regexp'
import cors from 'cors'
import fs from 'fs'
import args from './cli'
import mockjs from 'mockjs'

const app = express()
app.use(cors())

let configFile = JSON.parse(fs.readFileSync(args.file,).toString("utf-8")) || {}

fs.watch('./test.json', {
  'encoding': "utf-8",
}, () => {
  configFile = JSON.parse(fs.readFileSync(args.file).toString("utf-8") || "{}")
})

app.all("*", async function  (request, response){
  const routes = Object.keys(configFile).map(i => ({
    ...configFile[i],
    path: i,
    regex: pathToRegexp(i)
  })) as RouteConfig[]
  const config = routes.find(i => !!i.regex.exec(request.path))
  if(config) {
    setTimeout(() => {
      response.send(mockjs.mock(config?.resBody || {}))
    }, config.delay || 0)
    return
  }
  return response.send("mock server 404")
})

const port = args.p || args.port || 5656

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})