const http = require('http');
const URl = require('url');

const server = http.createServer(function(req, res){
    /**
     * * ===========http module routing system==============
     */
    // if (req.url === '/') {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is home page</h1>')
    //     res.end();
    // }
    // else if(req.url === '/about'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is about page</h1>')
    //     res.end();
    // }
    // else if(req.url === '/contact'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<h1>This is contact page</h1>')
    //     res.end();
    // }
    // else{
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.write('<h1>404 page</h1>')
    //     res.end();
    // }
    /**
     * ! ===========http module routing system end==============
     */
    
    /**
     * ? ==============URl module system start========================
     */
    
    /**
     * todo: ==============URl module system========================
     */
    

})
server.listen(8000);
console.log("server running");