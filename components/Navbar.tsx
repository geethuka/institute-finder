export default function Navbar() {
    return (

        // Navbar component with logo and links

        <nav className="relative flex min-h-[76px] w-full justify-between items-center bg-white py-4 px-[5%] shadow-sm border-b border-slate-100">

           {/* Navbar Logo */}

            <div className="flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                <span className="text-xl">Institute Finder</span>
            </div>


            {/* Navbar links */}

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-medium md:flex">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/institutes">Institutes</a>
                <a href="/contact">Contact</a>
            </div>
            <button type="button" aria-label="Search">
                <span>🔍</span>
            </button>
        </nav>
    );
    
}