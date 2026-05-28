import * as React from 'react';
import {
  Body,
  Button,
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

export default function SparkConfirmationEmail({ name, id }) {
  const previewText = `Welcome to Daily Spark - Please confirm your subscription`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#f8fafc] my-auto mx-auto font-sans">
          <Container className="bg-white rounded-xl shadow-lg my-[40px] mx-auto overflow-hidden max-w-[600px] border border-solid border-[#e2e8f0]">
            <Section className="bg-gradient-to-r from-[#667eea] to-[#764ba2] p-[40px] text-center">
              <Heading className="text-white text-[32px] font-bold m-0 tracking-tight">
                ⚡ Daily Spark
              </Heading>
              <Text className="text-white text-[16px] m-0 mt-[10px] opacity-90 font-light">
                Your daily motivation dose
              </Text>
            </Section>

            <Section className="p-[40px]">
              <Heading className="text-[#1e293b] text-[24px] font-semibold m-0 mb-[20px]">
                Welcome aboard, {name}! 🎉
              </Heading>
              
              <Text className="text-[#475569] text-[16px] leading-[24px] m-0 mb-[20px]">
                Thank you for subscribing to Daily Spark! You're now part of a community that believes in starting each day with purpose and positivity.
              </Text>

              <Section className="bg-[#f1f5f9] border-l-4 border-solid border-[#667eea] p-[20px] my-[30px] rounded-r-lg">
                <Text className="text-[#334155] text-[16px] italic m-0">
                  "Every morning we are born again. What we do today is what matters most."
                </Text>
              </Section>

              <Text className="text-[#475569] text-[16px] m-0 mb-[10px] font-semibold">
                Starting tomorrow, you'll receive:
              </Text>
              
              <Section className="mb-[30px]">
                <Text className="text-[#475569] text-[15px] m-0 mb-[8px]">🌅 Daily motivational quotes to kickstart your morning</Text>
                <Text className="text-[#475569] text-[15px] m-0 mb-[8px]">🌤️ Weather updates for your city</Text>
                <Text className="text-[#475569] text-[15px] m-0 mb-[8px]">💡 Actionable tips for personal growth</Text>
                <Text className="text-[#475569] text-[15px] m-0 mb-[8px]">🎯 Weekly challenges to keep you motivated</Text>
              </Section>

              <Text className="text-[#475569] text-[16px] leading-[24px] m-0 mb-[30px]">
                To complete your subscription and start receiving your daily dose of motivation, please confirm your email address below:
              </Text>

              <Section className="text-center my-[32px]">
                <Button 
                  href={`https://darrylmathias.vercel.app/api/confirm/${id}`}
                  className="bg-[#10b981] text-white px-[32px] py-[16px] rounded-lg font-semibold text-[15px] mx-[10px] my-[10px] inline-block text-center"
                >
                  ✅ Confirm Subscription
                </Button>
                
                <Button 
                  href={`https://darrylmathias.vercel.app/api/deleteUser/${id}`}
                  className="bg-[#f8fafc] text-[#64748b] border-2 border-solid border-[#e2e8f0] px-[32px] py-[16px] rounded-lg font-semibold text-[15px] mx-[10px] my-[10px] inline-block text-center"
                >
                  ❌ Unsubscribe
                </Button>
              </Section>

              <Hr className="border border-solid border-[#e2e8f0] my-[30px] mx-0 w-full" />
              
              <Text className="text-[#64748b] text-[14px] leading-[24px] m-0">
                <strong>Note:</strong> If you didn't sign up for Daily Spark, you can safely ignore this email or click the unsubscribe button above.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
