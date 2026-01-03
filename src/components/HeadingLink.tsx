"use client";

import React, { JSX } from "react";
import { Heading, Flex, IconButton, useToast } from "@once-ui-system/core";

interface HeadingLinkProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const HeadingLink: React.FC<HeadingLinkProps> = ({ id, level, children, style }) => {
  const { addToast } = useToast();

  const copyURL = (id: string): void => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(
      () => {
        addToast({
          variant: "success",
          message: "Link copied to clipboard.",
        });
      },
      () => {
        addToast({
          variant: "danger",
          message: "Failed to copy link.",
        });
      },
    );
  };

  const variantMap = {
    1: "display-strong-xs",
    2: "heading-strong-xl",
    3: "heading-strong-l",
    4: "heading-strong-m",
    5: "heading-strong-s",
    6: "heading-strong-xs",
  } as const;

  const variant = variantMap[level];
  const asTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Flex
      style={style}
      onClick={() => copyURL(id)}
      className="cursor-pointer group"
      vertical="center"
      gap="4"
    >
      <Heading
        className="decoration-1 underline-offset-[0.25em] decoration-[var(--neutral-border-strong)] group-hover:underline"
        id={id}
        variant={variant}
        as={asTag}
      >
        {children}
      </Heading>
      <IconButton
        className="opacity-0 scale-[0.875] group-hover:opacity-100 transition-opacity"
        size="s"
        icon="openLink"
        variant="ghost"
        tooltip="Copy"
        tooltipPosition="right"
      />
    </Flex>
  );
};
