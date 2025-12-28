"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FAQ() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="section-padding bg-[#F7F9FC]">
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
                        FAQ
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4"
                    >
                        Pertanyaan yang Sering Ditanyakan
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg max-w-xl mx-auto"
                    >
                        Punya pertanyaan? Kami punya jawabannya
                    </motion.p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {faqData.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <motion.div
                                key={faq.id}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-[#1E293B] pr-8">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown
                                            className={`w-5 h-5 ${isOpen ? "text-[#0B7A9F]" : "text-gray-400"
                                                }`}
                                        />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <div className="h-px bg-gray-100 mb-4" />
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
