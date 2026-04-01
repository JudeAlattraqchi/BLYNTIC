import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

// Helper to compress base64 images to save localStorage space
async function compressImage(base64Str: string, maxWidth = 800): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        // Compress to JPEG with 0.6 quality to drastically reduce size
        resolve(canvas.toDataURL('image/jpeg', 0.6));
      } else {
        resolve(base64Str);
      }
    };
    img.onerror = () => resolve(base64Str);
    img.src = base64Str;
  });
}

export interface GeneratedBlog {
  title: string;
  content: string;
  imageUrl: string;
}

export interface GeneratedJob {
  title: string;
  content: string;
  imageUrl: string;
}

export async function generateJobDescription(title: string, keywords: string): Promise<GeneratedJob> {
  const textModel = "gemini-3-flash-preview";
  const imageModel = "gemini-2.5-flash-image";

  let textData: any = {
    title: title,
    content: "Failed to generate job description."
  };

  try {
    // Generate Text
    const textResponse = await ai.models.generateContent({
      model: textModel,
      contents: `Write a professional, engaging, and detailed job description for the role of "${title}". 
      Incorporate the following keywords/requirements: "${keywords}".
      Include sections like "About the Role", "Key Responsibilities", "Requirements", and "Why Join Us".
      
      Output your response in the following exact format:
      TITLE: [The job title]
      CONTENT:
      [The job description in markdown format]`,
    });

    const rawText = textResponse.text || "";
    const titleMatch = rawText.match(/TITLE:\s*(.*)/i);
    const contentMatch = rawText.match(/CONTENT:\s*([\s\S]*)/i);
    
    if (titleMatch && contentMatch) {
      textData = {
        title: titleMatch[1].trim(),
        content: contentMatch[1].trim()
      };
    } else {
      // Fallback if the model didn't follow the exact format
      textData = {
        title: title,
        content: rawText.trim()
      };
    }
  } catch (e) {
    console.error("Failed to generate or parse job description text:", e);
    throw new Error("Failed to generate job description text.");
  }

  let imageUrl = "https://picsum.photos/1200/675";
  try {
    // Generate Image
    const imageResponse = await ai.models.generateContent({
      model: imageModel,
      contents: {
        parts: [
          {
            text: `A high-quality, professional corporate illustration or photograph representing a career opportunity for a "${title}". Modern, clean, inspiring, and visually striking workplace or conceptual image.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const rawBase64 = `data:image/png;base64,${part.inlineData.data}`;
        imageUrl = await compressImage(rawBase64);
        break;
      }
    }
  } catch (e) {
    console.error("Failed to generate job description image:", e);
  }

  return {
    title: textData.title || title,
    content: textData.content || "Failed to generate job description.",
    imageUrl: imageUrl,
  };
}

export async function generateBlogContent(topic: string): Promise<GeneratedBlog> {
  const textModel = "gemini-3-flash-preview";
  const imageModel = "gemini-2.5-flash-image";

  let textData: any = {
    title: topic,
    content: "Failed to generate content."
  };

  try {
    // Generate Text
    const textResponse = await ai.models.generateContent({
      model: textModel,
      contents: `Write an engaging LinkedIn post about "${topic}". 
      Write it from a first-person perspective based on your own personal experience and lessons learned.
      The tone should be educational, insightful, and authentic.
      CRITICAL FORMATTING RULES:
      1. Keep the total length to approximately 300 words.
      2. Do NOT use any markdown hashtags (like # or ##) for headings.
      3. Use ALL CAPS or emojis to separate sections if needed.
      4. Add a clear blank line between every single paragraph or section for readability.
      
      Output your response in the following exact format:
      TITLE: [Your catchy hook title here]
      CONTENT:
      [Your post body here]`,
    });

    const rawText = textResponse.text || "";
    const titleMatch = rawText.match(/TITLE:\s*(.*)/i);
    const contentMatch = rawText.match(/CONTENT:\s*([\s\S]*)/i);
    
    if (titleMatch && contentMatch) {
      textData = {
        title: titleMatch[1].trim(),
        content: contentMatch[1].trim()
      };
    } else {
      // Fallback if the model didn't follow the exact format
      textData = {
        title: topic,
        content: rawText.trim()
      };
    }
  } catch (e) {
    console.error("Failed to generate or parse blog content text:", e);
    throw new Error("Failed to generate blog text.");
  }

  let imageUrl = "https://picsum.photos/1200/675";
  try {
    // Generate Image
    const imageResponse = await ai.models.generateContent({
      model: imageModel,
      contents: {
        parts: [
          {
            text: `A high-quality, professional editorial illustration or photograph for a blog post about "${topic}". Modern, clean, and visually striking.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const rawBase64 = `data:image/png;base64,${part.inlineData.data}`;
        imageUrl = await compressImage(rawBase64);
        break;
      }
    }
  } catch (e) {
    console.error("Failed to generate blog image:", e);
  }

  return {
    title: textData.title || topic,
    content: textData.content || "Failed to generate content.",
    imageUrl: imageUrl,
  };
}
