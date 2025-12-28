"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Grid3X3, MessageCircle, HelpCircle, User } from "lucide-react";
import { mobileNavItems } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    home: Home,
    services: Grid3X3,
    chat: MessageCircle,
    faq: HelpCircle,
    profile: User,
};

export default function MobileNav() {
    const [activeItem, setActiveItem] = useState("home");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

            // Update active item based on scroll position
            const sections = ["home", "services", "features", "faq", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        if (section === "contact") setActiveItem("chat");
                        else if (section === "features") setActiveItem("profile");
                        else setActiveItem(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
            {/* Safe area background */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" />

            {/* Navigation items */}
            <div className="relative flex items-center justify-around h-16 px-4 pb-safe">
                {mobileNavItems.map((item) => {
                    const Icon = iconMap[item.id];
                    const isActive = activeItem === item.id;
                    const isCenter = item.isCenter;

                    if (isCenter) {
                        // Floating center button
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => setActiveItem(item.id)}
                                className="relative -mt-6"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.95 }}
                                    className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0B7A9F] to-[#5BA8C4] flex items-center justify-center shadow-lg animate-pulse-glow"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                            </a>
                        );
                    }

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveItem(item.id)}
                            className="flex flex-col items-center gap-1 py-2 px-3"
                        >
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    color: isActive ? "#0B7A9F" : "#64748B",
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.div>
                            <motion.span
                                animate={{
                                    opacity: isActive ? 1 : 0.7,
                                    color: isActive ? "#0B7A9F" : "#64748B",
                                }}
                                className="text-xs font-medium"
                            >
                                {item.label}
                            </motion.span>

                            {/* Active indicator */}
                            {isActive && !isCenter && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute -bottom-0 w-1 h-1 rounded-full bg-[#0B7A9F]"
                                />
                            )}
                        </a>
                    );
                })}
            </div>
        </motion.nav>
    );
}
