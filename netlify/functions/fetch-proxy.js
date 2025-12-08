export async function handler(event) {
  const url = new URL(event.rawUrl).searchParams.get("url");
  if (!url) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Missing ?url= parameter"
    };
  }

  try {
    const res = await fetch(url);
    const text = await res.text();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Error fetching site: " + e.message
    };
  }
}
