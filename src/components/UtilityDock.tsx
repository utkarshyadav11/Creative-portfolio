"use client";

import { Flex, Icon, IconButton, Text } from "@once-ui-system/core";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const UtilityDock = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const router = useRouter();

  const tabs = [
    { id: "stats", icon: "stats", label: "Stats" },
    { id: "command", icon: "command", label: "Command" },
    { id: "ai", icon: "ai", label: "AI Pitch" },
  ];

  const stats = [
    { label: "Next.js", value: "16.0" },
    { label: "Tailwind", value: "4.0" },
    { label: "React", value: "19.0" },
    { label: "Speed", value: "99" },
  ];

  const commands = [
    { label: "Projects", icon: "grid", action: () => router.push("/work") },
    { label: "Blog", icon: "book", action: () => router.push("/blog") },
    { label: "Resume", icon: "document", action: () => window.open("/resume.pdf", "_blank") },
    {
      label: "Contact",
      icon: "email",
      action: () => {
        window.location.href = "mailto:utkarshyadav6745@gmail.com";
      },
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-row-reverse items-center gap-4">
      {/* Dock Container */}
      <motion.div
        layout
        className="flex flex-col items-center gap-3 p-2 rounded-full bg-neutral-900/10 dark:bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl"
      >
        {tabs.map((tab) => (
          <div key={tab.id} className="relative group">
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-black/80 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {tab.label}
            </div>

            <IconButton
              icon={tab.icon}
              variant={activeTab === tab.id ? "primary" : "tertiary"}
              size="l"
              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
              className={`rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "shadow-[0_0_20px_rgba(var(--brand-strong),0.5)] scale-110"
                  : "hover:scale-110 hover:bg-white/10"
              }`}
            />
          </div>
        ))}
        {activeTab && (
          <>
            <div className="w-8 h-[1px] bg-neutral-500/30 my-1" />
            <IconButton
              icon="x"
              variant="tertiary"
              size="m"
              onClick={() => setActiveTab(null)}
              className="rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors"
            />
          </>
        )}
      </motion.div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        {activeTab && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-5 rounded-2xl bg-neutral-900/80 dark:bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[320px] max-w-sm mr-2"
          >
            {activeTab === "stats" && (
              <Flex direction="column" gap="16">
                <Flex vertical="center" gap="8">
                  <Icon name="stats" size="s" onBackground="brand-weak" />
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    System Status
                  </Text>
                </Flex>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {stat.label}
                      </Text>
                      <Text variant="heading-strong-m" className="font-mono mt-1">
                        {stat.value}
                      </Text>
                    </div>
                  ))}
                </div>
              </Flex>
            )}

            {activeTab === "command" && (
              <Flex direction="column" gap="12">
                <Text variant="label-default-s" onBackground="neutral-weak" paddingBottom="4">
                  Quick Access
                </Text>
                <div className="flex flex-col gap-1">
                  {commands.map((cmd) => (
                    <button
                      key={cmd.label}
                      type="button"
                      onClick={() => {
                        cmd.action();
                        setActiveTab(null);
                      }}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          <Icon name={cmd.icon} size="s" />
                        </div>
                        <Text variant="body-default-s">{cmd.label}</Text>
                      </div>
                      <Icon
                        name="chevronRight"
                        size="xs"
                        onBackground="neutral-weak"
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </button>
                  ))}
                </div>
              </Flex>
            )}

            {activeTab === "ai" && (
              <Flex direction="column" gap="16">
                <Flex
                  direction="column"
                  gap="12"
                  className="bg-gradient-to-b from-white/10 to-transparent p-4 rounded-xl border border-white/10"
                >
                  <Flex vertical="center" gap="8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-strong blur-lg opacity-50" />
                      <Icon name="ai" size="m" onBackground="brand-strong" className="relative" />
                    </div>
                    <Text variant="heading-strong-s">Utkarsh AI</Text>
                  </Flex>
                  <Text variant="body-default-s" className="leading-relaxed">
                    "I specialize in <strong>high-performance</strong> web architecture. My stack is
                    focused on <strong>Next.js 16</strong>, <strong>Tailwind 4</strong>, and
                    scalable <strong>DevOps</strong> solutions."
                  </Text>
                </Flex>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => window.open("https://linkedin.com/in/iutkarshyadav/", "_blank")}
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/30 transition-all"
                  >
                    <Icon name="linkedin" size="s" className="text-[#0077b5]" />
                    <Text variant="label-default-s">LinkedIn</Text>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open("https://github.com/utkarshyadav11", "_blank")}
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
                  >
                    <Icon name="github" size="s" />
                    <Text variant="label-default-s">GitHub</Text>
                  </button>
                </div>
              </Flex>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
