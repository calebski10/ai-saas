"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("69d7eb86-ebb6-4f5c-859b-6d02c7c4d827");
  }, []);

  return null;
};
