import minimist from 'minimist'

const args = minimist<{
  dir: string,
  file: string,
  port: number,
  f: string,
  d: string,
  p: number,

}>(process.argv.slice(2))

export default args