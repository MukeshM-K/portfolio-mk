interface IProps {
    title: string;
    desc: string;
}

const Heading = ({title , desc}: IProps) => {
  return  (
    <>
    {""}
    <p className='font-title tracking-wider text-4xl uppercase'>{title}</p>
    <p className='text-zinc-400 mb-6'>{desc}</p>

    
    </>
  )
   
}

export default Heading
