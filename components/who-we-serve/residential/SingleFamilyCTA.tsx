import { OptimizedLink } from "@/components/OptimizedLink";

export function SingleFamilyCTA() {
    return (
        <section className="relative bg-gradient-to-r from-[#001427] to-[#BF0603] text-white py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 break-words">
                    ¿Listo para llevar tu hogar al siguiente nivel?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    Contáctanos y descubre cómo la fibra óptica puede transformar la conectividad de tu familia.
                </p>
                <OptimizedLink href="/contact" variant="button" size="lg" className="bg-[#F4D58D] hover:bg-[#F4D58D]/90 text-[#001427] px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-semibold whitespace-nowrap">
                    Solicitar Información
                </OptimizedLink>
            </div>
        </section>
    );
} 