"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  Sparkles,
  AlertCircle,
  FileText,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { servicesData, pricelistData } from "@/lib/data";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

export default function Services() {
  const [isPricelistOpen, setIsPricelistOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (isPricelistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPricelistOpen]);

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

          <motion.p variants={fadeInUp} className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dari essay sampai coding, dari desain sampai analisis data. Kami cover semua kebutuhan
            tugas kuliahmu.
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
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center mt-12">
          <button
            onClick={() => setIsPricelistOpen(true)}
            className="btn-secondary inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Lihat Pricelist</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <AnimatePresence>
          {isPricelistOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPricelistOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-6 md:p-8 shrink-0 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-[#0B7A9F]/5 to-[#5BA8C4]/5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-[#0B7A9F]" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#0B7A9F]">
                        Daftar Harga
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1E293B]">
                      Pricelist Layanan Tenacity
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base mt-1">
                      Pilih kategori layanan di bawah ini untuk melihat detail estimasi biaya.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPricelistOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Tabs */}
                <div className="px-6 md:px-8 h-16 shrink-0 bg-slate-50 border-b border-slate-100 overflow-x-auto flex items-center gap-2 scrollbar-none">
                  {pricelistData.map((category, idx) => (
                    <button
                      key={category.title}
                      onClick={() => setActiveTab(idx)}
                      className={`h-10 px-5 rounded-full text-sm font-semibold flex items-center justify-center transition-all duration-200 whitespace-nowrap cursor-pointer ${
                        activeTab === idx
                          ? "bg-[#0B7A9F] text-white shadow-md shadow-[#0B7A9F]/20"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                {/* Modal Content - Scrollable area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50">
                  {pricelistData.map((category, idx) => {
                    if (activeTab !== idx) return null;

                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        {/* Note alert if Tugas */}
                        {category.title === "Tugas" && (
                          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/50 text-amber-800 text-sm flex gap-3 items-start">
                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <p>
                              <strong>Catatan:</strong> Harga yang tertera adalah estimasi dasar.
                              Harga final dapat menyesuaikan dengan tingkat kesulitan materi dan
                              deadline pengerjaan.
                            </p>
                          </div>
                        )}

                        {/* Grid layout depending on the category */}
                        {category.title === "Skripsi" ? (
                          <div className="grid md:grid-cols-3 gap-6">
                            {category.items.map((item) => (
                              <div
                                key={item.name}
                                className={`relative rounded-2xl p-6 bg-white border flex flex-col justify-between transition-all duration-300 ${
                                  item.isFeatured
                                    ? "border-[#0B7A9F] shadow-lg shadow-[#0B7A9F]/5 ring-2 ring-[#0B7A9F]/20"
                                    : "border-slate-200 shadow-sm"
                                }`}
                              >
                                {item.isFeatured && (
                                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0B7A9F] text-white text-[10px] font-bold uppercase tracking-wider">
                                    Paling Populer
                                  </span>
                                )}
                                <div>
                                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                                    {item.name}
                                  </h4>
                                  <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl md:text-3xl font-extrabold text-[#0B7A9F]">
                                      {item.price}
                                    </span>
                                    {item.details && (
                                      <span className="text-xs text-slate-500 font-medium">
                                        / {item.details}
                                      </span>
                                    )}
                                  </div>

                                  {item.features && item.features.length > 0 && (
                                    <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                                      {item.features.map((feat) => (
                                        <li
                                          key={feat}
                                          className="flex items-center gap-2 text-sm text-slate-600"
                                        >
                                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                          <span>{feat}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>

                                <a
                                  href={`https://wa.me/6285117116753?text=Halo%20Tenacity,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.name)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`w-full py-2.5 rounded-xl font-semibold text-center text-sm transition-all ${
                                    item.isFeatured
                                      ? "bg-[#0B7A9F] text-white hover:bg-[#0B7A9F]/90"
                                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                  }`}
                                >
                                  Pilih Paket
                                </a>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
                            <div className="divide-y divide-slate-100">
                              {category.items.map((item) => (
                                <div
                                  key={item.name}
                                  className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                      <FileText className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-slate-800 text-base md:text-lg">
                                        {item.name}
                                      </h4>
                                      {item.details && (
                                        <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                                          {item.details}
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                                    <span
                                      className={`text-lg font-bold ${
                                        item.price === "Hubungi Kami"
                                          ? "text-slate-500"
                                          : "text-[#0B7A9F]"
                                      }`}
                                    >
                                      {item.price}
                                    </span>
                                    <a
                                      href={`https://wa.me/6285117116753?text=Halo%20Tenacity,%20saya%20ingin%20tanya%20tentang%20layanan%20${encodeURIComponent(item.name)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-4 py-2 rounded-xl bg-[#0B7A9F]/10 hover:bg-[#0B7A9F] text-[#0B7A9F] hover:text-white font-semibold text-xs md:text-sm transition-all duration-200 flex items-center gap-1.5"
                                    >
                                      <MessageCircle className="w-3.5 h-3.5" />
                                      Tanya Detail
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Modal Footer */}
                <div className="p-6 md:p-8 shrink-0 bg-white border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">
                      Punya kebutuhan khusus atau deadline sangat mepet?
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                      Konsultasikan secara gratis bersama tim customer service kami.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/6285117116753?text=Halo%20Tenacity,%20saya%20ingin%20konsultasi%20tugas%20saya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 group cursor-pointer w-full md:w-auto justify-center"
                  >
                    <span>Konsultasi Sekarang</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
