import { MouseEventHandler, use, useState } from "react";
import { Card } from "./careers-card";
import { IoClose } from "react-icons/io5";
import { Url } from "next/dist/shared/lib/router/router";
import axios from "axios";

export const AddCareerCard = ({
  handleClose,
}: {
  handleClose?: MouseEventHandler;
}) => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [imageLinkValid, setImageLinkValid] = useState<boolean>(false);
  const [preview, setPreview] = useState<string>(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD1rUf3n546fuHVKitOnqcg3KGjAUSijXbP9qSjifgg&s"'
  );
  const [passkey, setPasskey] = useState<string>("");

  const addCareer = async () => {
    try {
      await axios
        .post("https://elixir-careers.onrender.com/api/v1/henlo", {
          name: name,
          image: imageLink,
          CareerLink: link,
          passcode: passkey,
        })
        .then(() => window.location.reload());
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (
      imageLink ===
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD1rUf3n546fuHVKitOnqcg3KGjAUSijXbP9qSjifgg&s"' ||
      imageLink.length === 0
    ) {
      alert("Please provide image url");
      return;
    }
    if (name.length === 0) {
      alert("Please provide Name");
      return;
    }
    if (link.length === 0) {
      alert("Please provide Link");
      return;
    }
    if (passkey.length === 0) {
      alert("Please provide Passkey");
      return;
    }
    if (imageLinkValid) {
      addCareer();
    } else {
      alert("Please check image url by clicking preview");
    }
  };

  const handleImagePreview = (e: any) => {
    e.preventDefault();
    if (imageLink.length === 0) return;
    else {
      var request = new XMLHttpRequest();
      request.open("GET", imageLink, true);
      request.send();
      request.onload = function () {
        // status = request.status;
        if (request.status == 200) {
          //if(statusText == OK)
          setPreview(imageLink);
          setImageLinkValid(true);
        } else {
          setPreview(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD1rUf3n546fuHVKitOnqcg3KGjAUSijXbP9qSjifgg&s"'
          );
          setImageLinkValid(false);
        }
      };
    }
  };

  return (
    <>
      <div className="flex items-center justify-center sticky top-0 dark:bg-gray-500 dark:bg-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm w-[100vw] h-[100vh] z-[99] ">
        <Card
          text="Add"
          className="text-center w-fit h-fit relative"
          onClick={handleAdd}
        >
          <IoClose
            onClick={handleClose}
            className="absolute top-0 left-0 text-2xl p-1 dark:text-white text-black  hover:bg-gray-400 dark:hover:bg-gray-900  rounded-full"
          />
          <form className="flex flex-col items-center gap-1">
            {/* <input type="file"/> */}
            <img
              className="w-full mt-2"
              src={preview}
              alt="unable to preview"
            />
            <div className="flex flex-row mt-1">
              <input
                required={true}
                type="text"
                id="imageLink"
                placeholder="Enter image address"
                onChange={(e) => {
                  setImageLink(e.target.value);
                  setImageLinkValid(false);
                }}
                className="pl-2 "
              />
              <button
                onClick={handleImagePreview}
                className="bg-blue-700 p-1 text-sm text-white"
              >
                Preview
              </button>
            </div>
            <input
              required
              type="text"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="w-fit py-1 px-2  my-1 text-center dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700 font-semibold bg-transparent focus:border-b-2 outline-none dark:border-white border-black"
            />
            <input
              required
              type="text"
              id="link"
              placeholder="Link"
              onChange={(e) => setLink(e.target.value)}
              className="w-fit py-1 px-2 rounded-lg my-1 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700"
            />
            <input
              required
              type="password"
              id="passkey"
              placeholder="Passkey"
              onChange={(e) => setPasskey(e.target.value)}
              className="w-fit py-1 px-2 rounded-lg my-1 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700"
            />
          </form>
        </Card>
      </div>
    </>
  );
};
