import { useEffect, useState } from "react";
import { fetchGuestSession } from "@/features/detail/api/movieRating";

const GUEST_SESSION_ID_KEY = "guest_session_id";

export const useGuestSession = () => {
  const [guestSessionId, setGuestSessionId] = useState<string | null>(
    localStorage.getItem(GUEST_SESSION_ID_KEY),
  );

  useEffect(() => {
    if (guestSessionId) {
      return;
    }

    fetchGuestSession().then((session) => {
      localStorage.setItem(GUEST_SESSION_ID_KEY, session.guest_session_id);
      setGuestSessionId(session.guest_session_id);
    });
  }, [guestSessionId]);

  return guestSessionId;
};
