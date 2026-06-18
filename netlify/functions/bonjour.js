// netlify/functions/bonjour.js
exports.handler = async (event, context) => {
const nom = event.queryStringParameters.nom || "Jérémy";
return {
statusCode: 200,
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
message: `Bonjour, ${nom} ! Ta fonction serverless fonctionne.`,
timestamp: new Date().toISOString()
})
};
}