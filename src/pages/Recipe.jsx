
import {SingleRecipyDetialsComponent} from '../components/singleRecipyDetails/index'

const Recipe = () => {
  // const [recipe, setRecipe] = useState({})
  // const [active, setActive] = useState('instructions')
  // const param = useParams()
  // const url = `https://api.spoonacular.com/recipes/${param.id}/information?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f`

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then(e => {
  //       setRecipe(e.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [url])
  // console.log(recipe)

  return (
    <div>
      <SingleRecipyDetialsComponent />
    </div>
  )
}


export default Recipe
