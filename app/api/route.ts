export async function POST(req: Request) {
  const { tool, message } = await req.json();

  if (!message) {
    return Response.json({ reply: "Please enter your request first." });
  }

  const outputs: Record<string, string> = {
    "Ad Campaign Builder": `
Ad Campaign Builder — USA Market Output

Request:
${message}

Ad Hook:
Stop wasting time doing everything manually. Build smarter campaigns with AI.

Primary Ad Copy:
Nova AI helps creators, small businesses, marketers, and agencies create high-quality ads, emails, replies, scripts, and business content in minutes.

Short Ad:
Launch better campaigns faster with your AI Command Center.

CTA Options:
• Start Your AI Workspace
• Get Monthly Access
• Build Faster With AI
• Try Nova AI Today

Best Audience:
USA creators, consultants, agencies, entrepreneurs, coaches, service providers, and small businesses.
`,

    "Client Reply Writer": `
Client Reply Writer — Professional USA Business Reply

Request:
${message}

Polished Reply:
Hi,

Thank you for reaching out. I appreciate your message.

I understand what you’re looking for, and I’ll be happy to help. My goal is to make this simple, clear, and valuable for you.

Please send over any details you’d like me to review, and I’ll make sure you get the best possible next step.

Best,
Nova AI Team

Tone:
Professional, helpful, direct, and client-friendly.
`,

    "Business Idea Lab": `
Business Idea Lab — USA Digital Business Ideas

Request:
${message}

Top Ideas:
1. AI Content Agency for Local Businesses
2. Digital Product Template Store
3. AI Email + Reply Assistant
4. AI Social Media Caption Service
5. AI Business Toolkit Subscription

Best Pick:
AI Business Toolkit Subscription

Why It Works:
Low startup cost, monthly recurring revenue, digital delivery, and strong demand in the USA market.

Launch Plan:
1. Pick a niche.
2. Create a clean landing page.
3. Offer $19, $29, $49 monthly plans.
4. Run Facebook/TikTok ads.
5. Improve based on customer feedback.
`,

    "CEO Daily Planner": `
CEO Daily Planner — USA Business Execution Plan

Request:
${message}

Morning:
• Review revenue goals
• Pick top 3 money-making tasks
• Start with the task that creates sales or leads

Afternoon:
• Build product or improve website
• Create ad/content/email
• Follow up with clients or leads

Evening:
• Review results
• Improve weak areas
• Prepare tomorrow’s execution list

CEO Rule:
Do revenue-moving work first.
`,

    "Content Studio": `
Content Studio — USA Content Pack

Request:
${message}

Post Caption:
The smartest businesses are using AI to move faster. Nova AI helps you create ads, emails, replies, scripts, ideas, and content from one premium workspace.

Short Caption:
Create faster. Work smarter. Grow with AI.

Hashtags:
#AItools #SaaS #BusinessGrowth #DigitalBusiness #MarketingTools #Productivity #Entrepreneur

Reel Script:
Scene 1: Still writing everything manually?
Scene 2: Meet Nova AI — your AI Command Center.
Scene 3: Create ads, emails, replies, and content in minutes.
Scene 4: Start your AI workspace today.
`,

    "Sales Script Pro": `
Sales Script Pro — High-Converting USA Sales Script

Request:
${message}

Opening:
Are you tired of wasting hours creating ads, emails, replies, and content manually?

Problem:
Most people lose time because they don’t have one clean system for daily business work.

Solution:
Nova AI gives you a premium AI workspace where you can create content, ads, emails, scripts, business ideas, and plans in minutes.

Benefit:
Save time, work faster, and create professional outputs from one dashboard.

Close:
If you want to build faster and work smarter, Nova AI is the system you need.

CTA:
Start your monthly access today.
`,

    "Email Executive": `
Email Executive — Professional Business Email

Subject:
Quick Update Regarding Your Request

Email:
Hi,

Thank you for reaching out.

I reviewed your request regarding:
${message}

The best way to move forward is to keep the process simple, professional, and focused on the result you want.

I’ll be happy to help with the next step.

Best regards,
Nova AI Team
`,

    "Website Copy Pro": `
Website Copy Pro — Premium Landing Page Copy

Request:
${message}

Hero Headline:
Build Faster With Your AI Command Center

Subheadline:
Nova AI helps creators, marketers, agencies, and businesses generate ads, emails, replies, content, scripts, ideas, and plans from one premium AI workspace.

Feature Bullets:
• AI Chat Assistant
• Ad Campaign Builder
• Client Reply Writer
• Business Idea Generator
• Daily Planner
• Sales Script Creator

CTA:
Get Monthly Access

Trust Line:
Built for modern businesses that want speed, clarity, and professional output.
`,

    "Brand Message Maker": `
Brand Message Maker — Premium USA SaaS Positioning

Request:
${message}

Brand Positioning:
Nova AI is a premium AI command suite built for ambitious creators, marketers, agencies, and business owners who want speed, clarity, and execution.

Tone:
Modern, clean, executive, confident, premium, USA SaaS style.

Taglines:
1. Your Executive AI Command Center
2. Build Faster With Intelligent Tools
3. Premium AI Workspace For Modern Business
4. From Idea To Output In Minutes

Brand Promise:
Nova AI helps users turn daily work into professional, ready-to-use outputs.
`,
  };

  return Response.json({
    reply:
      outputs[tool] ||
      `
${tool} — Premium AI Output

Request:
${message}

Executive Answer:
Nova AI created a business-ready response designed for USA creators, marketers, agencies, and small businesses.

Action Plan:
1. Keep the message clear.
2. Focus on customer value.
3. Use direct premium wording.
4. Add a strong call-to-action.

CTA:
Start building faster with Nova AI.
`,
  });
}