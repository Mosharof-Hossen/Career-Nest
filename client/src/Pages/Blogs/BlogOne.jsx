
const BlogOne = () => {
    return (
        <div className="md:px-20 p-5 py-10 space-y-5">
            <div>
                <h3 className="text-3xl font-semibold text-justify">Q: what is access token and refresh token?</h3>
            </div>
            <div className="space-y-2">
                <h4 className="text-2xl font-semibold">Ans:</h4>
                <p className="text-justify"><span className="font-bold">Access Token: </span>An access token is a short-lived credential used to access protected resources, like APIs. It proves to the server that the user is authenticated.</p>
                <p className="text-justify"><span className="font-bold">Refresh Token: </span>A refresh token is a long-lived credential used to get a new access token without logging in again after the current access token expires.</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold text-justify">Q: How It Work?</h3>
                <ul className="list-disc pl-10 space-y-1">
                    <li>User logs in and gets both an access token and a refresh token.</li>
                    <li>The access token is used to make API requests.</li>
                    <li>When the access token expires, the refresh token is used to get a new access token.</li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold text-justify">Q: Where to Store it?</h3>
                <ul className="list-disc pl-10 space-y-1">
                    <li> <p className="text-justify"><span className="font-bold">Access Token: </span>Store in memory or localStorage for easy access but be cautious of security risks like Cross-Site Scripting (XSS).</p></li>
                    <li> <p className="text-justify"><span className="font-bold">Refresh Token: </span>Store in an HttpOnly cookie to protect it from being accessed by JavaScript (safer from XSS attacks).</p></li>
                   </ul>
            </div>
        </div>
    );
};

export default BlogOne;