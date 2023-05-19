import React, { useEffect } from 'react'
import { InputSearch } from '../common/inputSearch/inputSearch'
import { Col, Row } from 'antd'
import { RecipyCardSection } from '../common/cards/recipyCard'
import style from './styles/searched.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchThunk } from '../../store/slices/search/searchSlice'

export const SearchedComponent = () => {
  const dispatch = useDispatch()
  const param = useParams()
 const { searchData } = useSelector(({ search }) => search);

    useEffect(() => {
        dispatch(getSearchThunk({search: param.name}))
        console.log(searchData)
    }, [dispatch, param.name, searchData])
    
  return (
    <div className={style.searchedPage}>
        <div className="container">
        <h1>Search results</h1>
        <InputSearch number={searchData.length}/>
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
