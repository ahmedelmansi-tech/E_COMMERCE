
const page = async ({params}:{params:Promise<{id:string}>}) => {
  const {id} = await params
  return (
    <div>
      PRODUCTS {id}
    </div>
  )
}

export default page
