import  { useEffect, useState } from 'react'
import { InputSearch } from '../common/inputSearch/inputSearch'
import { Col, Row } from 'antd'
import { RecipyCardSection } from '../common/cards/recipyCard'
import style from './styles/searched.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const SearchedComponent = () => {
  const [searchData, setSearchData] = useState([]);
  const param = useParams()

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&query=${param.name}`
      )
      .then((e) => {
        setSearchData(e.data.results);
        console.log(e.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.name]);
    
  return (
    <div className={style.searchedPage}>
        <div className="container">
        <h1>Search results</h1>
        <InputSearch number={searchData?.length}/>
        <div className="recipyCards">
          <Row gutter={20}>
            {searchData.length > 0 && searchData?.map((recipy) => (
              <Col xs={24} md={12} lg={6} key={recipy.id}>
                <RecipyCardSection item={recipy} />
              </Col>
            ))}
          </Row>
        </div>
        
      </div>
    </div>
  )
}
