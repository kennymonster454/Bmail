"use client";

import { useEffect, useState } from "react";
import { pingAppwrite } from "@/lib/appwrite";

export function AppwriteStatus() {
  const [status, setStatus] = useState<"checking" | "connected" | "error">("checking");

  useEffect(() => {
    let active = true;

    pingAppwrite()
      .then((ok) => {
        if (active) setStatus(ok ? "connected" : "error");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="connection-status" role="status">
      <span className={`status-dot ${status}`} />
      {status === "checking" && "Connecting to Appwrite…"}
      {status === "connected" && "Appwrite connected"}
      {status === "error" && "Appwrite connection needs checking"}
    </div>
  );
}
