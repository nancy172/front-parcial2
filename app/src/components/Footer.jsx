import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
    return(
        <>
            <footer className="bg-amber-100 text-neutral-900">
                <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center px-4 py-6">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-12" />
                        </Link>
                    </div>

                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-amber-600">Inicio</Link>
                        <Link to="/mascotas" className="hover:text-amber-600">Mascotas</Link>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.instagram.com" target="_blank" className="hover:text-amber-600">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" className="hover:text-amber-600">
                            <Facebook />
                        </a>
                    </div>
                </div>

                <div className="bg-amber-100 py-3">
                    <div className="flex justify-center">
                        <div className="w-4/5 h-px bg-neutral-900"></div>
                    </div>
                    <p className="text-center text-sm pt-5 pb-2">
                        © 2025 AdoptaYa | Desarrollado por Nancy Correa | Aplicaciones Híbridas
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer;