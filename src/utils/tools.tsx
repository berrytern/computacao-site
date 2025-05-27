export function getPath(path: string){
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? '/computacao-site' + path : path
}