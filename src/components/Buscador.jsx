const Buscador = ({data, setCharacterFilter, setSearch}) => {
  const handleInput = (e) => {
    setSearch = e.target.value.toLowerCase()
      const result = data.filter((char) => 
        char.name.toLowerCase().includes(setSearch) ||
        char.title.toLowerCase().includes(setSearch) ||
        char.house.toLowerCase().includes(setSearch) 
      )
    setCharacterFilter(result)
  }
  return (
    <>
      <div>
        <input onChange={handleInput}
          type='text'
          name='search'
          placeholder="Find Arya Stark"
      />
      </div>
    </>
  )
}
export default Buscador
