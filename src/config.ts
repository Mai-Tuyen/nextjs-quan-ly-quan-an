import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_URL: z.string(),
});

const configProject = configSchema.safeParse({
  // validate object và trả về giá trị nếu pass
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
});

if (!configProject.success) {
  console.error(configProject.error.errors);
  throw new Error("Invalid env");
}

const envConfig = configProject.data;

export default envConfig;
