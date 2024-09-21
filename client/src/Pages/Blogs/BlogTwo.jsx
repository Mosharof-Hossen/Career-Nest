import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const BlogTwo = () => {
    const codeString =
        `const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;
    return (
        <div className="md:px-20 p-5 py-10 space-y-5">
            <div>
                <h3 className="text-3xl font-semibold text-justify">Q: what is Express js?</h3>
            </div>
            <div className="space-y-2">
                <h4 className="text-2xl font-semibold">Ans:</h4>
                <p className="text-justify"><span className="font-bold">Express js: </span>Express.js is a minimal and flexible web application framework for Node.js. It is used to build web applications and APIs easily by providing a set of features to manage routes, requests, and middleware.</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold text-justify">Key Features:</h3>
                <ul className="list-disc pl-10 space-y-1">
                    <li>Routing: Express allows you to define routes for different HTTP methods (GET, POST, etc.) and URL paths.</li>
                    <li>Middleware: It supports middleware functions that can process requests, like parsing JSON or handling authentication.</li>
                    <li>Fast Development: Express simplifies the process of handling HTTP requests, making it faster to build robust applications.</li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold text-justify">Example:</h3>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

        </div>
    );
};

export default BlogTwo;