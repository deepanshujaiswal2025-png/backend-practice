export const userFunction = (req, res) => {
    const username = req.params.username;
    res.send(`<h1> Hello, ${username} </h1>`);
}

export const searchFunction = (req, res) => {
    const keyword = req.query.keyword;
    res.send(`<h1> Searching for ${keyword}...</h1>`);
}