export default function Navbar() {
    return (

        // Navbar component with logo and links

        <nav className="relative flex min-h-[76px] w-full justify-between flex-wrap items-center gap-y-3 bg-white py-4 px-[5%] shadow-sm border-b border-slate-100">

           {/* Navbar Logo */}

            <div className="flex shrink-0 items-center gap-2">
                <span className="text-3xl">🎓</span>
                <span className="text-xl">Institute Finder</span>
            </div>


            {/* Navbar links */}

            <div className="flex w-full justify-center gap-4 text-xs font-medium md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2 md:gap-10 md:text-sm">
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