'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { X, ExternalLink, ArrowRight } from 'lucide-react'

export interface BentoItem {
    id: string | number
    title: string
    subtitle?: string
    description?: string
    content: React.ReactNode
    icon?: React.ReactNode
    className?: string
    image?: string
    actionText?: string
    onAction?: () => void
}

export interface BentoGridProps {
    items: BentoItem[]
    className?: string
}

export default function ExpandableBentoGrid({ items, className = '' }: BentoGridProps) {
    const [active, setActive] = useState<BentoItem | boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    const activeItem = typeof active === 'object' && active !== null ? active : null

    return (
        <div className={`w-full ${className}`}>
            <AnimatePresence>
                {activeItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full z-[10000]"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem ? (
                    <div className="fixed inset-0 top-0 sm:top-12 grid place-items-center z-[10001] p-3 sm:p-6 overflow-y-auto">
                        <motion.button
                            key={`button-${activeItem.title}-${id}`}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            className="flex absolute top-4 right-4 md:right-10 items-center justify-center bg-black/90 hover:bg-[#c3f400] text-[#c3f400] hover:text-black border-2 border-[#c3f400] rounded-full h-9 w-9 z-30 cursor-pointer shadow-[3px_3px_0px_#000] transition-colors"
                            onClick={() => setActive(null)}
                            aria-label="Cerrar modal"
                        >
                            <X className="h-5 w-5" />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${activeItem.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[560px] h-fit max-h-[92vh] flex flex-col bg-[#141414] border-3 border-[#c3f400] text-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000000]"
                        >
                            <motion.div layoutId={`image-${activeItem.title}-${id}`}>
                                <div className="w-full h-48 sm:h-60 bg-[#0a0a0a] flex items-center justify-center p-4 border-b-2 border-[#2b2b2b] relative overflow-hidden neo-dots-bg">
                                    <div className="absolute top-2 left-3 font-mono text-[9px] text-[#555] uppercase tracking-wider">
                                        EXPANDED PREVIEW // SYSTEM ACTIVE
                                    </div>
                                    {activeItem.image ? (
                                        <img
                                            src={activeItem.image}
                                            alt={activeItem.title}
                                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                                        />
                                    ) : activeItem.icon ? (
                                        <div className="scale-[2] text-[#c3f400] flex items-center justify-center">
                                            {activeItem.icon}
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-[#1c1c1c]" />
                                    )}
                                </div>
                            </motion.div>

                            <div className="flex flex-col flex-1 overflow-hidden">
                                <div className="flex justify-between p-4 sm:p-5 items-center gap-3 border-b border-[#262626] bg-[#1a1a1a]">
                                    <div className="flex-1 min-w-0">
                                        <motion.h3
                                            layoutId={`title-${activeItem.title}-${id}`}
                                            className="font-bold text-white text-lg sm:text-xl font-mono uppercase tracking-tight truncate"
                                        >
                                            {activeItem.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${activeItem.title}-${id}`}
                                            className="text-[#a0a09a] text-xs sm:text-sm text-balance mt-0.5 line-clamp-1"
                                        >
                                            {activeItem.description || activeItem.subtitle}
                                        </motion.p>
                                    </div>

                                    {activeItem.onAction ? (
                                        <motion.button
                                            layoutId={`button-${activeItem.title}-${id}`}
                                            onClick={() => {
                                                activeItem.onAction?.()
                                                setActive(null)
                                            }}
                                            className="px-4 py-2 text-xs sm:text-sm rounded-xl font-bold bg-[#c3f400] text-black hover:bg-[#b0dc00] transition-colors border-2 border-black shadow-[2px_2px_0px_#000] shrink-0 font-mono uppercase flex items-center gap-1.5 cursor-pointer"
                                        >
                                            <span>{activeItem.actionText || 'Ver Detalle'}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </motion.button>
                                    ) : (
                                        <motion.a
                                            layoutId={`button-${activeItem.title}-${id}`}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setActive(null)
                                            }}
                                            className="px-4 py-2 text-xs sm:text-sm rounded-xl font-bold bg-[#c3f400] text-black hover:bg-[#b0dc00] transition-colors border-2 border-black shadow-[2px_2px_0px_#000] shrink-0 font-mono uppercase flex items-center gap-1.5"
                                        >
                                            <span>{activeItem.actionText || 'Visit'}</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </motion.a>
                                    )}
                                </div>

                                <div className="p-4 sm:p-5 flex-1 overflow-y-auto max-h-[280px] custom-scrollbar">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[#cccccc] text-xs sm:text-sm leading-relaxed flex flex-col gap-3"
                                    >
                                        {activeItem.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="max-w-6xl mx-auto w-full gap-3 sm:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-${item.title}-${id}`}
                        key={item.id}
                        onClick={() => setActive(item)}
                        className={`p-4 flex flex-col sm:flex-row justify-between items-center hover:bg-[#1a1a1a] rounded-xl cursor-pointer bg-[#141414] border-2 border-[#2b2b2b] hover:border-[#c3f400] transition-all duration-200 shadow-[4px_4px_0px_#000000] hover:shadow-[5px_5px_0px_#c3f400] hover:-translate-y-0.5 ${item.className || ''}`}
                    >
                        <div className="flex gap-3.5 flex-row items-center w-full">
                            <motion.div layoutId={`image-${item.title}-${id}`} className="shrink-0">
                                <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-lg bg-[#0d0d0d] border border-[#333] flex items-center justify-center text-[#c3f400] p-1.5 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                                        />
                                    ) : item.icon ? (
                                        <div className="text-[#c3f400] flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-[#222]" />
                                    )}
                                </div>
                            </motion.div>
                            <div className="flex-1 min-w-0">
                                <motion.h3
                                    layoutId={`title-${item.title}-${id}`}
                                    className="font-bold text-white text-sm sm:text-base text-left font-mono uppercase truncate"
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${item.title}-${id}`}
                                    className="text-[#888880] text-left text-xs line-clamp-2 mt-1 leading-snug"
                                >
                                    {item.subtitle || item.description}
                                </motion.p>
                                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#c3f400]">
                                    <span>EXPANDIR DETALLE</span>
                                    <ArrowRight className="w-2.5 h-2.5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </div>
    )
}
