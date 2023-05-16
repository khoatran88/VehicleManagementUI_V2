export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const removeSpace = (string: string) => {
  return string.replace(/\s+/g, '')
}

export const removeSlash = (string: string) => {
  return string.replace(/\//g, '')
}
