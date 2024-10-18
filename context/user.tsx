"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  CurrentUser: any; 
  loading: boolean;
  onboardingComplete: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [CurrentUser, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = user?.id;

      if (userId) {
     
          const userDetails = await fetchUserDetails(userId);
          
          if (userDetails.success) {
              setUser(userDetails);
              setOnboardingComplete(userDetails.onboardingCompleted);
            }else{
                router.push("/onboarding")
            }
      
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const fetchUserDetails = async (userId: string) => {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }

    return response.json();
  };

  return (
    <UserContext.Provider value={{ CurrentUser, loading, onboardingComplete }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};