"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";

export default function Hero() {
    const trustIndicators = [
        "Garansi Revisi",
        "24/7 Support",
        "Harga Terjangkau",
    ];

    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden pt-20 md:pt-0"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#A8D5E2]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#5BA8C4]/20 rounded-full blur-3xl" />

            {/* Dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #0B7A9F 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container-custom relative z-10">
                <div className="min-h-screen flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="order-2 lg:order-1"
                        >
                            {/* Badge */}
                            <motion.div variants={fadeInUp} className="mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B7A9F]/10 text-[#0B7A9F] text-sm font-medium">
                                    <span className="w-2 h-2 rounded-full bg-[#0B7A9F] animate-pulse" />
                                    Trusted by 20k+ Students
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-6"
                            >
                                Tugas Kuliah <br className="hidden sm:block" />
                                Menumpuk?{" "}
                                <span className="gradient-text">
                                    Serahkan Pada Ahlinya!
                                </span>{" "}
                                <span className="inline-block">💙</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
                            >
                                Jasa pengerjaan tugas kuliah dengan kualitas terjamin, tepat
                                waktu, dan 100% confidential. Fokus ke hal yang lebih penting,
                                biarkan kami yang handle tugasmu.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col sm:flex-row gap-4 mb-10"
                            >
                                <a
                                    href="#contact"
                                    className="btn-primary inline-flex items-center justify-center gap-2 group"
                                >
                                    Mulai Konsultasi
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#services"
                                    className="btn-secondary inline-flex items-center justify-center"
                                >
                                    Lihat Layanan
                                </a>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-wrap gap-6"
                            >
                                {trustIndicators.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-gray-600"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#0B7A9F]" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Illustration */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={slideInRight}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Main illustration container */}
                                <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl bg-gradient-to-br from-[#A8D5E2] to-[#5BA8C4] flex items-center justify-center relative overflow-hidden animate-float">
                                    {/* Decorative elements */}
                                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/30 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                        <span className="text-3xl">📚</span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/30 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                        <span className="text-4xl">💻</span>
                                    </div>
                                    <div className="absolute top-1/2 left-6 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                                        <span className="text-2xl">✨</span>
                                    </div>

                                    {/* Central logo */}
                                    <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center p-4">
                                        <Image
                                            src="/logo.png"
                                            alt="Tenacity Logo"
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Floating cards */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -left-4 bottom-20 bg-white rounded-2xl shadow-xl p-4 hidden sm:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-gray-800">
                                                Tugas Selesai!
                                            </p>
                                            <p className="text-xs text-gray-500">Baru saja</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl p-4 hidden sm:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-xl">⭐</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-gray-800">
                                                Rating 5.0
                                            </p>
                                            <p className="text-xs text-gray-500">1000+ reviews</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
