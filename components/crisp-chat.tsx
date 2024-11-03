"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("257f6d69-3fcc-427b-8c74-c342e58eaf4b");
  }, []);

  return null;
};
