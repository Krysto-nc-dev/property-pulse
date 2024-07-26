const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties() {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return []
    }
    const res = await fetch(`${apiDomain}/properties`)
    if (!res.ok) {
      throw new Error(
        `Erreur lors de la récupération des propriétés : ${res.status}`,
      )
    }
    return res.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export { fetchProperties }
