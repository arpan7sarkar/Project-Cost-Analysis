import React from "react";

const Community: React.FC = () => {
  const reviews = [
    {
      id: 1,
      user: "Alex Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      review:
        "This platform is amazing! It helped me predict the success of my project with great accuracy.",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      review:
        "The community here is so supportive. I got valuable feedback on my project analysis.",
    },
    {
      id: 3,
      user: "Sam Wilson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      review:
        "A must-have tool for any project manager. The prediction feature is a game-changer.",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Community</h1>

      {/* Community Feed */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
          >
            <img
              src={review.avatar}
              alt={review.user}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-800">{review.user}</h3>
              <p className="text-gray-600 mt-1">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Post Input Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-[9vh]">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Share your thoughts
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg ml-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
