import React from "react";

// rfc is the shortcut from extension react component

// to make a custom component which we can use anywhere for that we use props
// the function card has the parameter props bydefault which takes the value from where we are using card

// which ever thing we want to make custom those parameter we cann pass it here
// insitead of doing props , prop.usenname we have destrucutre it
// and we are taking parameter like {username}
function Card({ username, btnText = "visit me", myObjone, myarrone }) {
  //console.log(props);
  //console.log(props.username)

  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c"
        alt="card"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">
          {username} {myObjone?.username}
        </h1>

        <p className="mt-2 text-sm text-gray-300">
          Array:{" "}
          {myarrone?.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </p>

        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
