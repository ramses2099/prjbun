import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch: (req)=>{
        const url = new URL(req.url);
        if(url.pathname ==='/'){
            const body = figlet.textSync("Hello world!");
            return new Response(body);
        }
        //
        if(url.pathname ==='/about'){
            return new Response("About me!");
        }
        //
        if(url.pathname ==='/feed'){
            throw new Error('Could not fech feed');
        }

     

        return new Response("404!");
    },
    error(error){
        return new Response(`<pre>${error} \n ${error.stack} </pre>`,{
            status: 500,
            headers: {
                'Content-Type': 'text/html'
            }
        });
    }
});

console.log(`Listening on PORT http://localhost:${server.port}`);