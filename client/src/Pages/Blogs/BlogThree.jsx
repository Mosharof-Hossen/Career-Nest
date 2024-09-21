
const BlogThree = () => {
    return (
        <div className="md:px-20 p-5 py-10 space-y-5">
            <div>
                <h3 className="text-3xl font-semibold text-justify">Q: what is Nest js?</h3>
            </div>
            <div className="space-y-2">
                <h4 className="text-2xl font-semibold">Ans:</h4>
                <p className="text-justify"><span className="font-bold">Nest js: </span>NestJS is a progressive, server-side framework for building efficient, scalable, and maintainable web applications using Node.js. It leverages TypeScript by default (though it also supports JavaScript) and is heavily inspired by Angular. NestJS is designed to build robust, enterprise-level applications and provides a structured way to organize code with a focus on modularity and dependency injection.</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold text-justify">Key Features:</h3>
                <ul className="list-disc pl-10 space-y-1">
                    <li>Modular Architecture: Organizes your code into modules, making the codebase more maintainable and scalable.</li>
                    <li>Dependency Injection: Provides a powerful way to manage services and their dependencies.</li>
                    <li>Built on Express/Fastify: Uses Express.js or Fastify under the hood, so you get the benefits of those frameworks along with additional abstractions from NestJS.</li>
                    <li>TypeScript: NestJS is built with TypeScript, offering type safety and modern JavaScript features.</li>
                    <li>Easy Testing: It includes features to write unit and integration tests efficiently.</li>


                </ul>
            </div>
        </div>
    );
};

export default BlogThree;