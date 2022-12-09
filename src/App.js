import './App.css';
import {useState} from 'react'
import {useDispatch,useSelector,} from 'react-redux'
import { age, gender, lname, name, profession } from './store/action/action';



function App() {
  const dispatch = useDispatch()
  const [ufname,setufname]=useState()
  const [ulname,setulname]=useState()
  const [uAge,setuAge]=useState()
  const [uGender,setuGender]=useState()
  const [uProfession,setuProfession]=useState()
// span "block font-medium text-gray-700"
// input 

  const fname=useSelector((state)=>state.firstName)
  const Slname=useSelector((state)=>state.lastName)
  const Sage=useSelector((state)=>state.age)
  const Sgender=useSelector((state)=>state.gender)
  const Sprofession=useSelector((state)=>state.profession)
  return (
    <div className="App container mx-auto bg-sky-700  mt-4 rounded-md">
      <div className="">
        <h1 className="w-64 container mx-auto bg-amber-600				 h-9 mt-6 rounded-md">Combined reducers Example</h1>
         <div className="">
             <span className="text-left pl-16" >FIRST NAME: </span>
             <input value={ufname} onChange={(e)=>setufname(e.target.value)} type="text" className="w-1/2 mt-6 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" />
             <button onClick={()=>dispatch(name(ufname))} className="px-1  border-2 py-2 leading-none hover:text-gray-100 mr-2" id="">DISPATCH</button>
             
         </div>
         <div className="">
         <span className="text-left pl-16">LAST NAME: </span>
             <input value={ulname} onChange={(e)=>setulname(e.target.value)}type="text" className="w-1/2 mt-6 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" placeholder="Last name" />
             <button onClick={()=>dispatch(lname(ulname))} className="px-1  border-2 py-2 leading-none hover:text-gray-100 mr-2" id="">DISPATCH</button>
             
         </div>

         <div className="">
         <span className="text-left pl-24">GENDER: </span>
             <input value={uGender} onChange={(e)=>setuGender(e.target.value)} type="text" className="w-1/2 mt-6 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" placeholder="Gender" />
             <button onClick={()=>dispatch(gender(uGender))}  className="px-1  border-2 py-2 leading-none hover:text-gray-100 mr-2" id="">DISPATCH</button>
             
         </div>
         <div className="">
         <span className="text-left pl-32">AGE   : </span>
             <input value={uAge} onChange={(e)=>setuAge(e.target.value)} type="text" className="w-1/2 mt-6 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" placeholder="Age" />
             <button onClick={()=>dispatch(age(uAge))}  id="" className="px-1  border-2 py-2 leading-none hover:text-gray-100 mr-2">DISPATCH</button>
             
         </div>
         
         <div className="">
         <span className="text-left pl-16">PROFESSION: </span>
             <input value={uProfession} onChange={(e)=>setuProfession(e.target.value)} type="text" className="w-1/2 mt-6 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="First name" placeholder="Proffesion" />
             <button onClick={()=>dispatch(profession(uProfession))} className="px-1  border-2 py-2 leading-none hover:text-gray-100 mr-2 " id="">DISPATCH</button>
         </div>
         <h2 className="w-64 container mx-auto bg-amber-600 h-8 mt-3 mb-3 rounded-md">Result</h2>
         <div className="  container mx-auto rounded-md g-sky-700 h-32">
         <div className="text-left pl-56 ">First Name: {fname}</div>
      <div className="text-left pl-56 ">Last Name: {Slname}</div>
      <div className="text-left pl-56 ">Age: {Sage}</div>
      <div className="text-left pl-56 ">Gender: {Sgender}</div>
      <div className="text-left pl-56 ">Profession: {Sprofession}</div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
