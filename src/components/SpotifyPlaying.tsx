"use client";

import { Flex, Text, Avatar, Icon } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export const SpotifyPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using a sample preview URL for demo purposes
  const song = {
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    cover: "https://i.scdn.co/image/ab67616d0000b2734718e28d24227b9dc0bb753c",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4a49931b269b2d8d805178696b99480cf879e64e?cid=774b29d4f13844c495f206cafdad9c86",
  };

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(song.previewUrl);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Audio playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Flex
        as="button"
        onClick={togglePlay}
        vertical="center"
        gap="12"
        padding="4"
        paddingRight="16"
        radius="full"
        border="neutral-alpha-medium"
        background="surface"
        className="cursor-pointer transition-transform active:scale-95"
      >
        <Flex position="relative" vertical="center" horizontal="center">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ filter: isPlaying ? "none" : "grayscale(100%)", opacity: isPlaying ? 1 : 0.8 }}
          >
            <Avatar src={song.cover} size="m" />
          </motion.div>
          {!isPlaying && (
            <Flex
              position="absolute"
              className="inset-0 bg-black/30 rounded-full"
              vertical="center"
              horizontal="center"
            >
              <Icon name="play" size="s" onBackground="neutral-strong" />
            </Flex>
          )}
        </Flex>

        <Flex direction="column" horizontal="start">
          <Text variant="label-default-s" onBackground="neutral-strong">
            {song.title}
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {song.artist}
          </Text>
        </Flex>

        {isPlaying && (
          <div className="flex gap-[3px] items-end h-3 ml-2">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-[2px] bg-green-500 rounded-full"
                animate={{ height: [4, 16, 4] }}
                transition={{
                  duration: 0.5 + Math.random() * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        )}
      </Flex>
    </>
  );
};
