import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Imgbb from './components/Upload/Imgbb';

function App() {
  const [info,setInfo] =useState({});
  const [file,setfile] = useState(null)
  const handleBlur = e =>{
    const newInfo = {...info};
    newInfo[e.target.name]=e.target.value;
    setInfo(newInfo);
  }
  const handleFileChange =(e)=>{
    const newFile =e.target.files[0];
    setfile(newFile)

  }
const handleSubmit = ()=>{
  const formData = new FormData();
  formData.append('file',file);
  formData.append('name',info.name);
  formData.append('email',info.email);
  fetch('http://localhost:5000/upload',{
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data =>{
    console.log(data);
  })
}
    return (
    <div className="App">
    
   
    <form onSubmit={handleSubmit} class="row g-3">
    <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Name</label>
    <input onBlur={handleBlur} type="text" class="form-control" name='name' placeholder="name"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Email</label>
    <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="email"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">File</label>
    <input onChange={handleFileChange} type="file" class="form-control"  placeholder="Password"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>

<Imgbb></Imgbb>
    </div>
  );
}

export default App;
