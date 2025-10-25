export default function Logo({ className= "h-8 mr-2" }) {
    return (
        <div className="flex items-center">
            <img src="/images/users.png" alt="Logo" className={className} />
        </div>
    );
}