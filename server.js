(async () => {
    const express = (await import('express')).default;
    const { handler } = await import('./build/index.js');

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(handler);

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
