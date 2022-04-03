const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    /**
     * * ===========fs module===========
     */
        if (req.url=='/') {
            /**
             * ? ===========fs module readfile system 13-26 number line===========
             */
            /**
             * todo ===========fs module async system===========
             */
            // fs.readFile('home.html', function(err, data){
            //     res.writeHead(200, {'Content-Type': 'text/html'})
            //     res.write(data);
            //     res.end();
            // })
            /**
             * ! ===========fs module async system===========
             */
                // const t = fs.readFileSync('home.html');
                // res.writeHead(200, {'Content-Type': 'text/html'})
                // res.write(t);
                // res.end();

            /**
            * ? ===========fs module writefile system 13-26 number line===========
             */
            // fs.writeFile('demo.txt', "welcome to our status code", function (err){
            //     if (err) {
            //         res.writeHead(400, {'Content-Type': 'text/html'});
            //         res.write("failed 400");
            //         res.end();
            //     }
            //     else{
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write("Success 200");
            //         res.end();
            //     }
            // })

            /**
            * ? ===========fs module writefile system 13-26 number line===========
             */
            // const error = fs.writeFileSync('test', "hello world write file by synchronous system");
            // if (error) {
            //     res.writeHead(400, {'Content-Type': 'text/html'});
            //     res.write("File write failed 400");
            //     res.end();
            // }
            // else{
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write("File write Success 200......");
            //     res.end();
            // }

            /**
            * ? ===========fs module rename file system 13-26 number line===========
             */
            // fs.rename('demo.txt', 'file.txt', function (err){
            //     if (err) {
            //             res.writeHead(400, {'Content-Type': 'text/html'});
            //             res.write("File rename failed 400......");
            //             res.end();
            //     }
            //     else{
            //         res.writeHead(200, {'Content-Type': 'text/html'});
            //         res.write("File rename Success 200......");
            //         res.end();
            //     }
            // });

            /**
            * ? ===========fs module delete file system 13-26 number line===========
             */

            fs.unlink('test', function(err) {
                if (err) {
                        res.writeHead(400, {'Content-Type': 'text/html'});
                        res.write("File delete failed 400......");
                        res.end();
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write("File delete Success 200......");
                    res.end();
                }
            })
        }
    /**
     * ! ===========fs module end===========
     */
    

})
server.listen(8000);
console.log("server running");