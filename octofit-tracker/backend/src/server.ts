import { app, port, connectDB } from './index';
import { getApiBaseUrl } from './config/api';

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      const base = getApiBaseUrl();
      console.log(`Server running on port ${port}`);
      console.log(`API base URL: ${base}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
})();
