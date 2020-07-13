// Adapt response (array of objects) object keys, according to the mapping
const responseAdapter = (response, mapping) => {
  return response.map(item => {
    const normalized = {}
    
    // Normalize each response's item key, according to the mapping
    Object.keys(item).forEach(key => (
      normalized[mapping[key]] = item[key]))
    return normalized
  })
}

// API Response
const response = [{
  a: 'The title',
  b: 'Description',
  c: '1527517117878',
  d: 'Category'
}]

// How to Adapt (normalize) the API Response
const mapping = {
  a: 'title',
  b: 'description',
  c: 'time',
  d: 'category'
}

// Usage
console.log(responseAdapter(response, mapping))