"use client";

import { useState } from "react";
import Auth from "./auth/page";
import Main from "./home/page";
import { authService } from "./firebase";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);

  return <>{isLoggedIn ? <Main /> : <Auth />}</>;
}
