import './styles.css'

interface Icard {
    nome: string
    valor: number
    imagem: string
}

export default function cards(props: Icard) {
  return (
    <div className='card'>
        <img src={props.imagem} alt="produto" />
        <p className='name'>{props.nome}</p>
        <p className='valor'>R${props.valor}</p>
    </div>
  )
}
