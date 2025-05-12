export function Send({ onClick }) {
    return (
        <button 
            className="send-button"
            onClick={onClick}
        >
            <Image 
                src="/send.svg" 
                alt="send icon"
                width={25}
                height={24}
            />
        </button>
    );
}