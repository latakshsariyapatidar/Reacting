import React from "react";

function Cards() {
  const handleAvailbleClick = (elem) => {};

  const data = [
    {
      img: "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q:80&w:1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon",
      description:
        "Amazon is a global e-commerce and technology company founded by Jeff Bezos. It offers online retail, cloud computing (AWS), digital streaming.",
      available: true,
    },
    {
      img: "https://images.unsplash.com/photo-1587033649773-5c231faa21e3?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Swiggy",
      description:
        "Swiggy is an Indian food delivery platform founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini. It allows users to order food from ",
      available: true,
    },
    {
      img: "https://images.unsplash.com/photo-1653389527532-884074ac1c65?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Zomato",
      description:
        "Zomato is an Indian multinational food delivery and restaurant aggregation company founded in 2008 by Deepinder Goyal and Pankaj Chaddah.",
      available: true,
    },
    {
      img: "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Flipkart",
      description:
        "Flipkart is an Indian e-commerce company founded by Sachin and Binny Bansal. It offers a wide range of products, including electronics, fashion, home goods,.",
      available: false,
    },
  ];
  return (
    <>
      {data.map((elem, index) => (
        <div
          id="container"
          className="w-48 p-1 m-4 border rounded-lg h-fit border-slate-900 min-h-96"
        >
          <img className="item-cover" src={elem.img} alt={elem.name} />
          <h2 className="mb-4 text-xl font-bold">{elem.name}</h2>
          <p className="font-mono text-sm">{elem.description}</p>
          <button
            onClick={() => {
              if (elem.available) {
                alert("This item is currently available.");
              } else {
                alert("This item is currently not available.");
              }
            }}
            className={`px-4 py-2 mt-3 font-semibold text-white ${
              elem.available ? "bg-blue-500" : "bg-red-500"
            } rounded`}
          >
            {elem.available ? "Available" : "Not Available"}
          </button>
        </div>
      ))}
    </>
  );
}

export default Cards;
