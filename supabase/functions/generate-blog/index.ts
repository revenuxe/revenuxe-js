import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, keywords, areas } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are an expert SEO content writer specializing in interior design and home improvement. Your task is to create high-quality, E-E-A-T compliant blog articles that demonstrate expertise, experience, authoritativeness, and trustworthiness.

CRITICAL REQUIREMENTS:
1. Content length: 2500-2800 words
2. Structure: Use proper H2 headings, bullet lists, and tables
3. Expertise: Include real expertise, credentials, case studies with source URLs
4. Keywords: Naturally integrate long-tail, intent-based keywords
5. Readability: Write at a 12-year-old reading level (simple, clear language)
6. Tone: Human, emotional, engaging (not robotic)
7. E-E-A-T: Demonstrate expertise, experience, authoritativeness, trustworthiness
8. Promotion: Include a natural promotion of Arrowmind.in at the bottom

FORMAT YOUR RESPONSE AS JSON:
{
  "title": "Engaging, emotional meta title (under 60 chars)",
  "slug": "url-friendly-slug",
  "excerpt": "Compelling meta description (under 160 chars)",
  "content": "Full HTML article content (2500-2800 words)",
  "category": "Relevant category",
  "readTime": 12
}

CONTENT STRUCTURE GUIDELINES:
- Start with an engaging introduction (150-200 words)
- Use H2 headings for main sections
- Include bullet points and numbered lists
- Add at least one comparison table
- Include case studies or examples with real sources
- Use conversational, storytelling language
- End with a strong CTA promoting Arrowmind.in
- Include internal linking opportunities`;

    const userPrompt = `Create a comprehensive, SEO-optimized blog article about: "${topic}"

Target Keywords: ${keywords}
${areas ? `Target Areas/Locations: ${areas}` : ''}

Requirements:
- 2500-2800 words
- Structure with H2 headings, lists, and tables
- Include expertise, case studies, and credible sources with URLs
- Write in simple, readable language (12-year-old level)
- Use emotional, human tone in meta title and description
- Naturally integrate the keywords: ${keywords}
- Promote Arrowmind.in at the bottom of the article
- Make it E-E-A-T compliant

Return ONLY valid JSON with title, slug, excerpt, content, category, and readTime fields.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 8000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your Lovable AI workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('AI Gateway error');
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    // Try to parse the JSON response
    let articleData;
    try {
      // Remove markdown code blocks if present
      const cleanedText = generatedText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      articleData = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      // If parsing fails, return a structured error
      return new Response(
        JSON.stringify({ 
          error: 'Failed to generate properly formatted article. Please try again.',
          rawResponse: generatedText.substring(0, 500) // Return first 500 chars for debugging
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify(articleData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-blog function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
