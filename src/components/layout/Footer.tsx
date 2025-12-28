"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import { footerLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
                >
                    {/* Brand Column */}
                    <motion.div variants={fadeInUp}>
                        <a href="#home" className="inline-flex items-center gap-3 mb-6">
                            <Image
                                src="/logo-white.png"
                                alt="Tenacity Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-bold text-xl">Tenacity</span>
                        </a>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[280px]">
                            Jasa pengerjaan tugas kuliah terpercaya sejak 2013. Membantu
                            ribuan mahasiswa mencapai kesuksesan akademik.
                        </p>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0B7A9F] transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="font-semibold text-white mb-6">Layanan</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Column */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="font-semibold text-white mb-6">Perusahaan</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="font-semibold text-white mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-[#5BA8C4] flex-shrink-0" />
                                <span>hello@tenacity.id</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-[#5BA8C4] flex-shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Clock className="w-5 h-5 text-[#5BA8C4] flex-shrink-0" />
                                <span>Senin-Minggu (24/7)</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <ul className="space-y-2">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2024 Tenacity. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Made with ❤️ for Indonesian Students
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Safe area for mobile bottom nav */}
            <div className="h-16 md:h-0 bg-[#0F172A]" />
        </footer>
    );
}
