import './Profile.css'

    // function inside a function is called a nested function, it is a way to organize code and avoid polluting the global scope. The handleClick function is defined inside the Profile component, so it can access the state and props of the Profile component.
export function Button() {
        return (
        <button onClick={() => alert('Button clicked!')}>Click me</button>
    )
}

function Profile() {

    const imgSrc = 'https://react.dev/images/docs/scientists/1bX5QH6.jpg'
    return (
        <>
        <img className="logo" src={imgSrc} alt="Hero Image" />
        </>
    )
}

export default Profile;