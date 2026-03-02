import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { Mailchimp } from "@/components";
import AvatarGlow from "@/components/about/AvatarGlow";
import React from "react";
import { Icon, IconButton, Tag } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* About Section (Now Home) */}
      <Column
        id="home"
        fillWidth
        maxWidth="m"
        paddingX="l"
        gap="xl"
        style={{ minHeight: "100vh" }}
        vertical="center"
      >
        <Row fillWidth s={{ direction: "column" }} horizontal="center" gap="xl">
          {about.avatar.display && (
            <Column fitHeight minWidth="160" gap="m" horizontal="center" flex={3}>
              <AvatarGlow src={person.avatar} size="xl" />
              <Row gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Row>
              {person.languages && person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map((language) => (
                    <Tag key={language} size="l">
                      {language}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          )}
          <Column flex={9} gap="xl">
            <Column fillWidth gap="m">
              <Heading variant="display-strong-xl">{person.name}</Heading>
              <Column gap="4">
                <Text variant="display-default-xs" onBackground="neutral-weak">
                  {person.role}
                </Text>
                {about.calendar.display && (
                  <Row
                    fitWidth
                    border="brand-alpha-medium"
                    background="brand-alpha-weak"
                    radius="full"
                    padding="4"
                    gap="8"
                    vertical="center"
                    style={{
                      backdropFilter: "blur(var(--static-space-1))",
                    }}
                  >
                    <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                    <Row paddingX="8">Schedule a call</Row>
                    <IconButton
                      href={about.calendar.link}
                      data-border="rounded"
                      variant="secondary"
                      icon="chevronRight"
                    />
                  </Row>
                )}
              </Column>
              {social.length > 0 && (
                <Row gap="8" wrap>
                  {social.map(
                    (item) =>
                      item.link && (
                        <IconButton
                          key={item.name}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      ),
                  )}
                </Row>
              )}
            </Column>
            <Column id="about" fillWidth gap="m">
              <Text variant="body-default-l" onBackground="neutral-weak">
                {about.intro.description}
              </Text>
            </Column>
            {about.work.display && (
              <Column gap="m">
                <Heading as="h2" variant="display-strong-s">
                  {about.work.title}
                </Heading>
                {about.work.experiences.map((exp) => (
                  <Column key={`${exp.company}-${exp.role}`} gap="4">
                    <Row horizontal="between" vertical="end">
                      <Text variant="heading-strong-l">{exp.company}</Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {exp.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {exp.role}
                    </Text>
                    <Column as="ul" gap="8" paddingLeft="16">
                      {exp.achievements.map((ach, j) => (
                        <Text as="li" key={`${exp.company}-${j}`} variant="body-default-m">
                          {ach}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            )}
          </Column>
        </Row>
      </Column>

      <Mailchimp />
    </Column>
  );
}
