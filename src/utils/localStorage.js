const getDataFromLS = () => {
    const data = localStorage.getItem('applied');
    return data ? JSON.parse(data) : [];
}

const setDataToLS = id => {
    let data = getDataFromLS();
    if(!data.includes(id)){
        data.push(id);
        getDataFromLS();
    } 
    else{
        data = data.filter(item => item !== id);
        getDataFromLS();
    } 
    localStorage.setItem('applied', JSON.stringify(data));
}

export { getDataFromLS, setDataToLS }