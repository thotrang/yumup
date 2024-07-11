import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import LibraryImage from "@/components/home/LibraryImage";
import OpeningStatement from "@/components/home/OpeningStatement";
import BannerAboutUs from "@/public/images/banner-about-us.jpeg";

export default function AboutUs() {
  const contents = [
    `TheSoul Publishing is one of the world’s most prolific and popular online media companies, reaching over 2,000,000,000 (yep, that's 2 billion!) social media subscribers across the world’s most popular platforms including YouTube, Facebook, Instagram, Snap, Pinterest, and TikTok.`,
    `Our content garners more than 25 billion social media views every month. Ahead of all studios and media companies, including Disney and Warner Bros. Discovery, TheSoul generated more views on YouTube and Facebook in the world in 2020, 2021, and 2022 according to Tubular Labs.`,
    `TheSoul Publishing has garnered numerous accolades, including top honors and nominations from the Webby, Shorty, Telly, Viddy, Streamy, Stevie, and Lovie awards. The company was recently named ‘Digital Studio of the Year’ at Digiday’s 2023 Video & TV Awards, won 'Best YouTube Presence' at the 2023 Shorty Awards and was nominated for ‘Social Media Team of the Year’ at the The Drum’s 2023 Online Media Awards.`,
  ];
  const history = [
    `TheSoul Publishing began in 2016 in Limassol, Cyprus. The company evolved from a brand called AdMe, an advertising-focused informational website that co-founders and former co-CEOs Pavel Radaev and Marat Mukhametov created. After gaining popularity, AdMe transitioned to producing more light-hearted, entertainment-style content, including Bright Side and followed in 2016 with the launch of the global phenomenon 5-Minute Crafts.`,
    `Since 2016, from their headquarters in Cyprus, TheSoul Publishing continued to grow these brands and launch additional entertainment-focused properties. The company has production studios and offices across Europe and in the U.S.`,
    `In October 2022, the company's long-time COO Arthur Mamedov was elevated to CEO and TheSoul's executive producer Anastasiia Vinogradova was named Chief Creative Officer (CCO). `,
    `In December 2022, TheSoul Publishing acquired the next-generation management company, Underscore Talent, helping a diverse group of talent leverage today’s “attention economy”. `,
  ];
  const ourTeam = [
    `We mean it when we say we’re a global company.`,
    `The proof? We deliver engaging and irresistibly shareable content for all ages in 21 languages, and our creative team is spread across 70 countries and 6 continents. `,
    `As a remote-first company, we pride ourselves on the fact that roughly 70% of us work remotely full-time. `,
    `From researchers, animators, editors, sound mixers, translators, voice-over artists, and more, we have tailored systems and workflows that enable streamlined cross-collaboration between production teams no matter where they are in the world.`,
  ];

  return (
    <div>
      <BaseImage src={BannerAboutUs} alt={""} className="w-full h-auto" />
      <BaseWrapperLayout
        isBackground
        className="font-bold sm:py-12 py-8 text-center lg:mx-base80 sm:mx-8 mx-4"
      >
        <OpeningStatement />
      </BaseWrapperLayout>
      <BaseWrapperLayout className="lg:mx-6 py-12">
        <BaseText
          className="font-bold text-xl-2 leading-[48px] tracking-tighter"
          tag="h1"
        >
          <BaseText className="text-t-primary">WHAT DOES</BaseText>
          <BaseText className="text-t-primary">YUMUP</BaseText>
          <BaseText className="text-t-primary">PUBLISHING DO?</BaseText>
        </BaseText>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 font-medium leading-[32px] text-l pt-8">
          <div className="grid grid-row-1 gap-12">
            <BaseText content={contents[0]}></BaseText>
            <BaseText content={contents[1]}></BaseText>
          </div>
          <BaseText content={contents[2]}></BaseText>
        </div>
      </BaseWrapperLayout>
      <LibraryImage />
      <BaseWrapperLayout className="lg:mx-6 grid lg:grid-cols-2 grid-cols-1 gap-9">
        <div className="flex flex-col gap-8">
          <BaseText className="!text-t-primary font-bold text-xl-2 tracking-tighter">HISTORY</BaseText>
          {history.map((item, index) => (
            <div  key={index}>
              <BaseText className="font-medium leading-[32px] text-l" content={item}></BaseText>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <BaseText className="!text-t-primary font-bold text-xl-2 tracking-tighter">OUR TEAM</BaseText>
          {ourTeam.map((item, index) => (
            <div key={index}>
              <BaseText className="font-medium leading-[32px] text-l" content={item}></BaseText>
            </div>
          ))}
        </div>
      </BaseWrapperLayout>
    </div>
  );
}
