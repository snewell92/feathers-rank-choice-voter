class Election {
  constructor(candidate_list) {
    this.candidates = candidate_list
    this.results = []
  }

  runElection(votes) {
    const winner = this.tallyVotes()
    const n = this.candidates.length

    const results = votes.reduce((count, vote) => {
      const key = encodeURIComponent(vote.name)

      vote.forEach((candidate, i) => {
        const key = encodeURIComponent(candidate)
        const points = n - i

        if(typeof count[key] === "undefined") count[key] = 0

        count[key] += points
      })

      return count
    }, {})

    let results_array = []

    for(candidate in results) {
      results_array.push({ candidate: candidate, points: results[candidate] })
    }

    results_array.sort((a, b) => {
      return b.points - a.points
    })

    this.results = results_array
  }

  getResults(limit) {
    if(typeof limit === "undefined") return this.results

    if(this.results.length > limit) return this.results.slice(0, limit)
    else return this.results
  }
}

export default Election
