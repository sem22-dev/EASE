export default function Promote() {
    const sectionStyle = {
        backgroundImage: 'url("/promote3.png")', // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a color overlay with reduced opacity
    };

    return (
        <section style={sectionStyle} className="py-16 mt-12 rounded-lg text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold mb-10 pb-2 inline-block relative">
                    EVENT ORGANIZER ?
                    <span className="border-b-2 border-brand w-20 mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
                </h2>
                <p className="text-3xl mb-10">
                    Promote your event and reach millions of potential attendees today...
                </p>
                <a
                    href="#get-started-link" // Replace with the actual link
                    className="bg-brand hover:bg-hoverbrand text-white text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
}
