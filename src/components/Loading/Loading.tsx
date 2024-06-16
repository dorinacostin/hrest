import "./Loading.scss"

const Loading = () => {
    return (
        <div role="loading" className="loading-container">
            <div role="loading-spinner" className="loading-spinner"></div>
            <p>Loading...</p>
        </div>
    )
}

export default Loading