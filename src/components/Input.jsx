"use client";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/firebase";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  const imagePickRef = useRef(null);
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageFileUploading, setImageFileUploading] = useState(false)
  
  const addImageToPost = (e) => {
    const file = e.target.files[0]
    if(file) {
      setSelectedFile(file)
      setImageFileUrl(URL.createObjectURL(file))
    }
  }

  useEffect(() => {
    if(selectedFile) {
      uploadImageToStorage()
    }
  })

  const uploadImageToStorage = () => {
    setImageFileUploading(true);
    const storage = getStorage(app)
    const fileName = new Date().getTime() + '-' + selectedFile.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, selectedFile)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error);
        setImageFileUploading(false);
        setImageFileUrl(null);
        setSelectedFile(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setImageFileUploading(false);
        });
      }
    );
  }
  
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className="flex p-3 space-x-3 border-b border-gray-200">
      <img
        src={session.user.image}
        alt="user-img"
        className="rounded-full cursor-pointer h-11 w-11 hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <textarea className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700" placeholder="Whats happening" rows="2"></textarea>
        {selectedFile && (
          <img
          src={imageFileUrl}
          alt="post-img"
          className="w-full max-h-[250px] object-cover cursor-pointer"
        />
        )}
        <div className="flex items-center justify-between p-2.5">
            <HiOutlinePhotograph onClick={() => imagePickRef.current.click()} className="w-10 h-10 p-2 rounded-full text-sky-500 hover:bg-sky-100 hover:cursor-pointer" />
            <input type="file" ref={imagePickRef} accept="image/*" onChange={addImageToPost} hidden />
            <button className="px-4 py-1.5 font-bold text-white bg-blue-400 rounded-full shadowa-medium hover:brightness-95 disabled:opacity-50">Post</button>
        </div>
      </div>
    </div>
  );
}