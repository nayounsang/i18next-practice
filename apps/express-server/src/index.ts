import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 번역 파일 제공 엔드포인트
app.get("/api/locales/:lng/:ns.json", async (req, res) => {
  const { lng, ns } = req.params;

  try {
    // 로딩 상태 확인을 위한 2초 지연
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const filePath = join(__dirname, "locales", lng, `${ns}.json`);
    const translationFile = readFileSync(filePath, "utf-8");
    const translation = JSON.parse(translationFile);

    res.json(translation);
  } catch (error) {
    console.error(`Error loading translation file: ${error}`);
    res.status(404).json({ error: "Translation file not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
