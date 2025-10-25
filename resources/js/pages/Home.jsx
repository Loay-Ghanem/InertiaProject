export default function Home({ canRegister }) {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {canRegister && <p>You can register for an account.</p>}
        </div>
    );
}
