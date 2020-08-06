var boarding = [
  {
    'from': 'Barcelona',
    'to': 'New York',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Flight',
    'transportno': 'B33',
    'seatno': 'Y15'
  },
  {
    'from': 'Barcelona',
    'to': 'Gerona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'we'
  },
  {
    'from': 'Madrid',
    'to': 'Barcelona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  },
  {
    'from': 'New York',
    'to': 'Stockholm',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Flight',
    'transportno': 'M31, M32, M33',
    'seatno': 'we'
  },
  {
    'from': 'Gerona',
    'to': 'Barcelona',
    'instruction': '',
    'time': '2018-02-02 20:05',
    'transport': 'Bus',
    'transportno': 'M31, M32, M33',
    'seatno': 'Any'
  }
]

boarding.sort((a, b) => {return a.seatno !== b.seatno ? 0 : -1})

console.log(boarding )
