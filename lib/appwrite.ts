import { Client } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  throw new Error(
    "Missing Appwrite configuration. Set NEXT_PUBLIC_APPWRITE_ENDPOINT and NEXT_PUBLIC_APPWRITE_PROJECT_ID."
  );
}

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

// Appwrite's Web SDK does not expose a Client.ping() method.
// This checks the Appwrite health endpoint using the configured project.
export async function pingAppwrite(): Promise<boolean> {
  const response = await fetch(`${endpoint.replace(/\/$/, "")}/health`, {
    method: "GET",
    headers: {
      "X-Appwrite-Project": projectId,
    },
    cache: "no-store",
  });

  return response.ok;
}
