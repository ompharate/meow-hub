export const getAllPackages = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const response = await fetch(`/api/user/packages/all?userId=${userId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
export const getAllStarPackages = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const response = await fetch(`/api/user/star/all?userId=${userId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};