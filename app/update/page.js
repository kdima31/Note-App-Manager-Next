"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../Redux/features/noteSlice";
import { useRouter } from "next/navigation";

const Edit = () => {
  const router = useRouter();
  const params = useParams();
  let data = useSelector((state) => state.notes);
  let dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const getData = useCallback(
    (index) => {
      setTitle(data[index].title);
      setContent(data[index].content);
    },
    [data]
  );

  useEffect(() => {
    if (Number(params.id) < data.length) {
      getData(Number(params.id));
    } else {
      console.log("test");
      // TODO
      // navigate('/');
      router.push(-1);
    }
  }, [params.id, data, getData, router]);
  const handleSave = (params) => {
    dispatch(edit({ params, values: { title, content } }));
    // TODO
    // navigate('/');
    console.log(title, content);
  };

  return (
    <>
      <div id="container-fluid">
        <div className="addnote bg-white ">
          <div className="input">
            <h3 className="top1"> Add a Note</h3>
            <input
              className="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              className="form"
              id="exampleFormControlTextarea1"
              value={content}
              placeholder="Take a note..."
              rows="3"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <span
            className="btn btn-primary mt-2 "
            onClick={() => handleSave(params.id)}
          >
            {" "}
            Add Notes
          </span>
        </div>
      </div>
    </>
  );
};

export default Edit;
