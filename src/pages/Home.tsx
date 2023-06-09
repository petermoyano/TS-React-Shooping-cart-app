export function Home() {
    return (
        <>
            <h1>Ok, what is this site?</h1>
            <p>
                This is a simple React-TypeScript shopping cart application
                meant to practice a couple of things:
            </p>
            <ul>
                <li>
                    Using the <b>react-bootstrap library</b> for the first time.
                </li>
                <li>
                    <b>Testing</b> with vitest. It was a blast using the{" "}
                    <b>vitest/ui</b> package which creates a rad testing
                    environment in your browser with a lot of cool features, and
                    access to your code. It even has a night mode!
                </li>
                <li>
                    <b>Code splitting</b>
                </li>
                <li>
                    <b>Lazy loading</b>: The images are large and specially not
                    sized optimized for the web. I wanted to see how lazy
                    loading would work with them. Started playing around with
                    the Intersection Observer API but then found the
                    react-lazy-load-image-component library and decided to use
                    it instead. It's a bit more high level but it's also easier
                    to use.
                </li>
            </ul>
        </>
    );
}
