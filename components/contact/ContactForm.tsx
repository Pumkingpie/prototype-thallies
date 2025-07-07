'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { animationConfig } from '@/lib/animationConfig';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    street: string;
    unit: string;
    city: string;
    state: string;
    postal: string;
    service: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

// Configuración de límites de seguridad
const MAX_LENGTHS = {
    name: 100,
    email: 254,
    phone: 20,
    company: 100,
    street: 200,
    unit: 50,
    city: 100,
    state: 100,
    postal: 10,
    service: 50,
    message: 2000
};

const MAX_SUBMITS_PER_HOUR = 3;
const SUBMIT_TIMEOUT = 60 * 60 * 1000; // 1 hora en ms

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        postal: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const [lastSubmitTime, setLastSubmitTime] = useState(0);

    // Generar CSRF token al montar el componente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Recuperar contador de envíos del localStorage
            const savedCount = localStorage.getItem('contactFormSubmitCount');
            const savedTime = localStorage.getItem('contactFormLastSubmit');

            if (savedCount && savedTime) {
                const timeDiff = Date.now() - parseInt(savedTime);
                if (timeDiff < SUBMIT_TIMEOUT) {
                    setSubmitCount(parseInt(savedCount));
                    setLastSubmitTime(parseInt(savedTime));
                } else {
                    // Reset si ya pasó una hora
                    localStorage.removeItem('contactFormSubmitCount');
                    localStorage.removeItem('contactFormLastSubmit');
                }
            }
        }
    }, []);

    // Función de sanitización
    const sanitizeInput = (input: string): string => {
        return input.replace(/[<>]/g, '').trim();
    };

    // Validaciones específicas por campo
    const validateName = (name: string): string | null => {
        if (!name.trim()) return 'El nombre es requerido';
        if (name.length > MAX_LENGTHS.name) return `El nombre no puede exceder ${MAX_LENGTHS.name} caracteres`;
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) return 'El nombre solo puede contener letras y espacios';
        if (name.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return null;
    };

    const validateEmail = (email: string): string | null => {
        if (!email.trim()) return 'El email es requerido';
        if (email.length > MAX_LENGTHS.email) return `El email no puede exceder ${MAX_LENGTHS.email} caracteres`;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return 'El formato del email no es válido';
        return null;
    };

    const validatePhone = (phone: string): string | null => {
        if (!phone.trim()) return 'El teléfono es requerido';
        if (phone.length > MAX_LENGTHS.phone) return `El teléfono no puede exceder ${MAX_LENGTHS.phone} caracteres`;
        if (!/^[\+]?[0-9\s\-\(\)]+$/.test(phone)) return 'El teléfono solo puede contener números, espacios, guiones y paréntesis';
        if (phone.replace(/\D/g, '').length < 10) return 'El teléfono debe tener al menos 10 dígitos';
        return null;
    };

    const validatePostalCode = (postal: string): string | null => {
        if (!postal.trim()) return 'El código postal es requerido';
        if (postal.length > MAX_LENGTHS.postal) return `El código postal no puede exceder ${MAX_LENGTHS.postal} caracteres`;
        // Validación para códigos postales de US (puedes ajustar según el país)
        if (!/^\d{5}(-\d{4})?$/.test(postal)) return 'El formato del código postal no es válido (ej: 12345 o 12345-6789)';
        return null;
    };

    const validateMessage = (message: string): string | null => {
        if (!message.trim()) return 'El mensaje es requerido';
        if (message.length > MAX_LENGTHS.message) return `El mensaje no puede exceder ${MAX_LENGTHS.message} caracteres`;
        if (message.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return null;
    };

    const validateFieldLength = (field: keyof FormData, value: string): string | null => {
        if (value.length > MAX_LENGTHS[field]) {
            return `Este campo no puede exceder ${MAX_LENGTHS[field]} caracteres`;
        }
        return null;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Validaciones específicas
        const nameError = validateName(formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;

        const phoneError = validatePhone(formData.phone);
        if (phoneError) newErrors.phone = phoneError;

        const postalError = validatePostalCode(formData.postal);
        if (postalError) newErrors.postal = postalError;

        const messageError = validateMessage(formData.message);
        if (messageError) newErrors.message = messageError;

        // Validación de estado/región (obligatorio)
        if (!formData.state.trim()) {
            newErrors.state = 'El estado/región es requerido';
        } else {
            const stateError = validateFieldLength('state', formData.state);
            if (stateError) newErrors.state = stateError;
        }

        // Validaciones de longitud para campos opcionales
        if (formData.company) {
            const companyError = validateFieldLength('company', formData.company);
            if (companyError) newErrors.company = companyError;
        }

        if (formData.street) {
            const streetError = validateFieldLength('street', formData.street);
            if (streetError) newErrors.street = streetError;
        }

        if (formData.unit) {
            const unitError = validateFieldLength('unit', formData.unit);
            if (unitError) newErrors.unit = unitError;
        }

        if (formData.city) {
            const cityError = validateFieldLength('city', formData.city);
            if (cityError) newErrors.city = cityError;
        }

        // Validación de servicio
        if (!formData.service) {
            newErrors.service = 'Por favor selecciona un servicio';
        }

        // Rate limiting
        if (submitCount >= MAX_SUBMITS_PER_HOUR) {
            const timeLeft = Math.ceil((SUBMIT_TIMEOUT - (Date.now() - lastSubmitTime)) / 60000);
            newErrors.rateLimit = `Has alcanzado el límite de envíos. Intenta nuevamente en ${timeLeft} minutos.`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Verificar rate limiting
        if (submitCount >= MAX_SUBMITS_PER_HOUR) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simular envío del formulario con datos sanitizados
            // Aquí iría la llamada real a tu API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Incrementar contador de envíos
            const newCount = submitCount + 1;
            setSubmitCount(newCount);
            setLastSubmitTime(Date.now());

            // Guardar en localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('contactFormSubmitCount', newCount.toString());
                localStorage.setItem('contactFormLastSubmit', Date.now().toString());
            }

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                street: '',
                unit: '',
                city: '',
                state: '',
                postal: '',
                service: '',
                message: ''
            });
        } catch {
            setErrors({ submit: 'Error al enviar el formulario. Por favor, intenta nuevamente.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: keyof FormData, value: string) => {
        // Sanitizar entrada en tiempo real
        const sanitizedValue = sanitizeInput(value);

        // Verificar límite de longitud
        if (sanitizedValue.length <= MAX_LENGTHS[field]) {
            setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
            if (errors[field]) {
                setErrors(prev => ({ ...prev, [field]: '' }));
            }
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-green-700 mb-4">
                    Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700"
                >
                    Enviar Otro Mensaje
                </Button>
            </motion.div>
        );
    }

    return (
        <motion.div
            id="contact-form"
            initial="hidden"
            animate="visible"
            variants={animationConfig.containerVariants}
            className="bg-white rounded-lg shadow-lg p-8"
        >
            <motion.h2
                variants={animationConfig.itemVariants}
                className="text-3xl font-bold text-navy mb-6"
            >
                Envíanos un Mensaje
            </motion.h2>

            {/* Rate limiting warning */}
            {submitCount > 0 && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                        Envíos restantes en esta hora: {MAX_SUBMITS_PER_HOUR - submitCount}
                    </p>
                </div>
            )}

            {/* Error general */}
            {errors.submit && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{errors.submit}</p>
                </div>
            )}

            {/* Rate limiting error */}
            {errors.rateLimit && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{errors.rateLimit}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={animationConfig.itemVariants} className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre Completo *
                        </label>
                        <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            error={!!errors.name}
                            placeholder="Tu nombre completo"
                            maxLength={MAX_LENGTHS.name}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            error={!!errors.email}
                            placeholder="tu@email.com"
                            maxLength={MAX_LENGTHS.email}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                </motion.div>

                <motion.div variants={animationConfig.itemVariants} className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono *
                        </label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            error={!!errors.phone}
                            placeholder="+1 (555) 123-4567"
                            maxLength={MAX_LENGTHS.phone}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa
                        </label>
                        <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            placeholder="Nombre de tu empresa"
                            maxLength={MAX_LENGTHS.company}
                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}
                    </div>
                </motion.div>

                <motion.div variants={animationConfig.itemVariants} className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                            Dirección
                        </label>
                        <Input
                            id="street"
                            type="text"
                            value={formData.street}
                            onChange={(e) => handleChange('street', e.target.value)}
                            placeholder="Calle y número"
                            maxLength={MAX_LENGTHS.street}
                        />
                        {errors.street && (
                            <p className="text-red-500 text-sm mt-1">{errors.street}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                            Unidad o Suite
                        </label>
                        <Input
                            id="unit"
                            type="text"
                            value={formData.unit}
                            onChange={(e) => handleChange('unit', e.target.value)}
                            placeholder="Unidad, suite, etc. (opcional)"
                            maxLength={MAX_LENGTHS.unit}
                        />
                        {errors.unit && (
                            <p className="text-red-500 text-sm mt-1">{errors.unit}</p>
                        )}
                    </div>
                </motion.div>
                <motion.div variants={animationConfig.itemVariants} className="grid md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                            Ciudad
                        </label>
                        <Input
                            id="city"
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                            placeholder="Ciudad"
                            maxLength={MAX_LENGTHS.city}
                        />
                        {errors.city && (
                            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                            Estado/Región *
                        </label>
                        <Input
                            id="state"
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleChange('state', e.target.value)}
                            error={!!errors.state}
                            placeholder="Estado o región"
                            maxLength={MAX_LENGTHS.state}
                        />
                        {errors.state && (
                            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="postal" className="block text-sm font-medium text-gray-700 mb-2">
                            Código Postal *
                        </label>
                        <Input
                            id="postal"
                            type="text"
                            value={formData.postal}
                            onChange={(e) => handleChange('postal', e.target.value)}
                            error={!!errors.postal}
                            placeholder="Código postal"
                            maxLength={MAX_LENGTHS.postal}
                        />
                        {errors.postal && (
                            <p className="text-red-500 text-sm mt-1">{errors.postal}</p>
                        )}
                    </div>
                </motion.div>

                <motion.div variants={animationConfig.itemVariants}>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Servicio de Interés *
                    </label>
                    <Select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        error={!!errors.service}
                    >
                        <option value="">Selecciona un servicio</option>
                        <option value="internet-residential">Internet Residencial</option>
                        <option value="internet-business">Internet Empresarial</option>
                        <option value="tv-service">Servicio de TV</option>
                        <option value="voice-service">Servicio de Voz</option>
                        <option value="security-service">Servicio de Seguridad</option>
                        <option value="consulting">Consultoría</option>
                        <option value="other">Otro</option>
                    </Select>
                    {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                    )}
                </motion.div>

                <motion.div variants={animationConfig.itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        error={!!errors.message}
                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                        rows={5}
                        maxLength={MAX_LENGTHS.message}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </motion.div>

                <motion.div variants={animationConfig.itemVariants}>
                    <Button
                        type="submit"
                        disabled={isSubmitting || submitCount >= MAX_SUBMITS_PER_HOUR}
                        className="w-full bg-[#001427] hover:bg-indigo-900 text-white py-3"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Enviando...
                            </div>
                        ) : (
                            'Enviar Mensaje'
                        )}
                    </Button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default ContactForm; 