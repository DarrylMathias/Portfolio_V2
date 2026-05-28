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
} from '@react-email/components';

export default function AiMessageInfoEmail({ name, message, reply }) {
  const previewText = `Gemini Response Log for ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#f6f9fc] my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded-xl my-[40px] mx-auto p-[20px] max-w-[600px] bg-white shadow-xl">
            <Section className="mt-[16px] mb-[32px] text-center">
              <Text className="text-[#8b5cf6] text-[24px] font-bold m-0 tracking-tight">Darryl's AI Assistant Log</Text>
            </Section>
            
            <Heading className="text-black text-[24px] font-bold text-center p-0 my-[24px] mx-0">
              🤖 AI Query Logged
            </Heading>
            
            <Section className="bg-[#fcf8ff] rounded-lg p-[16px] my-[24px] border border-solid border-[#e9d5ff]">
              <Text className="text-[#333333] text-[15px] leading-[24px] m-0">
                <strong>Name:</strong> {name}
              </Text>
            </Section>

            <Section className="bg-[#f4f4f5] rounded-lg p-[20px] my-[24px] border-l-4 border-solid border-[#a78bfa]">
              <Text className="text-[#18181b] text-[14px] font-semibold m-0 mb-[12px]">
                📝 Original Query:
              </Text>
              <Text className="text-[#3f3f46] text-[15px] leading-[24px] m-0 whitespace-pre-wrap italic">
                {message}
              </Text>
            </Section>

            <Section className="bg-[#f8fafc] rounded-lg p-[20px] my-[24px] border-l-4 border-solid border-[#6366f1]">
              <Text className="text-[#18181b] text-[14px] font-semibold m-0 mb-[12px]">
                ✨ AI Response:
              </Text>
              <Text className="text-[#334155] text-[15px] leading-[24px] m-0 whitespace-pre-wrap">
                {reply}
              </Text>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            
            <Text className="text-[#666666] text-[13px] leading-[20px] mb-[8px] text-center">
              This log is generated whenever a user interacts with the AI assistant on the portfolio website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
