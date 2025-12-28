"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/data";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-2 rounded-full bg-[#0B7A9F]/10 text-[#0B7A9F] text-sm font-medium mb-4"
                    >
                        Layanan Kami
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4"
                    >
                        Apa Saja yang Bisa Kami Kerjakan?
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Dari essay sampai coding, dari desain sampai analisis data. Kami
                        cover semua kebutuhan tugas kuliahmu.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {servicesData.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className="card group cursor-pointer"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B7A9F]/10 to-[#5BA8C4]/10 flex items-center justify-center mb-6 group-hover:from-[#0B7A9F] group-hover:to-[#5BA8C4] transition-all duration-300">
                                    <Icon className="w-7 h-7 text-[#0B7A9F] group-hover:text-white transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>

                                {/* Link */}
                                <div className="flex items-center gap-2 text-[#0B7A9F] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Pelajari lebih</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
