"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = require("node-cron");
node_cron_1.default.schedule('/5* * * * *', () => {
    console.log('ejecitandose cada 5 segundos ' + new Date());
});
//# sourceMappingURL=app.js.map