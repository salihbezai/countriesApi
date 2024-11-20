import Country from "@/components/Country"

const page =   async({ params }: {params:{name:string}}) => {
    const {name} = await params
    

  return (
   <Country name={name} />
  )
}

export default page