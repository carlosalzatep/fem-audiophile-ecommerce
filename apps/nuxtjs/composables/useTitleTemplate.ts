// set page Title using useHead
export default function (paramName: string | string[]) {
  const pageTitle = `
    ${paramName[0].toUpperCase()}${paramName.slice(1)}
    `
  return useHead({ title: pageTitle })
}
