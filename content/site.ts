type PlatformLinks = {
  spotify: string;
  apple: string;
  xiaoyuzhou: string;
  youtube: string;
  rss: string;
};

type CanonicalPlatformLinks = {
  spotify?: string;
  apple?: string;
  xiaoyuzhou?: string;
  youtube?: string;
  rss?: string;
};

type SiteData = {
  meta: {
    siteName: string;
    baseTitle: string;
    baseDescription: string;
  };
  header: {
    nav: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  hero: {
    titleLines: string[];
    subtitle: string;
    proofBadges: [string, string, string];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  helpHub: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
      ctaLabel: string;
      tone: "newsletter" | "primary" | "secondary";
    }>;
  };
  homeExplore: {
    title: string;
    intro: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  };
  trustStrip: {
    title: string;
    items: string[];
  };
  workIndex: {
    title: string;
    intro: string;
    items: Array<{
      name: string;
      summary: string;
      href: string;
      ctaLabel: string;
    }>;
  };
  about: {
    title: string;
    headline: string;
    subtitle: string;
    intro: string[];
    quickFacts: string[];
    journey: Array<{
      period: string;
      title: string;
      description: string;
    }>;
    projects: Array<{
      name: string;
      summary: string;
      href: string;
      ctaLabel: string;
    }>;
    cta: {
      newsletter: { label: string; href: string };
      talk: { label: string; href: string };
    };
  };
  lifeInMotion: {
    title_cn: string;
    title_en: string;
    intro_cn: string;
    stops: Array<{
      id: string;
      country_cn: string;
      city_cn: string;
      title_cn: string;
      body_cn: string;
      x: number;
      y: number;
    }>;
  };
  podcastsHosted: {
    title: string;
    intro: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      coverImage: string;
      links: PlatformLinks;
      platformLinks?: CanonicalPlatformLinks;
      startHere: Array<{ title: string; url: string }>;
      latestEpisodeUrl: string;
    }>;
  };
  newsletter: {
    title: string;
    name: string;
    valueProp: string;
    subscribeUrl: string;
    formHint: string;
    recentIssues: Array<{
      title: string;
      summary: string;
      url: string;
      date: string;
    }>;
  };
  book: {
    title: string;
    bookTitle: string;
    coverImage: string;
    blurb: string;
    why: string;
    fromPodcastId: string;
    relationshipNote: string;
    items: Array<{
      title: string;
      subtitle: string;
      platform: string;
      publishDate: string;
      wordCount: number;
      category: string;
      url: string;
      topics: string[];
    }>;
    buyLinks: Array<{ label: string; url: string }>;
  };
  projects: {
    title: string;
    intro: string;
    items: Array<{
      name: string;
      description: string;
      tags: string[];
      link: string;
      status: string;
    }>;
  };
  talk: {
    title: string;
    intro: string;
    calendlyUrl: string;
    whoItsFor: string[];
    topics: string[];
    goodFor: string[];
    notFor: string[];
    logistics: string[];
    cta: { label: string; href: string };
  };
  socials: {
    title: string;
    items: Array<{ platform: string; url: string; description: string }>;
  };
  ui: {
    latestEpisodeLabel: string;
  };
  footer: {
    contactEmail: string;
    note: string;
    copyright: string;
  };
};

