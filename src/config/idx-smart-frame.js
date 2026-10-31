function getApprovedSmartFrameUrl(value) {
  if (!value) return null

  try {
    const url = new URL(value)

    if (url.protocol !== 'https:' || url.username || url.password) return null

    return url.toString()
  } catch {
    return null
  }
}

function getApprovedSmartFrameOrigin(value) {
  const url = getApprovedSmartFrameUrl(value)

  return url ? new URL(url).origin : null
}

module.exports = {
  getApprovedSmartFrameOrigin,
  getApprovedSmartFrameUrl,
}
