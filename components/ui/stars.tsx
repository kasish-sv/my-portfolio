import { Star } from "lucide-react";

type StarProps = {
  rating: number;
};

export default function StarRating({ rating }: StarProps) {
  const totalStars = 5; // max stars

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          size={10}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
