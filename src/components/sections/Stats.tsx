"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Star, Award, CheckCircle, Layers } from "lucide-react";
import { statsData } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  satisfaction: Star,
  experience: Award,
  tasks: CheckCircle,
  categories: Layers,
};

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B7A9F] to-[#5BA8C4]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {statsData.map((stat, index) => {
            const Icon = iconMap[stat.id];
            return (
              <motion.div
                key={stat.id}
                variants={fadeInUp}
                className="glass rounded-3xl p-6 md:p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-2">
                  {isInView && (
                    <CountUp end={stat.number} duration={2.5} separator="," suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <p className="font-semibold text-[#1E293B] mb-1 text-sm md:text-base">
                  {stat.label}
                </p>

                {/* Subtext */}
                <p className="text-gray-500 text-xs md:text-sm">{stat.subtext}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
