import Link from "next/link";
import { Profile } from "./profile";

export const Navbar = () => {
    return(    
        <header>
            <div className="h-20 flex justify-between py-4 max-w-[90%] mx-auto px-3 md:px-0">
                <div className="bg-slate-400 aspect-square h-full"/>
                <nav className="h-full rounded-full flex bg-sky-800 gap-5 items-center text-white">
                    <Link className="px-4 hover:bg-sky-700 h-full flex items-center rounded-full" href={'#'}>Home</Link>
                    <Link className="px-4 hover:bg-sky-700 h-full flex items-center rounded-full" href={'#'}>Pekerjaan</Link>
                    <Link className="px-4 hover:bg-sky-700 h-full flex items-center rounded-full" href={'#'}>AI Helper</Link>
                    <Link className="px-4 hover:bg-sky-700 h-full flex items-center rounded-full" href={'#'}>Komunitas</Link>
                    <Link className="px-4 hover:bg-sky-700 h-full flex items-center rounded-full" href={'#'}>Pelatihan</Link>
                </nav>
                <Profile/>
            </div>
        </header>
    )
};
