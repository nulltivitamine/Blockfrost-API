import { serve } from "https://deno.land/std@0.94.0/http/server.ts";
import { exec } from "https://deno.land/x/exec/mod.ts";

const server = serve({ port: 8000 });

console.log("HTTP webserver running. Access it at: http://localhost:8000/");

for await (const request of server) {
    if (request.method === "GET" && request.url === "/") {
        const html = await Deno.readTextFile("index.html");
        request.respond({ body: html });
    } else if (request.method === "POST" && request.url === "/execute-command") {
        try {
            const body = await Deno.readAll(request.body);
            const { metadata } = JSON.parse(new TextDecoder().decode(body));

            const command = `deno run --allow-net --allow-read 3.send-with-metadata.ts "${metadata}"`;
            const { status, output } = await exec(command);

            if (status.success) {
                const txHash = output.trim();
                const address = "addr_test1vr3rqxlv0cevs6pvh6jc6gxg8etrgnzy4c3m8f4a3fx78rqzepsyn"; 
                request.respond({ 
                    status: 200, 
                    body: JSON.stringify({ address, txHash, output }) 
                });
            } else {
                request.respond({ status: 500, body: "Command execution failed" });
            }
        } catch (error) {
            request.respond({ status: 500, body: `Error: ${error.message}` });
        }
    } else {
        request.respond({ status: 404, body: "Not Found" });
    }
}
