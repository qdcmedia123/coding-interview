
// Much more is here 
// https://leewarrick.com/blog/react-use-effect-explained/
function Timer() {
    const [count, setCount] = React.useState(0)
    const countRef = React.useRef(0)

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            countRef.current = countRef.current + 1
            setCount(countRef.current)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>The count is: {count}</div>
    )
}