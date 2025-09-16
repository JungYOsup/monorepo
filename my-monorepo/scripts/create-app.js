const fs = require("fs");
const path = require("path");

const appName = process.argv[2];
if (!appName) {
  console.error("❌ 앱 이름을 입력하세요. 예: npm run create:app company-a");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const devPath = path.join(root, "apps", "dev");
const newAppPath = path.join(root, "apps", appName);

if (!fs.existsSync(devPath)) {
  console.error("❌ apps/dev 이(가) 없습니다. 먼저 템플릿을 생성하세요.");
  process.exit(1);
}
if (fs.existsSync(newAppPath)) {
  console.error(`❌ apps/${appName} 이(가) 이미 존재합니다.`);
  process.exit(1);
}

// 폴더 복사
fs.cpSync(devPath, newAppPath, { recursive: true });

// package.json name 변경
const pkgPath = path.join(newAppPath, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
pkg.name = appName;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// (선택) index.html 제목 치환
const indexHtml = path.join(newAppPath, "index.html");
if (fs.existsSync(indexHtml)) {
  let html = fs.readFileSync(indexHtml, "utf-8");
  html = html.replace(/<title>.*<\/title>/, `<title>${appName}</title>`);
  fs.writeFileSync(indexHtml, html);
}

console.log(`✅ apps/${appName} 생성 완료!`);
console.log("   실행: cd apps/" + appName + " && npm run dev");
