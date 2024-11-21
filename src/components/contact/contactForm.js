"use client";

import { useState } from "react";

export default function ContactForm() {
  const [captcha, setCaptcha] = useState("");

  return (
    <form
      action="/api/messages"
      className="max-w-96 xl:max-w-none w-full mx-auto"
    >
      <div className="flex flex-col xl:flex-row flex-wrap gap-x-10 gap-y-10">
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="firstName" className="whitespace-nowrap">
            First Name <span className="text-[#b89958]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="true"
            required={true}
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="lastName" className="whitespace-nowrap">
            Last Name <span className="text-[#b89958]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="true"
            required={true}
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="emailAddress" className="whitespace-nowrap">
            Email Address <span className="text-[#b89958]">*</span>
          </label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            autoComplete="true"
            required={true}
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="phone" className="whitespace-nowrap">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            autoComplete="true"
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
      </div>
      <div className="w-full h-px bg-[#ccc] bg-opacity-60 my-10 mx-auto"></div>
      <div className="flex flex-col xl:flex-row flex-wrap gap-x-10 gap-y-10">
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <span className="whitespace-nowrap">Home will be</span>
          <div className="flex gap-x-8 gap-y-4 flex-wrap xl:w-96 py-3">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="occupied"
                name="homeWillBe"
                value="Occupied"
                className="h-5 w-5"
              />
              <label htmlFor="occupied" className="text-[#a1a1a1]">
                Occupied
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="vacant"
                name="homeWillBe"
                value="Vacant"
                className="h-5 w-5"
              />
              <label htmlFor="vacant" className="text-[#a1a1a1]">
                Vacant
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="estimatedListDate" className="whitespace-nowrap">
            Estimated List Date <span className="text-[#b89958]">*</span>
          </label>
          <input
            type="date"
            id="estimatedListDate"
            name="estimatedListDate"
            required={true}
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
      </div>
      <div className="w-full h-px bg-[#ccc] bg-opacity-60 my-10 mx-auto"></div>
      <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full">
        <label htmlFor="comments" className="whitespace-nowrap">
          Comments
        </label>
        <textarea
          type="textarea"
          rows="5"
          id="comments"
          name="comments"
          className="w-full xl:w-[960px] resize-none border border-[#ccc] border-opacity-60 p-2.5"
        />
      </div>
      <div className="flex flex-col xl:flex-row justify-end gap-x-10 gap-y-2 xl:items-center w-full mt-10">
        <span>How did you hear about us?</span>
        <div className="flex gap-x-8 gap-y-4 flex-wrap py-3">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              id="internet"
              name="howDidYouHearAboutUs"
              value="Internet"
              className="h-5 w-5"
            />
            <label htmlFor="internet" className="text-[#a1a1a1]">
              Internet
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              id="referral"
              name="howDidYouHearAboutUs"
              value="Referral"
              className="h-5 w-5"
            />
            <label htmlFor="referral" className="text-[#a1a1a1]">
              Referral
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              id="socialMedia"
              name="howDidYouHearAboutUs"
              value="Social Media"
              className="h-5 w-5"
            />
            <label htmlFor="socialMedia" className="text-[#a1a1a1]">
              Social Media
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              id="other"
              name="howDidYouHearAboutUs"
              value="Other"
              className="h-5 w-5"
            />
            <label htmlFor="other" className="text-[#a1a1a1]">
              Other
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-10 items-center mt-10">
        <div className="flex flex-col xl:flex-row gap-y-2 justify-between xl:items-center w-full lg:flex-1">
          <label htmlFor="captcha" className="whitespace-nowrap">
            Captcha <span className="text-[#b89958]">*</span>
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            placeholder="Solve 6 + 7"
            required={true}
            className="xl:w-96 border border-[#ccc] border-opacity-60 p-2.5"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      <div
        className={`${captcha.trim() == "13" ? "flex" : "hidden"} justify-center mt-10`}
      >
        <input
          type="submit"
          value="Send"
          className="w-32 h-10 cursor-pointer hover:bg-[#b89958] border border-[#b89958] text-[#b89958] hover:text-white transition-all duration-500 uppercase"
        />
      </div>
    </form>
  );
}
