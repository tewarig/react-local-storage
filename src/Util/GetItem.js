const GetItem = (name) =>{
   let data =  localStorage.getItem(name);
   return  JSON.parse(data);
}
export default GetItem;