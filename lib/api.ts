export const getAllPackages = async () => {
  const response = await fetch("/api/user/packages/all", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }



  return response.json();
};
