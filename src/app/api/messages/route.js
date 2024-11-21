import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "next-sanity";

export const runtime = "edge";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export async function GET(req) {
  const allowedOrigins = [process.env.SITE_URL];

  const origin = req.nextUrl.origin;

  if (!allowedOrigins.includes(origin)) {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  const searchParams = req.nextUrl.searchParams;
  const paramsObject = Object.fromEntries(searchParams.entries());

  const {
    firstName,
    lastName,
    emailAddress,
    phone,
    homeWillBe,
    estimatedListDate,
    comments,
    howDidYouHearAboutUs,
    captcha,
  } = paramsObject;

  if (!firstName || firstName.trim() === "") {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  if (!lastName || lastName.trim() === "") {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailAddress || !emailRegex.test(emailAddress)) {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  if (homeWillBe && !["Occupied", "Vacant"].includes(homeWillBe)) {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  if (!estimatedListDate || isNaN(new Date(estimatedListDate).getTime())) {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  if (
    howDidYouHearAboutUs &&
    !["Internet", "Referral", "Social Media", "Other"].includes(
      howDidYouHearAboutUs
    )
  ) {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  if (captcha.trim() !== "13") {
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }

  const trimmedMessage = {
    submittedAt: new Date().toISOString(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    emailAddress: emailAddress.trim(),
    phone: phone?.trim(),
    homeWillBe,
    estimatedListDate,
    comments: comments?.trim(),
    howDidYouHearAboutUs,
  };

  try {
    await client.create({
      _type: "message",
      _id: uuidv4(),
      ...trimmedMessage,
    });

    return NextResponse.redirect(`${origin}/contact?success=true`);
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(`${origin}/contact?success=false`);
  }
}
