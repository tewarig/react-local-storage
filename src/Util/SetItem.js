const SetItem = ( key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}


export default SetItem;