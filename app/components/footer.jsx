
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#00478a] text-white py-2">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Logo e informações */}
                <div className="mb-4 md:mb-0">
                    <img src="/LogoSenac_rodape.png" alt="Senac MG" className="h-10 mx-auto md:mx-0" />
                    <p className="text-sm mt-2">
                        CNC | Fecomércio MG<br />
                        Sindicatos Empresariais | Sesc
                    </p>
                </div>

                {/* Direitos reservados */}
                <div className="text-sm mb-4 md:mb-0">
                    Senac MG © Todos os Direitos Reservados.
                </div>

                {/* Redes sociais */}
                <div className="flex gap-2 justify-center md:justify-end">
                    <a href="#" className="bg-white text-[#00478a] p-2 rounded">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-white text-[#00478a] p-2 rounded">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-white text-[#00478a] p-2 rounded">
                        <FaYoutube />
                    </a>
                    <a href="#" className="bg-white text-[#00478a] p-2 rounded">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="bg-white text-[#00478a] p-2 rounded">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}
