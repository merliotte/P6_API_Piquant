const http = require("http");
const server = http.createServer((rep, res) => {
    res.end("Voila la réponse du serveur")
});
server.listen(process.env.PORT || 3001); 

