import axios from 'axios'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'

const MiApi = ({characterFilter, setData, setCharacterFilter}) => {
  const findCharacter = () => {
      const apiUrl = `https://thronesapi.com/api/v2/Characters`
        axios.get(apiUrl).then((response) => {
          const apiResponse = response.data.map((ele) => {
            return {
              id: ele.id,
              name: ele.fullName,
              image: ele.imageUrl,
              house: ele.family,
              title: ele.title,
            }
          }).sort((a, b) => a.name.localeCompare(b.name))
            setData(apiResponse)
            setCharacterFilter(apiResponse)
          }).catch((error) => {
            console.log("error obtaing API info:", error);
          })
        } 
  useEffect(() => {
    document.title = 'Got Characters';
    findCharacter()
  }, [])
  return (
    <>
      {characterFilter.map((e) => (
        <div key={e.id} className='container'>
          <Card>
            <Card.Img className='img' src={e.image} alt={e.name} />                          
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  House: {e.house}
                </Card.Text>
                <Card.Text>
                  Title: {e.title}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      ))} 
    </>
  )
}
export default MiApi
