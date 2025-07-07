'use client';

import { motion } from 'framer-motion';
import { animationConfig } from '@/lib/animationConfig';

export const ContactMap = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={animationConfig.containerVariants}
            className="mt-20"
        >
            <motion.div variants={animationConfig.itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">Nuestra Ubicación</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Visítanos en nuestra oficina principal en San Francisco, o contáctanos para programar una reunión virtual.
                </p>
            </motion.div>

            <motion.div
                variants={animationConfig.itemVariants}
                className="grid lg:grid-cols-3 gap-8"
            >
                {/* Mapa Interactivo */}
                <motion.div
                    variants={animationConfig.itemVariants}
                    className="lg:col-span-2 bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                    style={{ minHeight: '400px' }}
                >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/10 to-sage/10">
                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-navy mb-2">Mapa Interactivo</h3>
                            <p className="text-gray-600 mb-4">
                                Aquí se integraría Google Maps o Mapbox
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg hover:bg-sage transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                </svg>
                                Abrir en Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Información de Ubicación */}
                <motion.div
                    variants={animationConfig.itemVariants}
                    className="space-y-6"
                >
                    <div className="bg-blue-50 hover:bg-indigo-100 transition-colors rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-navy mb-4">Oficina Principal</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Dirección</h4>
                                <p className="text-gray-600">
                                    123 Tech Street, Suite 100<br />
                                    San Francisco, CA 94105<br />
                                    Estados Unidos
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Horarios</h4>
                                <div className="text-gray-600 space-y-1">
                                    <div className="flex justify-between">
                                        <span>Lunes - Viernes:</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sábados:</span>
                                        <span>9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Domingos:</span>
                                        <span>Cerrado</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Estacionamiento</h4>
                                <p className="text-gray-600">
                                    Estacionamiento gratuito disponible en el edificio
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#001427] to-indigo-900 text-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Cómo Llegar</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-sm font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">En Transporte Público</h4>
                                    <p className="text-sm text-gray-100">
                                        Línea BART hasta Powell Street Station
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-sm font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">En Auto</h4>
                                    <p className="text-sm text-gray-100">
                                        Salida 101 hacia Market Street
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-sm font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">A Pie</h4>
                                    <p className="text-sm text-gray-100">
                                        5 minutos desde Union Square
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-[#BF0603] rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-navy mb-4">Reuniones Virtuales</h3>
                        <p className="text-gray-600 mb-4">
                            ¿Prefieres una reunión virtual? Estamos disponibles en:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Zoom</h4>
                                    <p className="text-sm text-gray-600">ID: 123-456-789</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16l-4-4 1.414-1.414L10 14.172l7.586-7.586L19 8l-9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Google Meet</h4>
                                    <p className="text-sm text-gray-600">meet.google.com/thallies</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Teams</h4>
                                    <p className="text-sm text-gray-600">teams.microsoft.com/thallies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default ContactMap; 