async function updateHits (doc) {
  try {
    if (!doc.hits) {
      doc.hits = 1
    } else {
      doc.hits += 1
    }

    return doc.save()
  } catch (e) {
    throw e
  }
}

module.exports = updateHits
