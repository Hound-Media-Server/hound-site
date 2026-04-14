import fs from 'fs';

const filePath = 'docs/public/openapi.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function wrapInAllOf(obj) {
    if (!obj || typeof obj !== 'object') return;

    if (obj.schema && obj.schema.$ref) {
        console.log(`Wrapping ref: ${obj.schema.$ref}`);
        obj.schema = {
            allOf: [
                { $ref: obj.schema.$ref }
            ]
        };
    }
}

// Traverse paths to find requestBody and responses
if (data.paths) {
    for (const path in data.paths) {
        for (const method in data.paths[path]) {
            const op = data.paths[path][method];
            
            // Check requestBody
            if (op.requestBody && op.requestBody.content) {
                for (const mediaType in op.requestBody.content) {
                    wrapInAllOf(op.requestBody.content[mediaType]);
                }
            }
            
            // Check responses
            if (op.responses) {
                for (const code in op.responses) {
                    if (op.responses[code].content) {
                        for (const mediaType in op.responses[code].content) {
                            wrapInAllOf(op.responses[code].content[mediaType]);
                        }
                    }
                }
            }
        }
    }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
console.log('Finished wrapping direct $refs in allOf.');
