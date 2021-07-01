import styles from 'styles/elements.module.css'

const List = ({title, items, ordered}) => {
  return(<>
    <p>{title}</p>
    {ordered ? <ol>{items.map((item, index) => {
      return <li key={index}>{item}</li>
    })}</ol> :
    <ul>{items.map((item, index) => {
      return <li key={index}>{item}</li>
    })}</ul>}
  </>)
}

export default List