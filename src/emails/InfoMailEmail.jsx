import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from '@react-email/components';

export default function InfoMailEmail({ name, message, email }) {
  const previewText = `New Feedback from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#f6f9fc] my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded-xl my-[40px] mx-auto p-[20px] max-w-[600px] bg-white shadow-xl">
            <Section className="mt-[16px] mb-[32px] text-center">
              <Text className="text-[#8b5cf6] text-[24px] font-bold m-0 tracking-tight">Darryl's Portfolio</Text>
            </Section>
            
            <Heading className="text-black text-[24px] font-bold text-center p-0 my-[24px] mx-0">
              🚀 New Feedback Received
            </Heading>
            
            <Section className="bg-[#fcf8ff] rounded-lg p-[20px] my-[24px] border border-solid border-[#e9d5ff]">
              <Text className="text-[#333333] text-[15px] leading-[24px] m-0 mb-[12px]">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-[#333333] text-[15px] leading-[24px] m-0">
                <strong>Email:</strong> <Link href={`mailto:${email}`} className="text-[#8b5cf6] underline">{email}</Link>
              </Text>
            </Section>

            <Section className="bg-[#f4f4f5] rounded-lg p-[20px] my-[24px] border-l-4 border-solid border-[#a78bfa]">
              <Text className="text-[#18181b] text-[14px] font-semibold m-0 mb-[12px]">
                💬 Message:
              </Text>
              <Text className="text-[#3f3f46] text-[15px] leading-[24px] m-0 whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            
            <Text className="text-[#666666] text-[13px] leading-[20px] mb-[8px] text-center">
              This notification was generated from your portfolio website's contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
