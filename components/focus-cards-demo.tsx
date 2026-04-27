import { FocusCards } from "@/components/ui/focus-cards";
import { desc } from "framer-motion/client";
import { link } from "fs";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Art GAN",
      desc: "A Generative Adversarial Network to generate realistic oil-painted portraits",
      src: "/images/issl.jpg",
      link: "https://github.com/uniitee/MLSC_SeasonOfAI/blob/main/Art_Gan.ipynb",
    },
    {
      title: "Cheer Board",
      desc: "Supporting educator wellbeing through reflection, mindful habits, and daily joy.",
      src: "/images/issc.jpg",
      link: "https://cheerboard.vercel.app/",
    },
    {
      title: "CrowdFunding DApp",
      desc: "Crowdfunding platform where users can create campaigns, donate using crypto, and track progress in a decentralized, transparent way.",

      src: "/images/issr.jpg",
      link: "https://github.com/uniitee/Crowdfunding-Platform",
    },
  ];

  return <FocusCards cards={cards} />;
}
