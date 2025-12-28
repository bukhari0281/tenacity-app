"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileSearch, Clock, Wallet } from "lucide-react";
import { featuresAlternating, featuresGrid } from "@/lib/data";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

// Icon map for alternating features
const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    quality: FileSearch,
    ontime: Clock,
    affordable: Wallet,
};

export default function Features() {
    return (
        <section id="features" className="bg-[#F7F9FC]">
            {/* Alternating Features Section */}
            <div className="section-padding">
                <div className="container-custom">
                    {featuresAlternating.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className={`flex flex-col ${feature.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
                                } items-center gap-12 lg:gap-16 ${index !== featuresAlternating.length - 1 ? "mb-24" : ""}`}
                        >
                            {/* Content */}
                            <motion.div
                                variants={feature.imagePosition === "left" ? slideInRight : slideInLeft}
                                className="flex-1"
                            >
                                <span className="inline-block px-4 py-2 rounded-full bg-[#0B7A9F]/10 text-[#0B7A9F] text-sm font-medium mb-4">
                                    {feature.badge}
                                </span>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-6">
                                    {feature.title}
                                </h3>

                                <ul className="space-y-4 mb-6">
                                    {feature.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#0B7A9F] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={feature.link.href}
                                    className="inline-flex items-center gap-2 text-[#0B7A9F] font-semibold hover:gap-3 transition-all"
                                >
                                    {feature.link.text}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>

                            {/* Image/Illustration */}
                            <motion.div
                                variants={feature.imagePosition === "left" ? slideInLeft : slideInRight}
                                className="flex-1 w-full"
                            >
                                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#A8D5E2] to-[#5BA8C4] p-8 flex items-center justify-center">
                                        {/* Decorative elements */}
                                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded-xl backdrop-blur-sm" />
                                        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/30 rounded-2xl backdrop-blur-sm" />

                                        {/* Central icon */}
                                        <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                                            {(() => {
                                                const Icon = featureIconMap[feature.id];
                                                return <Icon className="w-16 h-16 text-[#0B7A9F]" />;
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Grid Features Section */}
            <div className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {featuresGrid.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.id}
                                    variants={fadeInUp}
                                    className="relative p-8 rounded-3xl bg-gradient-to-br from-[#F7F9FC] to-white border border-gray-100 group hover:border-[#5BA8C4]/50 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0B7A9F]/5 to-[#5BA8C4]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B7A9F] to-[#5BA8C4] flex items-center justify-center mb-6 shadow-lg">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{feature.description}</p>

                                        {/* Points */}
                                        <ul className="space-y-2">
                                            {feature.points.map((point, pointIndex) => (
                                                <li
                                                    key={pointIndex}
                                                    className="flex items-center gap-2 text-sm text-gray-500"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A9F]" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
