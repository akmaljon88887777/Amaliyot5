import React from "react";

function Footer() {
  return (
    <div className="w-full h-[100px] flex justify-center items-center bg-[#1E1E1E] text-white mt-[150px]">
      <p className="text-[16px]">
        Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design:{" "}
        <a
          style={{ textDecoration: "none" }}
          rel="nofollow"
          href="https://templatemo.com"
          target="_blank"
          className="text-white"
        >
          TemplateMo
        </a>
      </p>
    </div>
  );
}

export default Footer;
