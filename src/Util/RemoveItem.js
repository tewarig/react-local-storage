const RemoveItem = (name)=>{
    localStorage.removeItem(name);
    return 'item removed';

}

export default RemoveItem;