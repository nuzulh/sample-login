function calculateMinMax(values: number[][]) {
  let minMax = Infinity

  for (const val of values) {
    const currentMax = Math.max(...val)
    minMax = Math.min(minMax, currentMax)
  }

  return minMax
}

export default calculateMinMax
