function enter(word) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '756cf30221msh247a4ad3f191fa3p168515jsn81c5d50e5f84',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
        .then(response => response.json())
        .then(response => {
            return true
        })
        .catch(error => {
            return false
        });
}

export default enter;