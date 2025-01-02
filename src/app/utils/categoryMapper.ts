// src/utils/categoryMapper.ts
export const getCategoryLabel = (category_id: string): string => {
    switch (category_id) {
      case "1":
        return "Available";
      case "2":
        return "Unavailable";
      default:
        return "Unknown";
    }
  };