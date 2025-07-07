'use client';

import { motion } from 'framer-motion';
import { animationConfig } from '@/lib/animationConfig';

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
        ),
        title: 'Oficina Principal',
        content: '123 Tech Street, Suite 100<br />San Francisco, CA 94105',
        link: 'https://maps.google.com',
        linkText: 'Ver en Google Maps'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
        ),
        title: 'Email',
        content: 'contact@thallies.com<br />support@thallies.com',
        link: 'mailto:contact@thallies.com',
        linkText: 'Enviar Email'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
        ),
        title: 'Teléfono',
        content: '+1 (555) 123-4567<br />+1 (555) 987-6543',
        link: 'tel:+15551234567',
        linkText: 'Llamar Ahora'
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
        ),
        title: 'Horarios de Atención',
        content: 'Lunes - Viernes: 8:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 2:00 PM',
        link: null,
        linkText: null
    }
];

const socialLinks = [
    {
        name: 'LinkedIn',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        href: 'https://linkedin.com/company/thallies'
    },
    {
        name: 'Twitter',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
        ),
        href: 'https://twitter.com/thallies'
    },
    {
        name: 'Facebook',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        href: 'https://facebook.com/thallies'
    }
];

export const ContactInfo = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={animationConfig.containerVariants}
            className="space-y-8"
        >
            <motion.div variants={animationConfig.itemVariants}>
                <h2 className="text-3xl font-bold text-navy mb-6">
                    Información de Contacto
                </h2>
                <p className="text-gray-600 text-lg">
                    Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios.
                </p>
            </motion.div>

            <motion.div variants={animationConfig.itemVariants} className="space-y-6">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={index}
                        variants={animationConfig.itemVariants}
                        className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-indigo-100 transition-colors"
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-navy text-[#BF0603] rounded-lg flex items-center justify-center">
                            {info.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                            <p
                                className="text-gray-600 mb-2"
                                dangerouslySetInnerHTML={{ __html: info.content }}
                            />
                            {info.link && (
                                <a
                                    href={info.link}
                                    className="text-navy hover:text-sage font-medium text-sm transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {info.linkText} →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div variants={animationConfig.itemVariants} className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-navy mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#BF0603] text-white rounded-lg flex items-center justify-center hover:bg-sage transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title={social.name}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={animationConfig.itemVariants} className="bg-gradient-to-r from-[#001427] to-indigo-900 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">¿Necesitas Soporte Técnico?</h3>
                <p className="mb-4 text-gray-100">
                    Nuestro equipo técnico está disponible 24/7 para ayudarte con cualquier problema.
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>Soporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Respuesta en menos de 2 horas</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}; 