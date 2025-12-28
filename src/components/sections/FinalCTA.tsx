"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FinalCTA() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B7A9F] via-[#0B7A9F] to-[#5BA8C4]" />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Siap Bebaskan Diri dari
                        <br className="hidden sm:block" /> Tugas Menumpuk?
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
                    >
                        Jangan biarkan tugas menghalangi aktivitas pentingmu. Chat kami
                        sekarang dan dapatkan konsultasi gratis!
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={fadeInUp} className="mb-12">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-[#0B7A9F] px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 animate-pulse-glow"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Hubungi Kami di WhatsApp
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-6 md:gap-10"
                    >
                        {/* Payment Methods */}
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                            <span className="text-white/60 text-sm">Payment:</span>
                            <div className="flex items-center gap-2">
                                {["BCA", "Mandiri", "GoPay", "OVO", "DANA"].map((method) => (
                                    <span
                                        key={method}
                                        className="text-white text-xs font-medium px-2 py-1 bg-white/20 rounded"
                                    >
                                        {method}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Security Badge */}
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                            <Shield className="w-5 h-5 text-green-400" />
                            <span className="text-white text-sm font-medium">
                                SSL Secured
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
