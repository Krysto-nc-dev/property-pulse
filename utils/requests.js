const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// fetch all properties
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

// Fetch single property

async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null
    }
    const res = await fetch(`${apiDomain}/properties/${id}`)
    if (!res.ok) {
      throw new Error(
        `Erreur lors de la récupération de la propriété : ${res.status}`,
      )
    }
    return res.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export { fetchProperties, fetchProperty }
