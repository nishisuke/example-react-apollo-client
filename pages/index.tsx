import type { NextPage } from 'next'

import {TodoDocument} from '../graphql/generated'
import {  useQuery } from '@apollo/client'

 
const Home: NextPage = () => {
  const { data,loading } = useQuery(TodoDocument, {variables: {first:4}})

if (loading) return <div>Loading</div>







  return (
<>
{data?.todos.edges.map((e) => <div key={e.node.id}>
{e.node.text}
</div>)}
</>
  )

}

export default Home
