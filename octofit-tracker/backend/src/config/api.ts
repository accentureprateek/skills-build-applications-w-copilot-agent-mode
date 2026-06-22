export function getApiBaseUrl(): string {
  const codespace = process.env.CODESPACE_NAME;
  const port = process.env.PORT || '8000';
  if (codespace) {
    return `https://${codespace}-${port}.app.github.dev`;
  }
  return `http://localhost:${port}`;
}
