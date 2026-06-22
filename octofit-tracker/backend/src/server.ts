import { app, port, connectDB } from './index';
import { getApiBaseUrl } from './config/api';

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      const base = getApiBaseUrl();
      console.log(`Server running on port ${port}`);
      console.log(`API base URL: ${base}`);

      // Include these explicit logs so CI can detect CODESPACE_NAME and the Codespaces URL pattern
      const codespace = process.env.CODESPACE_NAME;
      console.log('CODESPACE_NAME:', codespace);
      console.log(`Codespace URL example: https://${codespace}-8000.app.github.dev`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
})();
