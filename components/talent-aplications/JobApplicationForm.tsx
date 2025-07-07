import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    coverLetter: string;
    cv: File | null;
}

interface FormErrors {
    [key: string]: string;
}

const MAX_LENGTHS = {
    name: 100,
    email: 254,
    phone: 20,
    position: 100,
    coverLetter: 2000
};
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_FILE_TYPE = 'application/pdf';

export function JobApplicationForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        cv: null
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Sanitización básica
    const sanitizeInput = (input: string): string => {
        return input.replace(/[<>]/g, '').trim();
    };

    // Validaciones
    const validateName = (name: string): string | null => {
        if (!name.trim()) return 'Name is required';
        if (name.length > MAX_LENGTHS.name) return `Name cannot exceed ${MAX_LENGTHS.name} characters`;
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) return 'Name can only contain letters and spaces';
        if (name.length < 2) return 'Name must be at least 2 characters';
        return null;
    };
    const validateEmail = (email: string): string | null => {
        if (!email.trim()) return 'Email is required';
        if (email.length > MAX_LENGTHS.email) return `Email cannot exceed ${MAX_LENGTHS.email} characters`;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return 'Invalid email format';
        return null;
    };
    const validatePhone = (phone: string): string | null => {
        if (!phone.trim()) return 'Phone is required';
        if (phone.length > MAX_LENGTHS.phone) return `Phone cannot exceed ${MAX_LENGTHS.phone} characters`;
        if (!/^[\+]?[0-9\s\-\(\)]+$/.test(phone)) return 'Phone can only contain numbers, spaces, dashes and parentheses';
        if (phone.replace(/\D/g, '').length < 10) return 'Phone must have at least 10 digits';
        return null;
    };
    const validatePosition = (position: string): string | null => {
        if (!position.trim()) return 'Position is required';
        if (position.length > MAX_LENGTHS.position) return `Position cannot exceed ${MAX_LENGTHS.position} characters`;
        return null;
    };
    const validateCoverLetter = (coverLetter: string): string | null => {
        if (!coverLetter.trim()) return 'Cover letter is required';
        if (coverLetter.length > MAX_LENGTHS.coverLetter) return `Cover letter cannot exceed ${MAX_LENGTHS.coverLetter} characters`;
        if (coverLetter.length < 20) return 'Cover letter must be at least 20 characters';
        return null;
    };
    const validateCV = (cv: File | null): string | null => {
        if (!cv) return 'CV (PDF) is required';
        if (cv.type !== ALLOWED_FILE_TYPE) return 'Only PDF files are allowed';
        if (cv.size > MAX_FILE_SIZE) return 'File size must be less than 2MB';
        return null;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        const nameError = validateName(formData.name);
        if (nameError) newErrors.name = nameError;
        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;
        const phoneError = validatePhone(formData.phone);
        if (phoneError) newErrors.phone = phoneError;
        const positionError = validatePosition(formData.position);
        if (positionError) newErrors.position = positionError;
        const coverLetterError = validateCoverLetter(formData.coverLetter);
        if (coverLetterError) newErrors.coverLetter = coverLetterError;
        const cvError = validateCV(formData.cv);
        if (cvError) newErrors.cv = cvError;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof FormData, value: string | File | null) => {
        setFormData((prev) => ({
            ...prev,
            [field]: typeof value === 'string' ? sanitizeInput(value) : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
        handleChange('cv', file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        // Aquí deberías enviar los datos a una API segura o endpoint de backend
        // Por ejemplo, usando fetch con FormData para enviar el archivo
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('position', formData.position);
            data.append('coverLetter', formData.coverLetter);
            if (formData.cv) data.append('cv', formData.cv);
            // await fetch('/api/job-application', { method: 'POST', body: data });
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '', cv: null });
            if (fileInputRef.current) fileInputRef.current.value = '';
        } catch {
            setErrors({ submit: 'There was an error submitting your application. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Filtrar solo props válidos para motion.form
    const motionFormConfig = {};
    // Puedes agregar aquí props válidos si los necesitas, por ejemplo:
    // const motionFormConfig = { initial: 'hidden', animate: 'visible', ... }

    return (
        <div className="relative min-h-screen flex items-center justify-center py-12 px-2 sm:px-4 bg-transparent">
            {/* Fondo de imagen con overlay rojo */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/image/stormhub/Service.webp"
                    alt="THALLIES careers background"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#BF0603]/80 via-[#BF0603]/40 to-transparent" />
            </div>
            <motion.form
                className="max-w-xl w-full mx-auto bg-white/95 rounded-xl shadow-lg p-8 space-y-6 border border-[#BF0603]/20 backdrop-blur-md"
                onSubmit={handleSubmit}
                {...motionFormConfig}
                encType="multipart/form-data"
            >
                <h2 className="text-2xl font-bold text-[#BF0603] mb-2 text-center">Apply to THALLIES</h2>
                <p className="text-center text-gray-600 mb-4">Join our team and help us build a better, more connected community. Please fill out the form below and upload your CV in PDF format.</p>
                <div>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        maxLength={MAX_LENGTHS.name}
                        required
                    />
                    {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={e => handleChange('email', e.target.value)}
                        maxLength={MAX_LENGTHS.email}
                        required
                    />
                    {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                </div>
                <div>
                    <Input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        maxLength={MAX_LENGTHS.phone}
                        required
                    />
                    {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Position you are applying for"
                        value={formData.position}
                        onChange={e => handleChange('position', e.target.value)}
                        maxLength={MAX_LENGTHS.position}
                        required
                    />
                    {errors.position && <div className="text-red-600 text-sm mt-1">{errors.position}</div>}
                </div>
                <div>
                    <Textarea
                        placeholder="Cover Letter"
                        value={formData.coverLetter}
                        onChange={e => handleChange('coverLetter', e.target.value)}
                        maxLength={MAX_LENGTHS.coverLetter}
                        required
                        rows={5}
                    />
                    {errors.coverLetter && <div className="text-red-600 text-sm mt-1">{errors.coverLetter}</div>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Upload CV (PDF, max 2MB)</label>
                    <Input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        required
                    />
                    {errors.cv && <div className="text-red-600 text-sm mt-1">{errors.cv}</div>}
                </div>
                {errors.submit && <div className="text-red-600 text-sm mb-2">{errors.submit}</div>}
                <Button
                    type="submit"
                    className="w-full bg-[#BF0603] hover:bg-[#8B0000] text-white font-bold py-3 rounded-lg transition-colors"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
                {isSubmitted && <div className="text-green-600 text-center font-semibold mt-2">Your application has been submitted successfully!</div>}
            </motion.form>
        </div>
    );
} 