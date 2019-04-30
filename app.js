//console.table(DATA)

//console.log(DATA)
//const DATA = DATA;

const filterHouse = (DATA, condition) => {
  const resultFilertHouse = DATA.filter(element => {
    return element.house === condition;
  })
  return resultFilertHouse;
}

window.filterHouse = filterHouse;