export const siteData: SiteData = {
  meta: {
    siteName: "穿堂风Simona",
    baseTitle: "穿堂风Simona | 流动的人生",
    baseDescription:
      "很开心在这里遇见你。我是穿堂风Simona，前 Meta 数据工程师，2022 年后开始数字游民生活，目前常住阿姆斯特丹。",
  },

  header: {
    nav: [
      { label: "我主持的播客", href: "/podcasts" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "书", href: "/book" },
      { label: "项目", href: "/projects" },
      { label: "和我聊聊", href: "/talk" },
    ],
    cta: { label: "订阅", href: "/newsletter" },
  },

  hero: {
    titleLines: [
      "很开心在这里遇见你，",
      "我是穿堂风 Simona。",
    ],
    subtitle: "前 Meta 数据工程师。2022 年被裁员后开启数字游民生活，现在常住阿姆斯特丹。",
    proofBadges: ["1780期每日推荐", "150篇长文", "持续7年"],
    primaryCta: { label: "订阅 Newsletter", href: "/newsletter" },
    secondaryCta: { label: "预约聊天", href: "/talk" },
  },

  helpHub: {
    title: "先从这里开始",
    intro: "如果你第一次来，这三件事最能代表我现在在做的内容，也最容易帮你快速找到入口。",
    items: [
      {
        title: "每天一集播客推荐",
        description: "The Pod Luck Club：累计 1780 期每日播客推荐，累计 150 篇长文（周更）。",
        href: "/newsletter",
        ctaLabel: "订阅 Newsletter",
        tone: "newsletter",
      },
      {
        title: "听《噢妈妈》与 sàgó散讲",
        description: "一个讲女性真实故事，一个在公园长椅上散讲，适合不同状态下的你。",
        href: "/podcasts",
        ctaLabel: "从这里开始听",
        tone: "secondary",
      },
      {
        title: "和我 1:1 聊聊",
        description: "如果你正在迁移、转折或重建，我们可以用一杯咖啡的时间把下一步理清。",
        href: "/talk",
        ctaLabel: "预约一段对话",
        tone: "primary",
      },
    ],
  },

  homeExplore: {
    title: "你也可以按主题开始",
    intro: "不确定先看什么？选一个你当下最关心的入口。",
    items: [
      { label: "播客推荐", href: "/newsletter" },
      { label: "女性叙事", href: "/podcasts" },
      { label: "迁移与重建", href: "/talk" },
      { label: "关于我", href: "/about" },
      { label: "写作与成书", href: "/book" },
      { label: "项目实验", href: "/projects" },
      { label: "全部作品", href: "/work" },
    ],
  },

  trustStrip: {
    title: "为什么可以和我聊",
    items: [
      "前 Meta 数据工程师，做过完整的数据与内容系统工作。",
      "在美国生活 8 年，后来主动放弃绿卡，重选人生路径。",
      "跨新加坡、日本、阿姆斯特丹重建生活与工作节奏。",
      "长期创作：累计 1780 期每日推荐 + 150 篇周更长文。",
    ],
  },

  workIndex: {
    title: "作品索引",
    intro: "如果你想快速了解我做过什么，可以从下面这些入口直接进入。",
    items: [
      {
        name: "The Pod Luck Club",
        summary: "每天一档播客推荐，双周一封长信。",
        href: "/newsletter",
        ctaLabel: "去看 Newsletter",
      },
      {
        name: "《噢妈妈》",
        summary: "讲述中国女性真实故事的播客项目。",
        href: "/podcasts",
        ctaLabel: "去听播客",
      },
      {
        name: "《我为什么（不）想成为妈妈》",
        summary: "基于播客访谈整理成的纪实文稿。",
        href: "/book",
        ctaLabel: "去看这本书",
      },
      {
        name: "WomenOverseas 她乡",
        summary: "海外华人女性与 non-binary 社区共创项目。",
        href: "/projects",
        ctaLabel: "去看项目",
      },
      {
        name: "1:1 Coffee Chat",
        summary: "面向迁移、转折、创作重建阶段的对话支持。",
        href: "/talk",
        ctaLabel: "预约对话",
      },
    ],
  },

  about: {
    title: "关于我",
    headline: "嘿，我是穿堂风 Simona",
    subtitle: "前 Meta 数据工程师，播客与 Newsletter 创作者，目前常住阿姆斯特丹。",
    intro: [
      "过去这些年，我在不同城市之间移动，也在不同身份之间切换：学生、打工人、创作者、旅居者。",
      "我现在做的事情很简单：持续创作，持续实验，持续把复杂的人生经验讲清楚，写下来，说出来。",
    ],
    quickFacts: [
      "在美国生活 8 年，从学生成长为成年人，后来决定放弃绿卡。",
      "累计 1780 期每日播客推荐，累计 150 篇周更长文。",
      "跨新加坡、日本、阿姆斯特丹，持续重建生活与工作系统。",
      "长期创作《噢妈妈》与 sàgó散讲，并将访谈整理为纪实文稿。",
    ],
    journey: [
      {
        period: "美国（8年）",
        title: "从懵懂到独当一面",
        description: "这是我学会成年的地方。也是我认真想清楚后，决定放弃绿卡的阶段。",
      },
      {
        period: "新加坡（2年）",
        title: "第一次把生活过出来",
        description: "不再只有工作。那段时间我有了好朋友，也开始认真体验运动和生活本身。",
      },
      {
        period: "全球旅居",
        title: "背着 15 公斤，路过很多机场",
        description: "那几年我学会放松，也学会浪费时间，重新理解什么是“对自己有用”的节奏。",
      },
      {
        period: "日本",
        title: "现实很硬，但人更清醒",
        description: "文化隔阂、语言难度、工作突变，都逼着我更快面对真实世界和自己的选择。",
      },
      {
        period: "阿姆斯特丹（现在）",
        title: "再一次重建自己的人生",
        description: "我决定活在社会时钟之外。诚实地过好当下的每一秒钟，体验人生。",
      },
    ],
    projects: [
      {
        name: "The Pod Luck Club",
        summary: "每天一档播客推荐，周更长文。是我长期做内容筛选与表达练习的地方。",
        href: "/newsletter",
        ctaLabel: "订阅 Newsletter",
      },
      {
        name: "《噢妈妈》与 sàgó散讲",
        summary: "一个讲女性真实故事，一个做更松弛的散讲电波。",
        href: "/podcasts",
        ctaLabel: "去听播客",
      },
      {
        name: "《我为什么（不）想成为妈妈》",
        summary: "基于播客访谈整理成的纪实文稿，继续把声音沉淀成文字。",
        href: "/book",
        ctaLabel: "去看这本书",
      },
      {
        name: "1:1 Coffee Chat",
        summary: "如果你正在迁移、转折或重建，我们可以聊一聊，理清下一步。",
        href: "/talk",
        ctaLabel: "预约一段对话",
      },
    ],
    cta: {
      newsletter: { label: "先从 Newsletter 开始", href: "/newsletter" },
      talk: { label: "或者约我聊聊", href: "/talk" },
    },
  },

  lifeInMotion: {
    title_cn: "流动的人生",
    title_en: "A life in motion",
    intro_cn: "这些年我一直在移动。\n我决定活在社会时钟之外。",
    stops: [
      {
        id: "usa",
        country_cn: "美国",
        city_cn: "",
        title_cn: "八年：长大，也学会放手",
        body_cn:
          "我在美国八年，从懵懂学生走到能独当一面的成年人。学会成年的第一课，也在认真想清楚后，决定放弃美国绿卡。",
        x: 18,
        y: 35,
      },
      {
        id: "sg",
        country_cn: "新加坡",
        city_cn: "",
        title_cn: "两年：我终于学会生活",
        body_cn:
          "我在新加坡生活了两年。那段时间我终于不只是在工作，也开始真正生活：有了好朋友，也体验了很多新的运动。",
        x: 55,
        y: 55,
      },
      {
        id: "global-nomad",
        country_cn: "全球旅居",
        city_cn: "",
        title_cn: "在路上：轻一点，也真一点",
        body_cn:
          "路过世界各地的机场，背着一个 15 公斤的背包，就是我的全世界。那几年我学会放松，也学会浪费时间。",
        x: 68,
        y: 50,
      },
      {
        id: "tokyo",
        country_cn: "东京",
        city_cn: "",
        title_cn: "日本：碰壁，然后重来",
        body_cn:
          "文化隔阂、语言难度、关系重新开始。工作不到三个月公司就没钱了，至今还欠我一个月工资。现实很硬，但我也更清楚自己要什么。",
        x: 80,
        y: 45,
      },
      {
        id: "ams",
        country_cn: "阿姆斯特丹",
        city_cn: "",
        title_cn: "阿姆斯特丹：再一次重建",
        body_cn:
          "现在我在阿姆斯特丹，再一次重建自己的人生。诚实地过好当下的每一秒钟，体验人生。",
        x: 48,
        y: 25,
      },
    ],
  },

  podcastsHosted: {
    title: "我主持的播客",
    intro: "这是我把想法说出来的地方：讲女性的真实故事，也讲在公园长椅上的散讲电波。",
    items: [
      {
        id: "ohmama",
        title: "噢妈妈",
        description: "讲述属于中国女性的真实故事，相信女性的声音和讲述的力量。",
        coverImage: "/images/podcast-ohmama.jpg",
        links: {
          spotify: "https://open.spotify.com/show/1AUhH0zNMxuwuILEoFvDrK",
          apple: "https://ohmama.simona.life",
          xiaoyuzhou: "https://ohmama.simona.life",
          youtube: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
          rss: "https://ohmama.simona.life",
        },
        platformLinks: {
          spotify: "https://open.spotify.com/show/1AUhH0zNMxuwuILEoFvDrK",
        },
        startHere: [
          { title: "入门第 1 集（占位）", url: "#" },
          { title: "入门第 2 集（占位）", url: "#" },
          { title: "入门第 3 集（占位）", url: "#" },
        ],
        latestEpisodeUrl: "https://ohmama.simona.life",
      },
      {
        id: "sago",
        title: "sàgó散讲",
        description: "散讲 with Simona，在每一个公园长椅上向你发送电波。",
        coverImage: "/images/podcast-sago.jpg",
        links: {
          spotify: "https://open.spotify.com/show/49gsbyIxARl4tJZfrMyBkx",
          apple: "https://blog.simona.life/episodes/",
          xiaoyuzhou: "https://blog.simona.life/episodes/",
          youtube: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
          rss: "https://blog.simona.life/feed/audio.xml",
        },
        platformLinks: {
          apple: "https://podcasts.apple.com/ca/podcast/sago%E6%95%A3%E8%AE%B2/id1671385373",
        },
        startHere: [
          { title: "入门第 1 集（占位）", url: "#" },
          { title: "入门第 2 集（占位）", url: "#" },
          { title: "入门第 3 集（占位）", url: "#" },
        ],
        latestEpisodeUrl: "https://blog.simona.life/episodes/",
      },
    ],
  },

  newsletter: {
    title: "播客推荐 Newsletter",
    name: "The Pod Luck Club",
    valueProp:
      "优质播客推荐计划。累计 1780 期每日播客推荐，累计 150 篇长文（周更），持续记录我在世界各地的生活、工作与重建。",
    subscribeUrl: "https://thepodluckclub.com/",
    formHint: "点击订阅后会跳转到 The Pod Luck Club 官方页面。",
    recentIssues: [
      {
        title: "最近更新：优质播客推荐计划",
        summary: "每日一档推荐 + 双周长信，持续记录听见与流动中的生活。",
        url: "https://thepodluckclub.com/",
        date: "2026-02-01",
      },
      {
        title: "最近更新：发自世界角落的长信",
        summary: "在迁移、工作与创作之间，持续写下真实感受与选择。",
        url: "https://thepodluckclub.com/",
        date: "2026-01-15",
      },
    ],
  },

  book: {
    title: "书",
    bookTitle: "我为什么（不）想成为妈妈",
    coverImage: "/images/book.jpg",
    blurb: "从《噢妈妈》访谈出发，把真实对话整理为转录文稿，再编辑成可长期阅读的书。",
    why: "这本书沿着「播客采访 -> 转录整理 -> 纪实成书」的路径，把女性生命经验沉淀成文本。",
    fromPodcastId: "ohmama",
    relationshipNote: "这本书基于《噢妈妈》长期访谈与叙事整理而来。",
    items: [
      {
        title: "我为什么（不）想成为妈妈",
        subtitle: "根据《噢妈妈》的部分采访整理成文稿",
        platform: "微信读书",
        publishDate: "2025-02",
        wordCount: 168311,
        category: "纪实文学",
        url: "https://weread.qq.com/web/bookDetail/1fd32ce0813ab99d7g014a4c",
        topics: ["生育选择", "不婚不育", "丁克", "母职", "女性处境"],
      },
    ],
    buyLinks: [
      { label: "微信读书阅读", url: "https://weread.qq.com/web/bookDetail/1fd32ce0813ab99d7g014a4c" },
      { label: "关注《噢妈妈》", url: "https://ohmama.simona.life" },
    ],
  },

  projects: {
    title: "项目 / 实验",
    intro: "一些还在进行中的东西。它们不一定完成，但都真实地发生。",
    items: [
      {
        name: "WomenOverseas 她乡",
        description: "海外华人女性社区，连接女性与 non-binary，一起探索更广阔的世界。",
        tags: ["Community", "Women", "Overseas"],
        link: "https://womenoverseas.com",
        status: "Active",
      },
      {
        name: "穿堂风博客",
        description: "在每一个咖啡店里记录下此刻的心情，持续发布生活与迁移中的文字。",
        tags: ["Writing", "Life", "Blog"],
        link: "https://blog.simona.life/",
        status: "Active",
      },
      {
        name: "播客 Coaching Session",
        description: "从零开始启动播客，从设备、访谈到后期，帮助你更快完成第一季。",
        tags: ["Podcast", "Coaching", "Creator"],
        link: "https://www.buymeacoffee.com/simonana/e/107286",
        status: "Open",
      },
    ],
  },

  talk: {
    title: "和我聊聊",
    intro:
      "如果你也在迁移、转折或重建的路上，欢迎来一场 1:1 coffee chat。我们不找标准答案，只把你当下最难的一团线，慢慢理成下一步。",
    calendlyUrl: "https://buymeacoffee.com/simonana/e/336214",
    whoItsFor: [
      "正在考虑数字游民/海外生活的人",
      "处在职业转折期、想理清下一步方向的人",
      "准备开始 Newsletter 或播客创作的人",
      "希望把个人经历沉淀为作品或长期项目的人",
    ],
    topics: [
      "Gap 与全球旅居：做了两年后，我学到了什么",
      "从被裁员到重建生活系统：如何处理不确定",
      "从零开始做播客：选题、访谈、技术与发布",
      "如何在内容创作与现实生活之间找到可持续节奏",
    ],
    goodFor: [
      "你正在迁移或转折期，需要把当下的混乱理成可执行的下一步。",
      "你想开始 Newsletter / 播客，但不知道如何稳定输出。",
      "你有很多真实经历，想整理成长期内容或项目。",
      "你希望聊法务/移民之外，更现实的心理与节奏问题。",
    ],
    notFor: [
      "如果你想要标准答案或速成模板，这次聊天可能不适合。",
      "如果你期待正式咨询报告或代执行服务，这里不会提供。",
      "如果你处于紧急心理危机，请优先联系当地专业支持资源。",
    ],
    logistics: [
      "形式：线上 1:1 coffee chat",
      "时长：30 分钟（可延长）",
      "语言：中文 / English",
      "时区：Amsterdam（CET/CEST）",
    ],
    cta: { label: "预约一段对话", href: "/talk" },
  },

  socials: {
    title: "我在其他地方",
    items: [
      {
        platform: "Telegram",
        url: "https://t.me/daily_dose_podcast",
        description: "播客相关更新与日常碎片。",
      },
      {
        platform: "Mastodon",
        url: "https://m.cmx.im/@bluegrass",
        description: "公开写作与个人观察。",
      },
      {
        platform: "小红书",
        url: "https://www.xiaohongshu.com/user/profile/5fc5b484000000000100bcad",
        description: "关于工作、迁移与生活的真实记录。",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
        description: "节目与相关内容更新。",
      },
      {
        platform: "Newsletter",
        url: "https://thepodluckclub.com/",
        description: "每天一档播客推荐，每两周一封长信。",
      },
    ],
  },

  ui: {
    latestEpisodeLabel: "最新内容",
  },

  footer: {
    contactEmail: "hey.simonalife@gmail.com",
    note: "欢迎给我写邮件，或者在 Newsletter 里继续这场慢慢展开的对话。",
    copyright: "© " + new Date().getFullYear() + " 穿堂风Simona",
  },
};
