describe('filterHouse', () => {
  const data = [
    {
      "name": "Harry Potter",
      "house": "Gryffindor"
    },
    {
      "name": "Draco Malfoy",
      "house": "Slytherin"
    },
    {
      "name": "Cedric Diggory",
      "house": "Hufflepuff"
    }
  ]

  it('deberia ser una function', () => {
    assert.equal(typeof filterHouse, 'function');
  });

  it('debería retornar el objeto Harry Potter al filtrar por house Gryffindor', () => {
    assert.deepEqual(window.filterHouse(data, 'Gryffindor'), [{"name": "Harry Potter",
    "house": "Gryffindor"}])
  });

  it('debería retornar el objeto Draco Malfoy al filtrar por house Slytherin', () => {
    assert.deepEqual(window.filterHouse(data, 'Slytherin'), [{"name": "Draco Malfoy",
    "house": "Slytherin"}])
  });

})