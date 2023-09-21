import { useSelector } from 'react-redux'
import '../style/BookMark.css'
function BookMark() {
const subcribe=useSelector(state=>state.SourceReducer.sourceData);


  return (
    <div className='container-bk'>

      {subcribe.map((data,index)=>{
        return(
          <div className='box-bk' >
            <img className='logo' src={data.image} alt={data.name}/>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            <button className='btn-b' onClick={()=>Window.open(data.link)}>Link</button>
          </div>
         
        )
      })}
    </div>
  )
}

export default BookMark